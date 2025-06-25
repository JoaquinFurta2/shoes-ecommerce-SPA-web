const overlay = {
 get template() {
    return (
        `
            <span class="blur"></span>
            <div class="gallery"></div>
        `
      
    )
},
 setBlurBtn() {
    document.querySelector(".blur").addEventListener("click", (e) => {
        e.target.classList.remove("active")
        e.target.classList.remove('z')
        document.querySelector('.nav-menu').classList.remove('active')
        document.querySelector(".gallery").classList.remove('active')
        document.querySelector(".cart-open").classList.remove('active')
        
            
    })
    }
}

export default function displayOverlay() {
    document.querySelector('#overlay').innerHTML = overlay.template
    overlay.setBlurBtn()
}