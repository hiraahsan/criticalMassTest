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

    let list = document.createElement('ul');
    let listItem = document.createElement('li');
    type.forEach( (item) => {
        let { name, description, price, spicy, menuOrder} = item
        const menu = document.createElement('li')
        menu.innerHTML = 
        `<h3 class=${spicy ? 'spicy' : ""}>${name}</h2>
        <p>${description}</p>
        <p>$${price.toFixed(2)}</p>
        `

        section.append(menu);
    })
}
renderResults(pasta, pastaSection)
renderResults(pizza, pizzaSection)
renderResults(starters, startersSection)