export default (e) => {
    const elem = e.target;
    if (elem.closest('.img-cont')) {
        const skeleton = elem.closest('.position').querySelector('.slide__skeleton')
        skeleton.remove()
        elem.closest('.img-cont').style.visibility = "visible";
        return
    }


    const skeleton = elem.previousElementSibling;
    skeleton.remove()
    elem.style.visibility = "visible";
}