import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

              const Profil = () => {
    useEffect(() => {
        gsap.defaults({ overwrite: "auto" });
        gsap.set(".left-content > *", { xPercent: -50, yPercent: -50 });

        // Set up our scroll trigger
        const ST = ScrollTrigger.create({
            trigger: ".content-container",
            start: "top top",
            end: "bottom bottom",
            onUpdate: getCurrentSection,
            pin: ".left-content",
        });

        const contentMarkers = gsap.utils.toArray(".contentMarker");

        // Set up content behaviors
        contentMarkers.forEach((marker) => {
            const content = document.querySelector(
                `#${marker.dataset.markerContent}`
            );
            marker.content = content;

            if (content.tagName === "IMG") {
                gsap.set(content, { transformOrigin: "center" });

                marker.content.enter = function () {
                    gsap.fromTo(
                        content,
                        { autoAlpha: 0, rotateY: -30 },
                        { duration: 0.3, autoAlpha: 1, rotateY: 0 }
                    );
                };
            } else if (content.tagName === "BLOCKQUOTE") {
                gsap.set(content, { transformOrigin: "left center" });

                marker.content.enter = function () {
                    gsap.fromTo(
                        content,
                        { autoAlpha: 0, rotateY: 50 },
                        { duration: 0.3, autoAlpha: 1, rotateY: 0 }
                    );
                };
            }

            marker.content.leave = function () {
                gsap.to(content, { duration: 0.1, autoAlpha: 0 });
            };
        });

        let lastContent;
        function getCurrentSection() {
            let newContent;
            const currScroll = window.scrollY;

            // Find the current section
            contentMarkers.forEach((marker) => {
                if (currScroll > marker.offsetTop) {
                    newContent = marker.content;
                }
            });

            // If the current section is different than the last, animate in
            if (
                newContent &&
                (lastContent == null || !newContent.isSameNode(lastContent))
            ) {
                // Fade out last section
                if (lastContent) {
                    lastContent.leave();
                }

                // Animate in new section
                newContent.enter();

                lastContent = newContent;
            }
        }

        const media = window.matchMedia("screen and (max-width: 800px)");
        ScrollTrigger.addEventListener("refreshInit", checkSTState);
        checkSTState();

        function checkSTState() {
            if (media.matches) {
                ST.disable();
            } else {
                ST.enable();
            }
        }

        return () => {
            // Cleanup on component unmount
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <div className="content-container">
            <div className="left-content">
                <img
                    id="img1"
                    className="imageToShow"
                    src="https://images.unsplash.com/photo-1586410073908-5f314173d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxODczMTl8&ixlib=rb-4.0.3&q=80&w=400"
                    alt="kitty"
                />
                <img
                    id="img2"
                    className="imageToShow"
                    src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxODczMTl8&ixlib=rb-4.0.3&q=80&w=400"
                    alt="kitty"
                />
                <blockquote
                    id="text1"
                    className="textToShow"
                    cite="https://www.youtube.com/watch?v=PKffm2uI4dk"
                >
                    <p></p>
                    <footer>
                        — Fluffy, the kitten <cite>Sad Cat Diary</cite>
                    </footer>
                </blockquote>
                <img
                    id="img3"
                    className="imageToShow"
                    src="https://images.unsplash.com/photo-1615678815958-5910c6811c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxODczMTl8&ixlib=rb-4.0.3&q=80&w=400"
                    alt="kitty"
                />
            </div>

            <div className="right-content">
                <p className="contentMarker" data-marker-content="img1">
                    Cat ipsum dolor sit amet, attack the child i show my fluffy
                    belly but it's a trap! Meow and walk away meow for food,
                    then when human fills food dish, take a few bites of food
                    and continue meowing scream at teh bath...
                </p>
                {/* Add other paragraphs here */}
            </div>
        </div>
    );
};

export default Profil;
