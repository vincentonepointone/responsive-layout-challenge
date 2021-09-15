const btn = document.querySelector('.btn--norm');
const btnSmall = document.querySelector('.btn--small');
const btnLrg = document.querySelector('.btn--lrg');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let randomFontSize = Math.floor(Math.random() * 30);
    btn.style.fontSize = (randomFontSize < 8 || randomFontSize > 30) ?   "15px" :  randomFontSize +"px";
})

btnLrg.addEventListener('click', (e) => {
    e.preventDefault();
    let randomFontSize = Math.floor(Math.random() * 30  );
    btnLrg.style.fontSize = (randomFontSize < 8 || randomFontSize > 30) ?   "15px" :  randomFontSize +"px";
})

btnSmall.addEventListener('click', (e) => {
    e.preventDefault();
    let randomFontSize = Math.floor(Math.random() * 30);
    btnSmall.style.fontSize = (randomFontSize < 8 || randomFontSize > 30) ?   "15px" :  randomFontSize +"px";
    console.log(randomFontSize);
})