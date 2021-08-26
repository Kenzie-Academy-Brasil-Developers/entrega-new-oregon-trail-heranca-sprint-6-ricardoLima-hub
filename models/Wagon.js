class Wagon {
    constructor (capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
       if (this.passengers.length === 0) {
           return this.capacity
       } 
       if (this.passengers.length !== 0) {
           return this.capacity - this.passengers.length
       }
    }

    join (traveler) {
        let seats = this.getAvailableSeatCount()
        if (seats >= 1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine () {
        let personSick = "false";
        this.passengers.forEach((element) => {
          if (element.isHealthy !== "true") {
            personSick = "true";
          }
        });
        return personSick;
      };

    totalFood () {
        let output = this.passengers.reduce((totalFood, {amountFood}) => {
            return totalFood + amountFood
        },0)
        return output
    }
}

module.exports = Wagon;