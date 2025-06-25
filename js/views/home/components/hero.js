 const hero = {
    get template() {
      return (
        `<div class="hero">
          <div class="hero__content">
            <span class="hero__span">Sneaker Collection</span>
            <h1 class="hero__title">Good Shoes <br> Take You <br> Good Places</h1>
            <button class="hero__btn"> Shop Now </button>
          </div>
          <img class="hero__img" src="assets/images/hero-img.jpg" alt="" >  
        </div>`)
    }, 
    handleBtn() {
      document.querySelector(".hero__btn").addEventListener("click", () => {
        const target = document.querySelector('.catalog__title');
        const navHeight = document.querySelector('nav').offsetHeight;

        if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Get the target's position relative to the document
        const offsetPosition = targetPosition - navHeight; // Adjust for the nav height

        window.scrollTo({top: offsetPosition, behavior: "smooth"});}
        });
    }

}


export default hero
