<!-- <script src="imagesloaded.pkgd.min.js"></script> -->
<!-- <script src="./perlin.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script> -->

<!-- <script src="https://unpkg.com/@barba/core"></script> -->
<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js'></script> -->
<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js'></script> -->

<!-- <script src="./anime.min.js"></script> -->
<!-- <script src='https://assets.codepen.io/16327/SplitText3.min.js'></script> -->

<!-- <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js'></script> -->

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script> -->

<!-- <script src="./barba.umd.js"></script> -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.5/dat.gui.min.js"></script> -->


<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js'></script> -->
<!-- <script src='https://unpkg.com/splitting/dist/splitting.min.js'></script> -->
<!-- <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> -->

// Запуск функций при старте документа
// $(document).ready(function () { })

// --- Code animation
// $('.heart-animation').html("<pre id=p>"), j = 0,
//   setInterval(() => {
//     for (M = Math, A = M.abs, T = '4#0;:-·', S = 20, s = '', i = 492; i--;)
//       s += (x = i % 41) ? T[A(j - (((M.hypot((X = x - S) / S * (.5 + .5 * (Y = 2 * ((i / 41) | 0) - 10) / S), Y / S - A(X / S) * .63) - .7) * S) | 0)) % 7] : '\n';
//     p.innerHTML = s; j++
//   }, 150)






// // --- Script for animating the letters
// function findRandom(n) {
//   let num = (1 + parseInt(Math.random() * 100)) % n;
//   return num;
// }

// function razz() {
//   var cover = document.getElementById("razz");
//   var letter = cover.getElementsByTagName("b");

//   let C = "";
//   z = findRandom(5);
//   if (z == 0) {
//     C = "l-shadow";
//   } else if (z == 1) {
//     C = "l-slide";
//   } else if (z == 2) {
//     C = "l-spin";
//   } else if (z == 3) {
//     C = "l-bump";
//   } else if (z == 4) {
//     C = "l-spin-back";
//   }

//   let x = findRandom(10);
//   letter[x].classList.add(C);

//   setTimeout(function () {
//     letter[x].classList.remove(C);
//   }, 1200);

//   setTimeout(function () {
//     razz();
//   }, 3000);
// }
// razz();


// --- Locomotive Scroll (Smoth)
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   smoothMobile: true,
// });
// scroll.destroy();
// document.addEventListener("DOMContentLoaded", function (event) {
//   scroll.init();
// });


// $('.wave').click(function () {
//   $(this).toggleClass('active');
// });




// let section = document.querySelector('.box');
// let text = document.querySelector('.text')
// let innerText = document.querySelector('.innerText')
// window.addEventListener('scroll', function () {
//   let value = window.scrollY;
//   section.style.clipPath = "circle(" + value + "px at center center)";
//   text.style.left = 100 - value / 5 + '%';
//   innerText.style.left = 100 - value / 5 + '%';
// })





// // --- Infinite Animate Text
// let parent = document.querySelectorAll('.animate-text');
// for (let i = 0; i < parent.length; i++) {
//   parent[i].style.width = parent[i].children[0].clientWidth + "px";
// };


// $('.think__inner').hover(
//   function () {
//     $('.think__images').css('opacity', 1);
//   },
// );

// $('.think__item1').hover(
//   function () {
//     $('.think__img1').css('z-index', 2);
//     $('.think__img2').css('z-index', 1);
//   },
// );
// $('.think__item2').hover(
//   function () {
//     $('.think__img1').css('z-index', 1);
//     $('.think__img2').css('z-index', 2);
//   },
// );



<!-- 
<script>

  pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
      zIndex: 1
    });

    timeline.to(".page-transition", {
      duration: 1,
      height: "100%",
      top: "0%"
    });

    timeline.to(".page-transition", {
      duration: .8,
      height: "100%",
      top: "100%",
      delay: .3
    });

    timeline.set(".page-transition", {
      top: "-100%"
    });
  }

  mainAnimation = () => {
    var timeline = gsap.timeline();

    timeline.from(".container h1, .menu-items li, .logo", {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: {
        amount: .4
      },
      delay: .8
    });
  }

  delay = (n) => {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    })
  }

  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          mainAnimation();
        },

        async once(data) {
          mainAnimation();
        }
      }
    ]
  });
</script> -->

<!-- <script>

  const store = {
    ww: document.querySelector('.slider').clientWidth,
    wh: document.querySelector('.slider').clientHeight,
    isDevice: navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
  }

  class Slider {

    constructor(el, opts = {}) {
      this.bindAll()

      this.el = el

      this.opts = Object.assign({
        speed: 2,
        threshold: 50,
        ease: 0.075
      }, opts)

      this.ui = {
        items: this.el.querySelectorAll('.js-slide'),
        lines: document.querySelectorAll('.js-progress-line')
      }

      this.state = {
        target: 0,
        current: 0,
        currentRounded: 0,
        y: 0,
        on: {
          x: 0,
          y: 0
        },
        off: 0,
        progress: 0,
        diff: 0,
        max: 0,
        min: 0,
        snap: {
          points: []
        },
        flags: {
          dragging: false
        }
      }

      this.items = []

      this.events = {
        move: store.isDevice ? 'touchmove' : 'mousemove',
        up: store.isDevice ? 'touchend' : 'mouseup',
        down: store.isDevice ? 'touchstart' : 'mousedown'
      }

      this.init()
    }

    bindAll() {
      ['onDown', 'onMove', 'onUp']
        .forEach(fn => this[fn] = this[fn].bind(this))
    }

    init() {
      return gsap.utils.pipe(
        this.setup(),
        this.on()
      )
    }

    destroy() {
      this.off()
      this.state = null
      this.items = null
      this.opts = null
      this.ui = null
    }

    on() {
      const { move, up, down } = this.events

      window.addEventListener(down, this.onDown)
      window.addEventListener(move, this.onMove)
      window.addEventListener(up, this.onUp)
    }

    off() {
      const { move, up, down } = this.events

      window.removeEventListener(down, this.onDown)
      window.removeEventListener(move, this.onMove)
      window.removeEventListener(up, this.onUp)
    }

    setup() {
      const { ww } = store
      const state = this.state
      const { items } = this.ui

      const {
        width: wrapWidth,
        left: wrapDiff
      } = this.el.getBoundingClientRect()

      // Set bounding
      state.max = -(items[items.length - 1].getBoundingClientRect().right - wrapWidth - wrapDiff)
      state.min = 0

      // Global timeline
      this.tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 1,
          ease: 'linear'
        }
      })
        .fromTo('.js-progress-line-2', {
          scaleX: 1
        }, {
          scaleX: 0,
          duration: 0.5,
          ease: 'power3'
        }, 0)
        .fromTo('.js-progress-line', {
          scaleX: 0
        }, {
          scaleX: 1
        }, 0)

      // Cache stuff
      for (let i = 0; i < items.length; i++) {
        const el = items[i]
        const { left, right, width } = el.getBoundingClientRect()

        // Create webgl plane
        const plane = new Plane()
        plane.init(el)

        // Timeline that plays when visible
        const tl = gsap.timeline({ paused: true })
          .fromTo(plane.mat.uniforms.uScale, {
            value: 0.65
          }, {
            value: 1,
            duration: 1,
            ease: 'linear'
          })

        // Push to cache
        this.items.push({
          el, plane,
          left, right, width,
          min: left < ww ? (ww * 0.775) : -(ww * 0.225 - wrapWidth * 0.2),
          max: left > ww ? state.max - (ww * 0.775) : state.max + (ww * 0.225 - wrapWidth * 0.2),
          tl,
          out: false
        })
      }
    }

    calc() {
      const state = this.state
      state.current += (state.target - state.current) * this.opts.ease
      state.currentRounded = Math.round(state.current * 100) / 100
      state.diff = (state.target - state.current) * 0.0005
      state.progress = gsap.utils.wrap(0, 1, state.currentRounded / state.max)

      this.tl && this.tl.progress(state.progress)
    }

    render() {
      this.calc()
      this.transformItems()
    }

    transformItems() {
      const { flags } = this.state

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i]
        const { translate, isVisible, progress } = this.isVisible(item)

        item.plane.updateX(translate)
        item.plane.mat.uniforms.uVelo.value = this.state.diff

        if (!item.out && item.tl) {
          item.tl.progress(progress)
        }

        if (isVisible || flags.resize) {
          item.out = false
        } else if (!item.out) {
          item.out = true
        }
      }
    }

    isVisible({ left, right, width, min, max }) {
      const { ww } = store
      const { currentRounded } = this.state
      const translate = gsap.utils.wrap(min, max, currentRounded)
      const threshold = this.opts.threshold
      const start = left + translate
      const end = right + translate
      const isVisible = start < (threshold + ww) && end > -threshold
      const progress = gsap.utils.clamp(0, 1, 1 - (translate + left + width) / (ww + width))

      return {
        translate,
        isVisible,
        progress
      }
    }

    clampTarget() {
      const state = this.state

      state.target = gsap.utils.clamp(state.max, 0, state.target)
    }

    getPos({ changedTouches, clientX, clientY, target }) {
      const x = changedTouches ? changedTouches[0].clientX : clientX
      const y = changedTouches ? changedTouches[0].clientY : clientY

      return {
        x, y, target
      }
    }

    onDown(e) {
      const { x, y } = this.getPos(e)
      const { flags, on } = this.state

      flags.dragging = true
      on.x = x
      on.y = y
    }

    onUp() {
      const state = this.state

      state.flags.dragging = false
      state.off = state.target
    }

    onMove(e) {
      const { x, y } = this.getPos(e)
      const state = this.state

      if (!state.flags.dragging) return

      const { off, on } = state
      const moveX = x - on.x
      const moveY = y - on.y

      if ((Math.abs(moveX) > Math.abs(moveY)) && e.cancelable) {
        e.preventDefault()
        e.stopPropagation()
      }

      state.target = off + (moveX * this.opts.speed)
    }
  }

  /***/
  /*** GL STUFF ****/
  /***/



  const backgroundCoverUv = `
vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
  float screenRatio = screenSize.x / screenSize.y;
  float imageRatio = imageSize.x / imageSize.y;

  vec2 newSize = screenRatio < imageRatio 
      ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
      : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);

  vec2 newOffset = (screenRatio < imageRatio 
      ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
      : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;

  return uv * screenSize / newSize + newOffset;
}
`

  const vertexShader = `
precision mediump float;

uniform float uVelo;

varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

void main(){
  vec3 pos = position;
  pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.125);

  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}
`

  const fragmentShader = `
precision mediump float;

${backgroundCoverUv}

uniform sampler2D uTexture;

uniform vec2 uMeshSize;
uniform vec2 uImageSize;

uniform float uVelo;
uniform float uScale;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 texCenter = vec2(0.5);
  vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
  vec2 texScale = (texUv - texCenter) * uScale + texCenter;
  vec4 texture = texture2D(uTexture, texScale);

  texScale.x += 0.15 * uVelo;
  if(uv.x < 1.) texture.g = texture2D(uTexture, texScale).g;

  texScale.x += 0.10 * uVelo;
  if(uv.x < 1.) texture.b = texture2D(uTexture, texScale).b;

  gl_FragColor = texture;
}
`

  const loader = new THREE.TextureLoader()
  loader.crossOrigin = 'anonymous'

  class Gl {

    constructor() {
      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(
        store.ww / - 2,
        store.ww / 2,
        store.wh / 2,
        store.wh / - 2,
        1,
        10
      )
      this.camera.lookAt(this.scene.position)
      this.camera.position.z = 1

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
      this.renderer.setPixelRatio(1.5)
      this.renderer.setSize(store.ww, store.wh)
      this.renderer.setClearColor(0xffffff, 0)

      this.init()
    }

    render() {
      this.renderer.render(this.scene, this.camera)
    }

    init() {
      const domEl = this.renderer.domElement
      domEl.classList.add('dom-gl')
      document.body.appendChild(domEl)
    }
  }

  class GlObject extends THREE.Object3D {

    init(el) {
      this.el = el

      this.resize()
    }

    resize() {
      this.rect = this.el.getBoundingClientRect()
      const { left, top, width, height } = this.rect

      this.pos = {
        x: (left + (width / 2)) - (store.ww / 2),
        y: (top + (height / 2)) - (store.wh / 2)
      }

      this.position.y = this.pos.y
      this.position.x = this.pos.x

      this.updateX()
    }

    updateX(current) {
      current && (this.position.x = current + this.pos.x)
    }
  }

  const planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32)
  const planeMat = new THREE.ShaderMaterial({
    transparent: true,
    fragmentShader,
    vertexShader
  })

  class Plane extends GlObject {

    init(el) {
      super.init(el)

      this.geo = planeGeo
      this.mat = planeMat.clone()

      this.mat.uniforms = {
        uTime: { value: 0 },
        uTexture: { value: 0 },
        uMeshSize: { value: new THREE.Vector2(this.rect.width, this.rect.height) },
        uImageSize: { value: new THREE.Vector2(0, 0) },
        uScale: { value: 0.75 },
        uVelo: { value: 0 }
      }

      this.img = this.el.querySelector('img')
      this.texture = loader.load(this.img.src, (texture) => {
        texture.minFilter = THREE.LinearFilter
        texture.generateMipmaps = false

        this.mat.uniforms.uTexture.value = texture
        this.mat.uniforms.uImageSize.value = [this.img.naturalWidth, this.img.naturalHeight]
      })

      this.mesh = new THREE.Mesh(this.geo, this.mat)
      this.mesh.scale.set(this.rect.width, this.rect.height, 1)
      this.add(this.mesh)
      gl.scene.add(this)
    }
  }

  /***/
  /*** INIT STUFF ****/
  /***/

  const gl = new Gl()
  const slider = new Slider(document.querySelector('.js-slider'))

  const tick = () => {
    gl.render()
    slider.render()
  }

  gsap.ticker.add(tick)
</script> -->



<!-- <script src="./js/script-min.js"></script> -->
<!-- 
<script>


  // frame element
  const frame = document.querySelector('.frame');

  // overlay (SVG path element)
  const overlayPath = document.querySelector('.overlay__path');

  // menu (wrap) element
  const menuWrap = document.querySelector('.menu-wrap');

  // menu items
  const menuItems = menuWrap.querySelectorAll('.menu__item');

  // open menu button
  const openMenuCtrl = document.querySelector('button.button-menu');

  // close menu button
  const closeMenuCtrl = menuWrap.querySelector('.button-close');

  // big title elements
  const title = {
    main: document.querySelector('.content__title-main'),
    sub: document.querySelector('.content__title-sub')
  };

  let isAnimating = false;

  // opens the menu
  const openMenu = () => {

    if (isAnimating) return;
    isAnimating = true;
    gsap.timeline({
      onComplete: () => isAnimating = false
    })
      .set(overlayPath, {
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
      }, 0)
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
        onComplete: () => {
          frame.classList.add('frame--menu-open');
          menuWrap.classList.add('menu-wrap--open');
        }
      })
      // title elements
      .to([title.main, title.sub], {
        duration: 0.8,
        ease: 'power3.in',
        y: -200,
        stagger: 0.05
      }, 0.2)

      // now reveal
      .set(menuItems, {
        opacity: 0
      })
      .set(overlayPath, {
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      // menu items translate animation
      .to(menuItems, {
        duration: 1.1,
        ease: 'power4',
        startAt: { y: 150 },
        y: 0,
        opacity: 1,
        stagger: 0.05
      }, '>-=1.1');

  }

  // closes the menu
  const closeMenu = () => {

    if (isAnimating) return;
    isAnimating = true;
    gsap.timeline({
      onComplete: () => isAnimating = false
    })
      .set(overlayPath, {
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
      }, 0)
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
        onComplete: () => {
          frame.classList.remove('frame--menu-open');
          menuWrap.classList.remove('menu-wrap--open');
        }
      })
      // now reveal
      .set(overlayPath, {
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
      })
      // title elements
      .to([title.main, title.sub], {
        duration: 1.1,
        ease: 'power4',
        y: 0,
        stagger: -0.05
      }, '>-=1.1')
      // menu items translate animation
      .to(menuItems, {
        duration: 0.8,
        ease: 'power2.in',
        y: 100,
        opacity: 0,
        stagger: -0.05
      }, 0)

  }


  // click on menu button
  openMenuCtrl.addEventListener('click', openMenu);
  // click on close menu button
  closeMenuCtrl.addEventListener('click', closeMenu);


</script> -->