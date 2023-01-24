const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;
        if (style.contains("increase")) {
            count++;
        } 
        else if (style.contains("decrease")) {
            count--;
        } 
        else if (style.contains("reset")) {
            count = 0;
        }

        if (count > 0) {
            counter.classList.remove('negative')
            counter.classList.add('positive')
        }
        else if (count < 0) {
            counter.classList.remove('positive')
            counter.classList.add('negative')
        }
        else if (count === 0){
            counter.classList.remove('positive')
            counter.classList.remove('negative')
        }

        counter.textContent = count;
    });
});
