const card = {
    get template() {
      //console.log(this.id)
      return(
        `<div id="${this.id}" class="card card--hidden" tabindex="0">
            <div class="card__img-skeleton"></div>
            <img class="card__img" loading="lazy" src="assets/images/products/${this.id}/image-product-1.jpg" alt="">
            <div class="card__content">
            <span class="card__company">${this.company}</span>
            <h3 class="card__title">${this.name}</h3>
            <div class="card__pricing">
              <span class="card__price">$${this.total}</span>
              ${this.disc !== "0" ? 
                `<span class="card__disc">${this.disc}%</span>
                 <span class="card__before-disc">$${parseInt(this.price).toFixed(2)}</span>` : ""}
            </div>
          </div>
        </div>`)
    },
  get total() {
    return (parseInt(this.price) - parseInt(this.price) * (this.disc / 100)).toFixed(2)
  }
  
}



export default card;


