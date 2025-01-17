import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

console.log(menuItems);

// - In `index.js`, loop over `menuItems` and categorize them into sections based on each items assigned `type`

const pasta = [];
const pizza = [];
const starters = [];

for (let i=0; i < menuItems.length; i++) {
    if (menuItems[i].type === "pasta") {
        pasta.push(menuItems[i]);
    } else if (menuItems[i].type === "pizza") {
        pizza.push(menuItems[i]);
    } else if (menuItems[i].type === "starters") {
        starters.push(menuItems[i]);
    }
}

// - Sort the items in each category by their `menuOrder`

const sortOrder = (category) => {
    category.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
    })
}

sortOrder(pasta);
sortOrder(pizza);
sortOrder(starters);

// - Render the sorted results into the appropriate container with `index.html`

const pastaSection = document.getElementById('pasta');
const pizzaSection = document.getElementById('pizza');
const startersSection = document.getElementById('starters');


const renderResults = (type, section) => {

    type.forEach( (item) => {
        let { name, description, price, spicy} = item
        const menu = document.createElement('li')
        menu.innerHTML = 
        `<h3>${name}</h3>
        <p class="price">$${price.toFixed(2)}</p>

        <p>${description}</p>
        `

        menu.className += spicy ? 'spicy' : ""

        section.append(menu);
    })
}
renderResults(pasta, pastaSection)
renderResults(pizza, pizzaSection)
renderResults(starters, startersSection)

// checkbox filtering

const spicyItems = document.getElementsByClassName('spicy')

const showSpicy = document.getElementById('showSpicy')
showSpicy.checked === true;

showSpicy.addEventListener('change', () => {
    if (showSpicy.checked == false) {

        for (let i = 0; i < spicyItems.length; i++) {
            spicyItems[i].style.display = "none"
        }
    } else {
        for (let i = 0; i < spicyItems.length; i++) {
            spicyItems[i].style.display = "block"
        }
    }
})