import getData from "./fetchData.js"
import card from "./card.js"



const catalogObj = {
    async setCatalog(title, gender) {

      const data = await getData(gender)

      const myCards = []
      data.forEach(item => {
        card.id = item.id
        card.name = item.name
        card.company = item.company
        card.price = item.price
        card.disc = item.disc 
          myCards.push(card.template)
      })

      return(
      `<div class="catalog">
        <h2 class="catalog__title">${title}</h2>
        <div class="catalog__container">
          ${myCards.join("")}
        </div>
        <button class="catalog__btn"> View more</button>
      </div>`
      )
  },
  setCatalogBtn() {
    document.querySelector(".catalog").addEventListener("click", (e) => {
      if (e.target.closest(".card")) {
        const id = e.target.closest(".card").id
        location.hash = `product/${id}`
      }
      if (e.target.closest(".catalog__btn")){
        this.handleViewMore()
      }
    })
  },
  handleViewMore(n = 7) {
    const ITEMS_TO_SHOW = n 
    const cards = document.querySelectorAll('.card--hidden')

    for (let i = 0; i < ITEMS_TO_SHOW; i++) {
      if (!cards[i]) {
        document.querySelector('.catalog__btn').style.visibility = "hidden";
        return
      }
      cards[i].classList.remove('card--hidden')
    }
  },
  obvserViewMore() {
      const obvs = new IntersectionObserver((entry) => {
          entry.forEach(entry => { if(entry.isIntersecting) {
              catalogObj.handleViewMore()
          }})
      },{threshold:"1"})

    obvs.observe(document.querySelector(".catalog__btn"))
  }


}

export default catalogObj;