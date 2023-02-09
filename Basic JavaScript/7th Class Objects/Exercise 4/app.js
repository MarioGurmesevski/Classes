const car = {
    model:"audi",
    color:"red",
    year:2016,
    fuel:"diseal",
    fuelConsumption:5,

    fuelUsage : function(distance){
       return distance * (this.fuelConsumption/100)
    }
}
console.log(car.fuelUsage(300))