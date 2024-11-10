import Lenis from '@studio-freight/lenis'
const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const nestedScroll = new Lenis({
    prevent: (node) => node.id === 'scroll'
})
