import productObj from "./components/product.js";
import Carusel from "./components/carrusel.js";
import getData from "../../utils/fetchData.js";
import transition from "../../utils/transition.js";
import skeletonRemover from "/js/utils/skeletonRemover.js"


export default async function displayProduct(id) {

    if (isNaN(id)) {
        location.hash="#404"
        return
    }
    await transition("y")
    const data = await getData(id)

    if (data === "Not Found") {
        location.hash="#404"
        return
    }

    
    
    document.querySelector("main").innerHTML =
        productObj.product(data)

   productObj.setProductbuttons()

    Carusel(".product__slideShow", id)
    Carusel("#overlay .gallery", id ) 

    document.querySelectorAll(".product .img-cont img")[0].addEventListener("load", skeletonRemover)

    productObj.setProductGallery()
}
    
