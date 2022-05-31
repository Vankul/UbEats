const mas = document.querySelector('button[id="top"]')


mas.addEventListener("click", function(event){
    event.preventDefault();
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

const scrolBtn = document.querySelector('.is-show')
window.onscroll = () => {
    if (window.scrollY > 450){
        scrolBtn.classList.remove('is-hide')
    } else if (window.scrollY < 450){
        scrolBtn.classList.add('is-hide');
    }
}