import catalogObj from "../../utils/catalog.js";
import skeletonRemover from "../../utils/skeletonRemover.js";
import transition from "../../utils/transition.js";
import intro from "../../utils/intro.js";


export default async function displayWoman() {
    const catalogTitle = "Our Sneakers for woman"
    const gender = "female"

    await transition("x")
    
    document.querySelector("main").innerHTML =
        intro("female") + await catalogObj.setCatalog(catalogTitle, gender)

    catalogObj.setCatalogBtn()

    document.querySelectorAll(".card .card__img")
    .forEach(img => {img.addEventListener("load", skeletonRemover)})


    document.querySelector('.intro__img').addEventListener("load", skeletonRemover)

    catalogObj.handleViewMore(15)
    catalogObj.obvserViewMore()
}