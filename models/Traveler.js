class Traveler {
    constructor (name, isHealthy = "true", food = 1) {
        this.name = name;
        this.amountFood = Number(food);
        this.isHealthy = isHealthy;
    }

    hunt() {
        this.amountFood += 2;
    }

    eat() {
        if (this.amountFood > 0) {
            return this.amountFood--;
        } else {
            return this.isHealthy = "false";
        }
    }
}

module.exports = Traveler;