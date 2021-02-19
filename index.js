import {gsap} from "gsap";

export function help() {
  console.log('gsap-basic check is running', gsap.timeline);
}

export function fadeInUp (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 0,
      y: -100 + '%'
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      onComplete: done
    }
  )
}
export function fadeInDown (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 0,
      y: 100 + '%'
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      onComplete: done
    }
  )
}
export function fadeOutDown (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 1,
      y: 0
    },
    {
      opacity: 0,
      y: 100 + '%',
      duration: 0.5,
      onComplete: done
    }
  )
}
export function fadeOutUp (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 1,
      y: 0
    },
    {
      opacity: 0,
      y: -100 + '%',
      duration: 0.5,
      onComplete: done
    }
  )
}
export function fadeInLeft (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 0,
      x: -100 + '%'
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.3,
      onComplete: done
    }
  )
}
export function fadeInRight (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 0,
      x: 100 + '%'
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.3,
      onComplete: done
    }
  )
}
export function fadeOutRight (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 1,
      x: 0
    },
    {
      opacity: 0,
      x: 100 + '%',
      duration: 0.5,
      onComplete: done
    }
  )
}
export function fadeOutLeft (el, done) {
  const tl = gsap.timeline({
  })
  tl.fromTo(el,
    {
      opacity: 1,
      x: 0
    },
    {
      opacity: 0,
      x: -100 + '%',
      duration: 0.5,
      onComplete: done
    }
  )
}

export default { 
  help,
  fadeInUp,
  fadeInDown,
  fadeOutDown,
  fadeOutUp,
  fadeInLeft,
  fadeInRight,
  fadeOutRight,
  fadeOutLeft
 }