class Traveler {
    constructor (name, isHealthy = "true", food = 1) {
        this.name = name;
        this._amountFood = Number(food);
        this._isHealthy = isHealthy;
    }

    get amountFood() {
        return this._amountFood
    }

    set amountFood(value) {
        this._amountFood = value
    }

    get isHealthy() {
        return this._isHealthy
    }

    set isHealthy(value) {
        this._isHealthy = value
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