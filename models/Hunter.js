const Traveler = require("./Traveler")

class Hunter extends Traveler {
    constructor(name, isHealthy, food){
        super(name, isHealthy)
        this.amountFood = Number(food)
    }

    hunt () {
        this.amountFood += 5
    }

    eat () {
        if (this.amountFood >= 2) {
            this.amountFood -= 2
        } else {
            this.amountFood = 0
            this.isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.amountFood > numOfFoodUnits) {
            traveler.amountFood += numOfFoodUnits
            this.amountFood -= numOfFoodUnits
        }
    }
}

module.exports = Hunter