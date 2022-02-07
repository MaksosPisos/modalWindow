const btn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal svg');
const seconds = document.querySelector('.js-timer')
// показываем модальное окно и оверлей

btn.addEventListener('click', () => {
    close.style.right = "20px";
    close.style.top = "20px";
    overlay.classList.add('active');
    modal.classList.add('active');
    let i = 10;
    seconds.textContent = `До закрытия осталось ${i} секунд`
    let timerID = setInterval(function timer() {
        seconds.textContent = `До закрытия осталось ${i} секунд`
        i--;
        if(i < 0) {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            clearInterval(timerID);
        }
        // НЕ закрываем модальное окно и оверлей по клику на крестик =)
        close.addEventListener('click', () => {
            close.style.left = getRandomInt(0, 150)+"px";
            close.style.top = getRandomInt(0, 150)+"px";
        })
        // закрываем модальное окно и оверлей по клику на оверлей
        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            clearInterval(timerID);
            close.style.left = 'auto'
        })
        // закрываем модальное окно и оверлей по клику на клавишу esc
        document.body.addEventListener('keyup', function (e) {
            var key = e.keyCode;
            if (key == 27) {
                overlay.classList.remove('active');
                modal.classList.remove('active');
                clearInterval(timerID);
                close.style.left = 'auto'
            };
        }, false);
    }, 1000);
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

close.addEventListener('mouseover', () => {
    close.style.left = getRandomInt(0, 150)+"px";
    close.style.top = getRandomInt(0, 150)+"px";
})