const Flip = () => {
const card = document.querySelectorAll('.card')
card.forEach(current => {
    current.addEventListener('click', (e)=> {
        current.classList.toggle("flip")
    })
})


}

export default Flip