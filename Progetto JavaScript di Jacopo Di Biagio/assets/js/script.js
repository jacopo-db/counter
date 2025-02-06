// creazione elementi html
const body = document.querySelector("body");
const box = document.createElement("div");
const counter = document.createElement("div");
const buttonsBox = document.createElement("div");

// aggiunta classi
box.classList.add("box");
counter.classList.add("counter");
buttonsBox.classList.add("buttonsBox");

/*
vedi nota riga 11 del file index.html
const counter = document.querySelector(".counter");
const buttonsBox = document.querySelector(".buttonsBox");
*/

// creazione dei bottoni
const decrement = document.createElement("button");
const reset = document.createElement("button");
const increment = document.createElement("button");
const increment10 = document.createElement("button");
const decrement10 = document.createElement("button");

// assegnazione valori
counter.innerHTML = 0;

decrement10.innerHTML = "-10";
decrement.innerHTML = "-1"
reset.innerHTML = "Reset";
increment.innerHTML = "+1";
increment10.innerHTML = "+10";

// aggiunta all'html
body.appendChild(box);
box.appendChild(counter);
box.appendChild(buttonsBox);

buttonsBox.appendChild(decrement10);
buttonsBox.appendChild(decrement);
buttonsBox.appendChild(reset);
buttonsBox.appendChild(increment);
buttonsBox.appendChild(increment10);

/* metodo più veloce (per me), ma meno riutilizzabile:

decrement.addEventListener("click", () => {
    counter.innerHTML--;
})
reset.addEventListener("click", () => {
    counter.innerHTML = 0;
})
increment.addEventListener("click", () => {
    counter.innerHTML++;
})
increment10.addEventListener("click", () => {
    counter.innerHTML = Number(counter.innerHTML) + 10;
})
decrement10.addEventListener("click", () => {
    counter.innerHTML -= 10;
})
*/

decrement.setAttribute("data-action", "decrement");
reset.setAttribute("data-action", "reset");
increment.setAttribute("data-action", "increment");
increment10.setAttribute("data-action", "increment10");
decrement10.setAttribute("data-action", "decrement10");


// delegazione degli eventi
buttonsBox.addEventListener("click", (event) => {
    const action = event.target.getAttribute("data-action");

    if(!action) return;
    switch (action) {
        case "decrement":
            counter.innerHTML--; 
            break;
        case "reset":
            counter.innerHTML = 0;
            break;
        case "increment":
            counter.innerHTML++;
            break;
        case "increment10":
            counter.innerHTML = Number(counter.innerHTML) + 10; 
            break;
        case "decrement10":
            counter.innerHTML -= 10;
            break;
        default:
            break;
    }
})





