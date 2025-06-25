import quantElem from "./quant.js"

class CartItem {
    static lastid = 0
    constructor (name, price, size, quant, productId, id = CartItem.lastid++) {
        this.name = name
        this.price = price
        this.size = size
        this.quant = quant
        this.productId = productId
        this.id = id 
    }


    get total() {
        return (this.price * this.quant).toFixed(2)
    }

    get template() {
        return (
            `<div id=${this.id} class="item">
                <img src="/assets/images/products/${this.productId}/image-product-1.jpg" alt="">
                <div class="item__content">
                    <p class="item__name">${this.name}</p>
                    <span class="size">size: <strong> ${this.size} </strong></span>
                    <button class="remove">
                        <svg id="Outline" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#262626;}</style></defs><path class="cls-1" d="M380.93,94.82h-69.4a56.43,56.43,0,0,0-111.06,0h-67.4a55,55,0,0,0-54.89,54.89v18.14a11.34,11.34,0,0,0,11.34,11.34h25.39l9.61,268a11.34,11.34,0,0,0,11.33,10.93h242.3a11.34,11.34,0,0,0,11.33-10.93l9.61-268h25.39a11.34,11.34,0,0,0,11.34-11.34V149.71A55,55,0,0,0,380.93,94.82ZM256,71.09a33.82,33.82,0,0,1,32.24,23.73H223.76A33.82,33.82,0,0,1,256,71.09ZM367.21,435.41H146.79L137.6,179.19H376.4Zm45.93-278.9H100.86v-6.8a32.25,32.25,0,0,1,32.21-32.21H380.93a32.25,32.25,0,0,1,32.21,32.21Z"/><path class="cls-1" d="M255.16,395.4a11.34,11.34,0,0,0,11.34-11.34V220.23a11.34,11.34,0,1,0-22.67,0V384.06A11.34,11.34,0,0,0,255.16,395.4Z"/><path class="cls-1" d="M311.85,395.4a11.34,11.34,0,0,0,11.33-11.34V220.23a11.34,11.34,0,1,0-22.67,0V384.06A11.34,11.34,0,0,0,311.85,395.4Z"/><path class="cls-1" d="M199.38,395.4a11.34,11.34,0,0,0,11.34-11.34V220.23a11.34,11.34,0,0,0-22.68,0V384.06A11.34,11.34,0,0,0,199.38,395.4Z"/></svg>
                    </button>
                    ${quantElem(this.quant)}
                    <span class="price">$${this.total}</span>
                    
                </div>
            </div>`
        )
    }
    addingCartTemplate(message) {
        return (
            `
            <h3 class="adding__title"><img src="../../assets/images/sign-check-icon_34365.ico"></img> ${message}</h3>
            <div class="adding">
                <img class="adding__img" src="/assets/images/products/${this.productId}/image-product-1.jpg" alt="">
                <div class="adding__content">
                    <p>${this.name}</p>
                    <span class="adding__quant">x ${this.quant}</span>
                    <span class="adding__size">size: <strong> ${this.size} </strong></span>
                </div>
            </div> 
            `
        )
    }
}

const cart = {
    list:[],

    addItem(name, price, size, quant, productId){
        const idx = this.list.findIndex(item => item.name === name && item.size === size)
       
        if (idx !== -1) {
            if (this.list[idx].quant === quant) {
                document.querySelector(".product__add-cart").classList.add("active")
                setTimeout(() => {
                    document.querySelector(".product__add-cart").classList.remove("active")
                }, 2000);
                return
            }
            this.list[idx].quant = quant
            this.addingAnimation("Quantity Updated", this.list[idx])
        } else { 
            this.list.push(new CartItem(name, price, size, quant, productId))
            this.updateIcon()
            this.addingAnimation("Added to Cart", this.list.at(-1))
         }

        localStorage.setItem('cart', JSON.stringify(this.list))

        
    },
    addingAnimation(message, item) {
        const adding = document.querySelector(".adding-to-cart")
        adding.innerHTML= item.addingCartTemplate(message)
        adding.classList.add("active")
        setTimeout(() => {
            adding.classList.remove("active")
        },2000)

    },

    updateIcon() {
        const totalquant = this.list.reduce((totalQuant, item) => totalQuant + parseInt(item.quant), 0)
        if (totalquant == 0) 
            return
        const cartHl = document.querySelector(".cart-update")
        cartHl.innerText = totalquant
        cartHl.classList.add("active")
    },
    get template() {
        return (
            `
               <h3>Cart</h3>
               <svg class="close-cart" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
               <div class="cart-items">
                   ${this.list.map(item => item.template).join('')}
               </div>
               <div class="cart__order">
               <h3 class="cart__total">Total: <span>$${this.totalOrder}</span></h3>
               <button class="check" >Checkout</button>
               </div>
           `
        )
    },
    get emptyTemplate() {
        return (
        `   <h3>Cart</h3>
            <svg class="close-cart" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
            <div class="empty"
            <p> Your Cart is empty </p>
            </div>`
            
        )
    },
    displayCart() {
        document.querySelector(".cart-open").innerHTML = 
        this.list.length > 0  ? this.template : this.emptyTemplate
    },
   
    setCartButtons() {
        document.querySelector(".cart-open").addEventListener("click", (e) => {

            if (e.target.closest(".remove")) {
                const id = parseInt(e.target.closest('.item').getAttribute('id'))
                this.list.splice(this.list.findIndex(item => item.id === id), 1)
                this.displayCart()
                localStorage.removeItem('cart')
                localStorage.setItem('cart', JSON.stringify(this.list))
            }

            if(e.target.closest(".check")) {
                alert("Thank you for being here!")
            }

            if (e.target.closest(".close-cart")) {
                document.querySelector(".cart-open").classList.remove("active")
                document.querySelector('.blur').classList.remove("active")
            }
            
            if(e.target.closest(".product__plus")) {
                const quantsel = e.target.closest('.product__cart-quant').querySelector('.product__quant')
                if (quantsel.innerText < 10  ){
                    const id = parseInt(e.target.closest('.item').getAttribute('id'))
                    const item = this.list.find(item => item.id === id)
                    item.quant++
                    this.displayCart()
                    localStorage.removeItem('cart')
                    localStorage.setItem('cart', JSON.stringify(this.list))
                } 
            }
            if(e.target.closest(".product__minus")) {
                const quantsel = e.target.closest('.product__cart-quant').querySelector('.product__quant')
                if (quantsel.innerText > 1 ){
                    const id = parseInt(e.target.closest('.item').getAttribute('id'))
                    const item = this.list.find(item => item.id === id)
                    item.quant--
                    this.displayCart()
                    localStorage.removeItem('cart')
                    localStorage.setItem('cart', JSON.stringify(this.list))  
                } 
            }
        })
    },
    get totalOrder() {
        const total = parseInt(this.list.reduce((total, item) =>  total + parseInt(item.total), 0))
        return total.toFixed(2)
    }   

}


export default function setUpCart()  {
    if (localStorage.getItem('cart')){
        const cartItems = JSON.parse(localStorage.getItem('cart'))
                        .map((item => new CartItem(item.name, item.price, item.size, item.quant, item.productId, item.id)))
        cart.list.push(...cartItems)
        cart.updateIcon()
    }
    cart.displayCart()
    cart.setCartButtons()
}

export {cart}

