

const buttons = document.querySelectorAll("li.about-btn");
console.log(buttons.length)

buttons.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        buttons.forEach(item => {
            item.classList.add("hover:translate-x-5");
            item.classList.remove("translate-x-5");
            
        })

        btn.classList.add("translate-x-5");
        btn.classList.remove("hover:translate-x-5")
    })
    
})

