const Traveler = require("./Traveler")

class Doctor extends Traveler {
    constructor (name, isHealthy) {
        super(name, isHealthy)
    }

    heal (traveler) {
        if (!traveler.isHealthy) {
            traveler.isHealthy === "true"
        }
    }

}

module.exports = Doctor