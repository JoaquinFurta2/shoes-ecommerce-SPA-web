
export default function display404() {

    const message = 
    `Welcome, traveler. You’ve reached a page that doesn't exist, a place where content used to be—or maybe never was. Let’s take this moment to pause and reflect.  <br><br>
Take a deep breath in, and let it out slowly. Notice the space around you, empty yet full of possibility. Imagine that each exhale clears away confusion, leaving room for clarity. <br><br>
As you sit with this blank page, know that it’s okay to be here. You’ve discovered something unexpected, and that’s part of the journey. Gently release any frustration, knowing that every path leads somewhere—even this one. <br><br>
Now, when you're ready, slowly return to your search. Trust that the right page, the right information, will appear when you need it. Take another deep breath, and when you exhale, click back or try again. The internet, like life, is full of surprises.
<br><br>Thank you for taking this moment of calm. Your journey continues.`.match(/.{1,4}/g);


    
    document.querySelector("main").innerHTML = 
    `<div class="Err404-cont">
        <div class="Err404">
            <h2>404 Not Found</h2>
            <p></p>
        </div>
    </div>`

    let p = document.querySelector(".Err404 p")

    message.forEach((word, idx) => {
        setTimeout(() => { p.innerHTML+=word}, idx * 200)
    })
        
    
}
