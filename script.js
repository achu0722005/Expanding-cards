
let cards = document.querySelectorAll('.card');
// console.log(cards)
cards.forEach((card)=>{
    card.addEventListener('click',()=>{

        cards.forEach((item)=>{
            item.classList.remove('active');
        })
        card.classList.add("active");
    })
})