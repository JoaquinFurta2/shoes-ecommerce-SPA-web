import getData from "../../../utils/fetchData.js"
import quantElem from "../../../utils/quant.js"
import { cart } from "../../../utils/cart.js"


/* class Item {
    constructor(name, price, discount, description, category, company){
        this.name = name
        this.price = price
        this.discount = discount
        this.description = description
        this.category = category
        this.company = company

    }

    get total() {
        return (this.price - this.price * (this.discount / 100)).toFixed(2)
    }

    get producTemplate() {
        return (
            `<div class="card">
          <div class="card-slideShow">
          </div>
    
          <div class="card-content">
            <span class="label"> ${this.company}</span>
            <h2>${this.name}</h2>
            <p class="desc">
              ${this.description}
            </p>
    
            <div class="pricing">
              <span class="price">$${this.priceWithDisc}</span>
              <span class="disc">${this.discount}%</span>
              <span class="before-disc"> $${this.price}</span> 
            </div>
            
            <div class="btn-cont">
                <div class="cart-quant">
                  <button class="minus">
                    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg>
                  </button>
                  <span class="quant"> 1 </span>
                  <button class="plus">
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg>
                  </button>
                </div>
                <button class="add-cart">
                  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                  Add to cart
                </button>
              </div>
            </div>
      </div>`
        )
    }

    setProductbuttons() {

        document.querySelector(".add-cart").addEventListener("click", (e)=> {
            const content = e.target.closest(".card-content")
            const name = content.querySelector("h2").innerText
            const price = content.querySelector(".price").innerText.slice(1)
            const quant = content.querySelector(".quant").innerText
           
            const adding = document.querySelector(".adding-to-cart")
            adding.classList.add("active")

            setTimeout(() => {
                adding.classList.remove("active")
            },2000)

            cart.addItem(name, price, quant)
            cart.displayCart()
        })
        document.querySelector(".cart-quant")
            .addEventListener("click", (e) => {
               const quant = document.querySelector(".cart-quant .quant")
               
                if(e.target.closest(".plus")) {
                    quant.innerText < 10 ? quant.innerText++ : ''
                }
                if(e.target.closest(".minus")) {
                    quant.innerText > 1 ? quant.innerText-- : ''
                }
                
        })
    }
   
}
 */
const productObj = {
  get template() {
      
      return (
  `<div class="product">
        <div class="product__slideShow">
          <div class="product-skeleton">
            <div class="product__img-skeleton"></div>
            <div class="product__preview-skeleton"></div>
          </div>
        </div>
  
        <div class="product__content">
            <span class="product__label"> ${this.company}</span>
            <h2 class="product__title">${this.name}</h2>
            <p class="product__desc">
            ${this.desc}
            </p>
    
            <div class="product__pricing">
              <span class="product__price">$${this.total}</span>
              ${this.disc !== "0" ? 
                `<span class="product__disc">${this.disc}%</span>
                <span class="product__before-disc">$${parseInt(this.price).toFixed(2)}</span>` : ""}
            </div>
            
            <form class="product__form">
              <div class="product__size">
                  <h4 class="size__title ">Select size:</h4>
                  <div class="size__cont">
                  ${this.size.map((s, idx) => {
                    return(
                    `<div class="size__item">
                      <input type="radio" id="size-${idx}" name="size" value="${s}"> 
                      <label for="size-${idx}">${s}</label>
                    </div>  `)
                  }).join('')}
                        
                  </div>
                  <span class="size__err">Must select size</span>
              </div>
              <div class="product__btn-cont">
                  ${quantElem()}
                  <button type="submit" class="product__add-cart">
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                    Add to cart
                  </button>
                </div>
              </div>       
            </form>

          </div>
    </div>`
      )
     
  },
  setProductbuttons() {
      let  quant = 1
      document.querySelector(".product__add-cart").addEventListener("click", async (e)=> {
          e.preventDefault()
          const size = this.CheckSizeErr()
          if(!size) {
            
            return
          }
          

          cart.addItem(this.name, this.total, size, quant, this.id)
          cart.displayCart()
      })

      document.querySelector(".product .product__cart-quant")
          .addEventListener("click", (e) => {
             
             const quantsel = document.querySelector(".product .product__quant")
             
              if(e.target.closest(".product__plus")) {
                  if (quantsel.innerText < 10  ){
                    quantsel.innerText++
                    quant++
                  } 
              }
              if(e.target.closest(".product__minus")) {
                  if (quantsel.innerText > 1 ){
                    quantsel.innerText--
                    quant--
                  } 
              }
              
      })

      document.querySelector(".size__cont").addEventListener("click", (e) => {
          if (e.target.closest(".size__item")) {
            document.querySelector(".size__err").classList.remove("size__err--visible")
            document.querySelector(".size__title").classList.remove("size__title--err--visible")
          }
      } )
  },
  get total() {
    return (parseInt(this.price) - parseInt(this.price) * (this.disc / 100)).toFixed(2)
},
product(data) {
  productObj.id = data.id
  productObj.name = data.name
  productObj.company = data.company
  productObj.price = data.price
  productObj.disc = data.disc 
  productObj.desc= data.description 
  productObj.size= data.size

  return productObj.template

},
 setProductGallery() {
  document.querySelector(".product .img-cont").addEventListener("click", () => {
    document.querySelector(".gallery").classList.add("active")
    document.querySelector(".blur").classList.add("active")
    document.querySelector(".blur").classList.add("z")
  })
 },CheckSizeErr() {

    const sizeElem = document.querySelectorAll(".product input[name='size']")
    let size = "not selected"
    sizeElem.forEach((input) => {
      if (input.checked){
        size = input.value
        return
      }
    })

    if (size !== "not selected") {
      return size
    }

    document.querySelector(".size__err").classList.add("size__err--visible")
    document.querySelector(".size__title").classList.add("size__title--err--visible")
    return false
 }

}
export default productObj;
