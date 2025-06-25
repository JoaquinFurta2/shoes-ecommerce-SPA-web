import displayNav from "./utils/nav.js";
import setUpCart from "./utils/cart.js";
import displayHome from "./views/home/home.js";
import displayMen from "./views/men/men.js";
import displayWoman from "./views/woman/woman.js";
import displayProduct from "./views/product/product.js";
import display404 from "./views/pageNotFound/display404.js";
import displayOverlay from "./utils/overlay.js";
import displayFooter from "./utils/footer.js";
const main = document.querySelector("main")



function router() {
   
    if (location.hash !== "")
    {
        location.hash = "" //reset hash so event listener catches the change
        location.hash = localStorage.getItem("hash") // assign hash to the previos value
        }

    else {
        location.hash = "#home"
    }
    
    window.addEventListener('hashchange', () => {
        localStorage.setItem("hash", location.hash)
        const id = location.hash.split("/")[1] || "none"
        
        switch(location.hash) {
            case "#home":
                displayHome()
                break;
            case "#men":
                displayMen()
                
                break;
            case "#woman":
                displayWoman()
                
                break;
            case `#product/${id}`:
                displayProduct(parseInt(id))
                break;
            case "#404":
                display404()
            default:
                display404()
                break;
        }
        
    })
}


async function app() {
    displayNav()
    setUpCart()
    router()
    displayOverlay()
    displayFooter()
}

app()




