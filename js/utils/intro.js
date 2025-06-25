export default function intro(gender) {

    let title
    let img

    if( gender === "male") {
        title = "Unleash your stride, own your style"
        img = "jordan.jpg"
    } 

    if(gender === "female") {
        title = "Discover what moves you"
        img = "woman.jpg"
    } 

    if(!title || !img) {
        throw new Error("NOT TITLE OR IMG DEFINED");
    }
    
    return (
        `<div class="intro intro--${gender}">
            <h2 class="intro__title intro__title--${gender}"> ${title} </h2>
            <div class="intro__cont intro__cont--${gender}"> 
                <div class="intro__skeleton"> </div>    
                <img class="intro__img" src="../../../../assets/images/${img}">
            </div>     
            <span class="intro__decoration intro__decoration--${gender}"></span>
        
         </div>`
    )
 }