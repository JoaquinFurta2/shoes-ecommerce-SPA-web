const main = document.querySelector("main");
const footer = document.querySelector("footer");

const observer = new MutationObserver(() => {
    window.scrollTo(0, 0);
    main.style.transform = "translate(0, 0)";
    main.style.opacity = "1";
    footer.style.transform = "translateY(0)";
});

observer.observe(main, { childList: true });

export default async (translate) => {
    footer.style.transform = "translateY(100%)"; 

    if (translate === "x") {
        main.style.transform = "translateX(-100%)"; 
        main.style.opacity = "0.3";
    } else if (translate === "y") {
        main.style.transform = "translateY(-150%)";
        main.style.opacity = "0";
    }

    await new Promise((resolve) => {
        setTimeout(resolve, 700);
    });
};



