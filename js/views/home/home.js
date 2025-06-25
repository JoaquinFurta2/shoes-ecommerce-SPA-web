import hero from "./components/hero.js";
import banner from "./components/banner.js";
import catalogObj from "../../utils/catalog.js";
import skeletonRemover from "../../utils/skeletonRemover.js";
import transition from "../../utils/transition.js";
import bottomPicture from "./components/bottomPicture.js";




export default async function displayHome() {
     const catalogTitle = "Our Sneakers"

     await transition("x")

     document.querySelector("main").innerHTML=
          hero.template + banner() + await catalogObj.setCatalog(catalogTitle) + bottomPicture();
     
          
     hero.handleBtn()
     catalogObj.setCatalogBtn()
    

     document.querySelectorAll(".card .card__img")
     .forEach(img => { img.addEventListener("load", skeletonRemover)})

     catalogObj.handleViewMore(7)
}


