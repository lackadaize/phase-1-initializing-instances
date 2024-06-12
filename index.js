class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
}

const todaysBreakfast = new Breakfast("Eggs", "Orange Juice")
// console.log(todaysBreakfast)

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

const todaysLunch = new Lunch("Ceasar", "Chicken", "Tea")
// console.log(todaysLunch)

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
    }

    get dessert() {
        return this.#dessert;
    }
}

const todaysDinner = new Dinner("Chef", "Beet", "Steak", "Cake")
// console.log(todaysDinner)
// console.log(`Let them eat ${todaysDinner.dessert}!`)