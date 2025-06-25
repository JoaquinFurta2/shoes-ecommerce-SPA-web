 const slidesShow = {
     template(id) {
          return (
              `<div class="slider-cont">
                  <button class="close">
                      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                  </button>
          
                  <div class="slide">
                      <button class="prev">
                          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" /></svg>
                      </button>
                      <div class= "position">
                        <div class="slide__skeleton"></div>
                        <div class="img-cont">
                            <img class="active" src="/assets/images/products/${id}/image-product-1.jpg" alt="">
                            <img src="/assets/images/products/${id}/image-product-2.jpg" alt="">
                            <img src="/assets/images/products/${id}/image-product-3.jpg" alt="">
                            <img src="/assets/images/products/${id}/image-product-4.jpg" alt="">
                        </div>
                      
                        <span class="icon-zoom">
                            <svg enable-background="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="14" cy="14" fill="none" id="XMLID_94_" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" id="XMLID_93_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366"/><line fill="none" id="XMLID_96_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="14" x2="14" y1="10" y2="18"/><line fill="none" id="XMLID_97_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="18" y1="14" y2="14"/></svg>
                        </span>
                      </div>
                      
                      <button class="next"> 
                          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" /></svg>
                      </button>
                  </div>
          
                  <div class="preview">
                    <img class="active" src="/assets/images/products/${id}/thumb-product-1.jpg" alt="">
                    <img src="/assets/images/products/${id}/thumb-product-2.jpg" alt="">
                    <img src="/assets/images/products/${id}/thumb-product-3.jpg" alt="">
                    <img src="/assets/images/products/${id}/thumb-product-4.jpg" alt="">
                
                  </div>
              </div>` )
      },
      initSlides(slide) {

            const btnNotClickable = (btn) => {
                btn.style.pointerEvents = "none";
                btn.style.cursor = "not-allowed";
                setTimeout(() => {
                    btn.style.pointerEvents = "auto";
                    btn.style.cursor = "pointer"
                }, 400);
            };


          slide = document.querySelector(slide).querySelector('.slider-cont')
          
          this.handlePreview(slide)
         
          slide.querySelector(".next").addEventListener("click", (e) => {
              this.handleSlide(slide, "right")
              btnNotClickable(e.target.closest('button'))
          } )
  
          slide.querySelector(".prev").addEventListener("click", (e) => {
  
              this.handleSlide(slide, "left")
              btnNotClickable(e.target.closest('button'))
          } )
  
           slide.querySelector(".close").addEventListener("click", () => {
              document.querySelector(".blur").classList.remove("active")
              document.querySelector(".blur").classList.remove("z")
              slide.closest('.gallery').classList.remove("active")
           })
          
      },
      handlePreview(slide) {
          const preview = slide.querySelector(".preview")
          preview.addEventListener("click", (e) => {
              if (e.target.closest("img")) {
                  const numb = e.target.closest("img").src.split(".jpg")[0].at(-1)
                  
                  slide.querySelectorAll(".img-cont img").forEach(img => {
                      img.classList.remove("active")
                      if (img.src.split(".jpg")[0].at(-1) === numb) {
                          img.classList.add("active")
                      }} )
  
                  preview.querySelector(".active").classList.remove("active")
                  e.target.classList.add("active")
              }
          })
      },
      handleSlide(slide, direction) {

          const current = slide.querySelector(".img-cont .active")
          let neew
          let oposite
          
              if(direction === "right") {
  
                  if (!slide.querySelector(".img-cont .active").nextElementSibling) {
                      neew = slide.querySelector(".img-cont img") 
                      slide.querySelector(".preview img").classList.add("active")
                      slide.querySelectorAll(".preview .active")[1].classList.remove("active")
                  } else {
                     neew = slide.querySelector(".img-cont .active").nextElementSibling
                      slide.querySelector(".preview .active").nextElementSibling.classList.add("active")
                      slide.querySelector(".preview .active").classList.remove("active")
                  }              
                  oposite = "left"
                 
              }
  
              if(direction === "left") {
  
                  if (!slide.querySelector(".img-cont .active").previousElementSibling) {
                      neew = slide.querySelectorAll(".img-cont img")[3] 
                      slide.querySelectorAll(".preview img")[3].classList.add("active")
                      slide.querySelector(".preview .active").classList.remove("active")
                  } else {
                      neew = slide.querySelector(".img-cont .active").previousElementSibling
                      slide.querySelector(".preview .active").previousElementSibling.classList.add("active")
                      slide.querySelectorAll(".preview .active")[1].classList.remove("active")
                  }      
              
              oposite = "right"
              
              }
              neew.classList.add("deltrans")
              neew.classList.add(`sliding-${direction}`)
              setTimeout(() => {
                  neew.classList.remove("deltrans")
                  neew.classList.remove(`sliding-${direction}`)
                  
                  neew.classList.add("active")
                  current.classList.add(`sliding-${oposite}`)
              
                  setTimeout(() => {
                     current.classList.remove(`sliding-${oposite}`) 
                  },1000)
                  current.classList.remove("active")
              },100)
      }
  }

  export default function Carusel(where, id) {
    document.querySelector(where).innerHTML =
        slidesShow.template(id)
    slidesShow.initSlides(where)
  }

  