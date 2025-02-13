// creazione elementi html
const body = document.querySelector("body");
const box = document.createElement("div");

const container = document.createElement("div"); // modifica dopo correzioni coach
let counter = 0;

const buttonsBox = document.createElement("div");

// aggiunta classi
box.classList.add("box");
container.classList.add("container");
buttonsBox.classList.add("buttonsBox");

// creazione dei bottoni
const decrement = document.createElement("button");
const reset = document.createElement("button");
const increment = document.createElement("button");
const increment10 = document.createElement("button");
const decrement10 = document.createElement("button");

// assegnazione valori
container.textContent = counter;

decrement10.textContent = "-10";
decrement.textContent = "-1"
reset.textContent = "Reset";
increment.textContent = "+1";
increment10.textContent = "+10";

// aggiunta all'html
body.appendChild(box);
box.appendChild(container);
box.appendChild(buttonsBox);

buttonsBox.appendChild(decrement10);
buttonsBox.appendChild(decrement);
buttonsBox.appendChild(reset);
buttonsBox.appendChild(increment);
buttonsBox.appendChild(increment10);


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
            counter--; 
            break;
        case "reset":
            counter = 0;
            break;
        case "increment":
            counter++;
            break;
        case "increment10":
            counter += 10; 
            break;
        case "decrement10":
            counter -= 10;
            break;
        default:
            break;
    }
    container.textContent = counter;
})

// Ho apportato le modifiche richieste, spero che sia tutto ok :)