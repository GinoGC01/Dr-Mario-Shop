import{r as C}from"./index.03be2d59.js";import{C as B,p as z,a as L}from"./Cart01.5ff53fd3.js";import{g as V,i as R,e as F,n as P,b as E,j as s,S as N,N as D,a as j}from"./jsx-runtime.d9ad72f9.js";import"./navigation.min.4ed993c7.js";function A({swiper:e,extendParams:m,on:c}){m({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let b=!1,f=!1;e.thumbs={swiper:null};function h(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const a=t.clickedIndex,d=t.clickedSlide;if(d&&d.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof a>"u"||a===null)return;let n;t.params.loop?n=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):n=a,e.params.loop?e.slideToLoop(n):e.slideTo(n)}function x(){const{thumbs:t}=e.params;if(b)return!1;b=!0;const a=e.constructor;if(t.swiper instanceof a)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(R(t.swiper)){const d=Object.assign({},t.swiper);Object.assign(d,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new a(d),f=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",h),!0}function o(t){const a=e.thumbs.swiper;if(!a||a.destroyed)return;const d=a.params.slidesPerView==="auto"?a.slidesPerViewDynamic():a.params.slidesPerView;let n=1;const r=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),a.slides.forEach(l=>l.classList.remove(r)),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(let l=0;l<n;l+=1)F(a.slidesEl,`[data-swiper-slide-index="${e.realIndex+l}"]`).forEach(u=>{u.classList.add(r)});else for(let l=0;l<n;l+=1)a.slides[e.realIndex+l]&&a.slides[e.realIndex+l].classList.add(r);const T=e.params.thumbs.autoScrollOffset,v=T&&!a.params.loop;if(e.realIndex!==a.realIndex||v){const l=a.activeIndex;let u,i;if(a.params.loop){const y=a.slides.filter(S=>S.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];u=a.slides.indexOf(y),i=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,i=u>e.previousIndex?"next":"prev";v&&(u+=i==="next"?T:-1*T),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(u)<0&&(a.params.centeredSlides?u>l?u=u-Math.floor(d/2)+1:u=u+Math.floor(d/2)-1:u>l&&a.params.slidesPerGroup,a.slideTo(u,t?0:void 0))}}c("beforeInit",()=>{const{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper=="string"||t.swiper instanceof HTMLElement){const a=V(),d=()=>{const r=typeof t.swiper=="string"?a.querySelector(t.swiper):t.swiper;if(r&&r.swiper)t.swiper=r.swiper,x(),o(!0);else if(r){const T=v=>{t.swiper=v.detail[0],r.removeEventListener("init",T),x(),o(!0),t.swiper.update(),e.update()};r.addEventListener("init",T)}return r},n=()=>{if(e.destroyed)return;d()||requestAnimationFrame(n)};requestAnimationFrame(n)}else x(),o(!0)}),c("slideChange update resize observerUpdate",()=>{o()}),c("setTransition",(t,a)=>{const d=e.thumbs.swiper;!d||d.destroyed||d.setTransition(a)}),c("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||f&&t.destroy()}),Object.assign(e.thumbs,{init:x,update:o})}function O({swiper:e,extendParams:m,emit:c,once:b}){m({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function f(){const o=e.getTranslate();e.setTranslate(o),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function h(){const{touchEventsData:o,touches:t}=e;o.velocities.length===0&&o.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:o.touchStartTime}),o.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:P()})}function x({currentPos:o}){const{params:t,wrapperEl:a,rtlTranslate:d,snapGrid:n,touchEventsData:r}=e,v=P()-r.touchStartTime;if(o<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(o>-e.maxTranslate()){e.slides.length<n.length?e.slideTo(n.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(r.velocities.length>1){const g=r.velocities.pop(),p=r.velocities.pop(),k=g.position-p.position,I=g.time-p.time;e.velocity=k/I,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(I>150||P()-g.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,r.velocities.length=0;let l=1e3*t.freeMode.momentumRatio;const u=e.velocity*l;let i=e.translate+u;d&&(i=-i);let y=!1,S;const M=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let _;if(i<e.maxTranslate())t.freeMode.momentumBounce?(i+e.maxTranslate()<-M&&(i=e.maxTranslate()-M),S=e.maxTranslate(),y=!0,r.allowMomentumBounce=!0):i=e.maxTranslate(),t.loop&&t.centeredSlides&&(_=!0);else if(i>e.minTranslate())t.freeMode.momentumBounce?(i-e.minTranslate()>M&&(i=e.minTranslate()+M),S=e.minTranslate(),y=!0,r.allowMomentumBounce=!0):i=e.minTranslate(),t.loop&&t.centeredSlides&&(_=!0);else if(t.freeMode.sticky){let g;for(let p=0;p<n.length;p+=1)if(n[p]>-i){g=p;break}Math.abs(n[g]-i)<Math.abs(n[g-1]-i)||e.swipeDirection==="next"?i=n[g]:i=n[g-1],i=-i}if(_&&b("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(d?l=Math.abs((-i-e.translate)/e.velocity):l=Math.abs((i-e.translate)/e.velocity),t.freeMode.sticky){const g=Math.abs((d?-i:i)-e.translate),p=e.slidesSizesGrid[e.activeIndex];g<p?l=t.speed:g<2*p?l=t.speed*1.5:l=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&y?(e.updateProgress(S),e.setTransition(l),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,E(a,()=>{!e||e.destroyed||!r.allowMomentumBounce||(c("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(S),E(a,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(c("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(l),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,E(a,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&c("_freeModeNoMomentumRelease");(!t.freeMode.momentum||v>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:f,onTouchMove:h,onTouchEnd:x}})}function $({producto:e}){const[m,c]=C.useState(null);return s.jsxs("div",{className:"imagen-detalle",children:[s.jsxs(N,{style:{"--swiper-navigation-color":"#000","--swiper-pagination-color":"#000"},spaceBetween:10,navigation:!0,thumbs:{swiper:m},modules:[O,D,A],className:"mySwiper2",children:[s.jsx(j,{children:s.jsx("img",{src:e.img.image01,loading:"lazy"})}),s.jsx(j,{children:s.jsx("img",{src:e.img.image02,loading:"lazy"})}),s.jsx(j,{children:s.jsx("img",{src:e.img.image03,loading:"lazy"})})]}),s.jsxs(N,{onSwiper:c,spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0,modules:[O,D,A],className:"mySwiper",children:[s.jsx(j,{className:"swiperSlide-bottom",children:s.jsx("img",{src:e.img.image01,loading:"lazy"})}),s.jsx(j,{className:"swiperSlide-bottom",children:s.jsx("img",{src:e.img.image02,loading:"lazy"})}),s.jsx(j,{className:"swiperSlide-bottom",children:s.jsx("img",{src:e.img.image03,loading:"lazy"})})]})]})}function q({ArregloProductos:e,productosCarrito:m,actualizarProductosCarrito:c}){function b(f){f.preventDefault(),Toastify({text:"¡Producto agregado!",duration:2500,destination:"https://ginogc01.github.io/Dr.-Mario-Shop/Shop/",newWindow:!0,close:!1,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"linear-gradient(to right, #0c0c0c, #0c0c0c)",textTransform:"uppercase",fontSize:".75em"},onClick:function(){}}).showToast();const h=f.currentTarget.id,x=e.find(t=>t.id===h);let o=[...m];if(o.some(({id:t})=>t===h)){const t=o.findIndex(({id:a})=>a===h);o[t].cantidad++}else x.cantidad=1,o.push(x);c(o),localStorage.setItem("productos-en-carrito",JSON.stringify(o))}return s.jsx(s.Fragment,{children:e.map(f=>s.jsx("div",{className:"button-content__productoDetalle",children:s.jsxs("button",{className:"button-addCart__productoDetalle",onClick:h=>b(h),id:f.id,children:[s.jsx("p",{children:"agregar al carrito"}),s.jsx("span",{className:"material-symbols-outlined span-addCart__productoDetalle",children:"add_shopping_cart"})]})},f.id))})}function G({productosCarritoLocalStorage:e,ArregloProductoDetalle:m}){const[c,b]=C.useState(e||[]);function f(h){b(h)}return s.jsxs("div",{className:"carrito-container__producto-detalle",children:[s.jsx(q,{ArregloProductos:m,productosCarrito:c,actualizarProductosCarrito:f}),s.jsx(B,{productosCarrito:c})]})}function H({producto:e,productosCarrito:m}){let c=[e];return s.jsxs("div",{className:"especificaciones-detalle",children:[s.jsxs("span",{className:e.destacado?"destacados__producto-detalle":"destacados-off__producto-detalle",children:[s.jsx("p",{children:"PRODUCTO DESTACADO - "}),s.jsxs("div",{className:"calificacion__producto-detalle",children:[s.jsx("span",{className:"material-symbols-outlined star__producto-detalle",children:"star"}),s.jsx("p",{children:e.calificacion})]})]}),s.jsx("p",{className:"unisex",children:"- Unisex -"}),s.jsx("h1",{className:"titulo-producto__detalle",children:e.nombre}),s.jsxs("p",{className:"precio__detalle",children:["- $ ",s.jsxs("strong",{children:[e.precio," ",s.jsx("span",{id:"offerta__detalle",children:"15% OFF"})]})]}),s.jsx("p",{className:"precio__detalle-ofertaAplicable",children:"• Esta oferta es aplicable para todos los productos de la tienda •"}),s.jsxs("p",{className:"talle__detalle",children:["- TALLE: ",s.jsx("strong",{children:e.talle.talle})]}),s.jsxs("p",{className:"cantidad__detalle",children:["- CANTIDAD: ",s.jsx("strong",{children:e.cantidad})]}),s.jsxs("p",{className:"description__detalle",children:["- ",s.jsx("strong",{children:e.description})]}),s.jsx("div",{className:"carrito",children:s.jsx(G,{productosCarritoLocalStorage:m,ArregloProductoDetalle:c})})]})}function U({productoDetalle:e,productoCarrito:m}){const[c,b]=C.useState([]),[f,h]=C.useState([]);return C.useEffect(()=>{e&&m&&(b(e),h(m))},[e,m]),c?s.jsx("div",{children:c.map(x=>s.jsxs("div",{className:"detalle-producto__container",children:[s.jsx($,{producto:x}),s.jsx(H,{producto:x,productosCarrito:f})]},`producto-detalle-${x.id}`))}):s.jsx("p",{children:"...Cargando"})}function K(){return s.jsx(U,{productoDetalle:z,productoCarrito:L})}export{K as default};
