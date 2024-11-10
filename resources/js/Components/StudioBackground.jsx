import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Dodecahedron,
  MeshTransmissionMaterial,
  OrbitControls,
  Torus,
  MeshDistortMaterial,
  Html,
  Trail,
  useCursor,
  MarchingCubes,
  MarchingCube,
  MarchingPlane,
  Environment,
  PerspectiveCamera,
  ContactShadows,
  CameraShake,
  Clouds,
  Cloud,
  SpotLight,
} from "@react-three/drei";
import { useRef, useMemo, useState, useEffect, createContext, useContext, Suspense } from "react";
import * as THREE from "three";
import { random } from "maath";
import Model from "/public/Com_logo.jsx";
import { BallCollider, CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
const context = createContext();



function MyScene() {
  const shake = useRef();
  const [loading, setLoading] = useState(true);
  const [hidden, set] = useState();
  // Define handlePos as an array of THREE.Vector3 points for the curve
  const handlePos = [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(0, 0.2, 0), new THREE.Vector3(0, 0.2, 0), new THREE.Vector3(0, -0.4, 0)];

  // Create the CatmullRomCurve3 based on the handlePos
  const curve = useMemo(() => new THREE.CatmullRomCurve3(handlePos, true, "centripetal"), [handlePos]);
  const [t, setT] = useState(0);
  // Material properties for the Dodecahedron
  const materialProps = {
    background: "white",
    backside: false,
    samples: 10,
    resolution: 2048,
    transmission: 1,
    roughness: 0.5,
    thickness: 0.1,
    ior: 1,
    chromaticAberration: 1,
    anisotropy: 1,
    distortion: 1,
    distortionScale: 1,
    temporalDistortion: 0.4,
    clearcoat: 0.1,
    attenuationDistance: 0.5,
    attenuationColor: "white",
    color: "yellow",
    backsideThickness: 0,
    backsideEnvMapIntensity: 0.1,
    backsideResolution: 2048,
    transmissionSampler: false,
  };


  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 5000); // Set loading for 2 seconds
    console.log(loading)
    return () => clearTimeout(timer);
  }, []);
  // Animate t from 0 to 1 (looping)
  useEffect(() => {
    const interval = setInterval(() => {
      setT((prevT) => (prevT + 0.01) % 1); // Loop t between 0 and 1
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas>
   <Suspense fallback={<LoadingScreen />}>
        <context.Provider value={shake}>
          <CameraShake ref={shake} decay decayRate={0.95} maxYaw={0.05} maxPitch={0.01} yawFrequency={4} pitchFrequency={2} rollFrequency={2} intensity={1} />
          <Clouds limit={10} material={THREE.MeshLambertMaterial}>
            <Physics gravity={[0, 0, 0]}>
              <Pointer />
              <Puffycloud seed={10} position={[1, 0, 0]} />
              <Puffycloud seed={20} position={[0, 50, 0]} />
              <Puffycloud seed={30} position={[50, 0, 50]} />
              <Puffycloud seed={40} position={[0, 0, -50]} />
              <CuboidCollider position={[0, -15, 0]} args={[400, 10, 400]} />
            </Physics>
          </Clouds>
          <Physics gravity={[0, 20, 0]}>
            <Dodecahedron args={[1, 0]} scale={10}>
              <MeshTransmissionMaterial {...materialProps} />
              {/* Torus with MeshDistortMaterial */}

              <Model scale={0.01} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}></Model>

              {/* Html component with text */}
              <Html
                as='div'
                sprite
                occlude
                transform
                center
                position={[0, -0.8, 0.5]}
                receiveShadow
                onOcclude={set}
                style={{
                  transition: "all 0.5s",
                  opacity: hidden ? 0 : 1,
                  transform: `scale(${hidden ? 0.5 : 1})`,
                }}
              >
                {/* Background dengan material 3D */}

                {/* Teks yang akan tetap berada di atas background */}
                <span className='text-2xl font-extrabold  text-white'>
                  <div style={{ transform: "scale(2)" }}>Dinas Pariwisata Kab Cirebon</div>
                </span>
              </Html>
            </Dodecahedron>
          </Physics>
          <MouseTrail />
          <Trail
            width={2} // Width of the line
            color={"hotpink"} // Color of the line
            length={1} // Length of the line
            decay={1} // How fast the line fades away
            local={false} // Wether to use the target's world or local positions
            stride={0} // Min distance between previous and current point
            interval={1} // Number of frames to wait before next calculation
            target={undefined} // Optional target. This object will produce the trail.
            attenuation={(width) => width * width} // A function to define the width in each point along it.
          ></Trail>
        </context.Provider>
      </Suspense>




      <Environment preset='city' backgroundBlurriness={1} blur={1}></Environment>
      <ambientLight intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 20, 10]} fov={90} onUpdate={(self) => self.lookAt(0, 0, 0)}>
        <spotLight position={[0, 40, 2]} angle={0.5} decay={1} distance={45} penumbra={1} intensity={1000} />
        <spotLight position={[-19, 0, -8]} color='red' angle={0.25} decay={0.75} distance={185} penumbra={-1} intensity={400} />
      </PerspectiveCamera>

      <ContactShadows opacity={0.5} color='black' position={[0, -10, 0]} scale={50} blur={5} far={50} />
      <OrbitControls makeDefault autoRotate enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 1.7} maxPolarAngle={Math.PI / 1.7} />
    </Canvas>
  );
}


function LoadingScreen() {
    return (
      <Html center>
        <div style={{ color: "white", backgroundColor: "white", fontSize: "2em", border: "1px solid white", padding: "1em" }}>
          <div className="spinner" style={spinnerStyles}></div>
          <p>Loading...</p>
        </div>
      </Html>
    );
  }

  // Simple spinner styling
  const spinnerStyles = {
    border: "5px solid rgba(255, 255, 255, 0.3)",
    borderTop: "5px solid white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  };








  function MouseTrail() {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState(new THREE.Vector3());

    // Get camera from the scene context
    const { camera } = useThree();
    // Ensure that the MarchingCubes component is properly initialized

    // Track mouse position on the screen
    useEffect(() => {
      const handleMouseMove = (event) => {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.9); // Z depth set to 0.5
        vector.unproject(camera); // Unproject to world space using camera
        setMousePos(vector);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [camera]); // Make sure the camera is available

    // Use the useCursor hook to change the cursor style based on hover state
    useCursor(hovered, "pointer", "auto");

    return (
      <>
        {/* Trail following the mouse */}
        <Trail
          target={mousePos} // Set the trail's target to the mouse position
          width={0.1} // Width of the trail
          color={"white"} // Color of the trail
          length={3} // Length of the trail
          decay={0.1} // How fast the trail fades away
          local={false} // Use world space for the trail
          stride={-1} // Minimum distance between trail points
          interval={0.5} // Number of frames to wait before updating
          attenuation={(widht = this.width) => widht * 1} // Keep the width consistent along the trail
        >
          <mesh position={mousePos} scale={[0.1, 0.1, 0.1]}>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color='black' />
          </mesh>
        </Trail>
      </>
    );
  }

  function Puffycloud({ seed, vec = new THREE.Vector3(), ...props }) {
  const api = useRef();
  const light = useRef();
  const rig = useContext(context);
  const [flash] = useState(() => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 }));
  const contact = (payload) => payload.other.rigidBodyObject.userData?.cloud && payload.totalForceMagnitude / 1000 > 100 && flash.burst();
  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta);
    light.current.intensity = impulse * 15000;
    if (impulse === 1) rig?.current?.setIntensity(1);
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(10));
  });
  return (
    <RigidBody ref={api} userData={{ cloud: true }} onContactForce={contact} linearDamping={4} angularDamping={1} friction={0.1} {...props} colliders={false}>
      <BallCollider args={[4]} />
      <Cloud seed={seed} fade={30} speed={0.1} growth={0} segments={40} volume={0} opacity={0.6} bounds={[4, 3, 1]} position={[0, -2, 0]} />
      <Cloud seed={seed + 1} fade={30} position={[0, -1, 0]} speed={0.5} growth={0} segments={0} volume={10} opacity={1} bounds={[6, 2, 1]} />

      <pointLight position={[0, 0, 0.5]} ref={light} color='red' />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), dir = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ pointer, viewport, camera }) => {
    vec.set(pointer.x, pointer.y, 0.5).unproject(camera);
    dir.copy(vec).sub(camera.position).normalize();
    vec.add(dir.multiplyScalar(camera.position.length()));
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody userData={{ cloud: true }} type='kinematicPosition' colliders={false} ref={ref}>
      <BallCollider args={[4]} />
    </RigidBody>
  );
}
export default function StudioBackground() {
  return (
    <>
      <MyScene></MyScene>
    </>
  );
}
