class Traveler {
    constructor (name, isHealthy = "true", food = 1) {
        this._name = name;
        this._amountFood = Number(food);
        this._isHealthy = isHealthy;
    }

    get amountFood () {
        return this._amountFood
    }

    get name () {
        return this._name
    }

    get health () {
        return this._isHealthy
    }

    set amountFood (value) {
        this._amountFood = value
    }

    set name(value){
        this._name = value
    }

    set health (value) {
        this._isHealthy = value
    }

    hunt() {
        this.amountFood += 2;
    }

    eat() {
        if (this.amountFood > 0) {
            return this.amountFood--;
        } else {
            return this.isHealthy = false;
        }
    }
}

module.exports = Traveler;