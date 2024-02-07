const panels = document.querySelectorAll('.panel')
console.log(123)
panels.forEach(panel => {
    panel.addEventListener('click',  () => {
        removeActiveClasses()
        console.log(123)
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
