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

const sortOrder = (category) => {
    category.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
    })
}

sortOrder(pasta);
sortOrder(pizza);
sortOrder(starters);

