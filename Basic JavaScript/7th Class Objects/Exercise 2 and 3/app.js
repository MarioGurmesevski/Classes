const trainer = {
    firstName: "Stefan",
    lastName:"Stefanovski",
    academy:"SEDC",
    lecture:"Objects"
}

delete trainer.lecture
trainer.age=25;
trainer.fullName = function(){
    return this.firstName+" "+ this.lastName;

}
console.log(trainer)
console.log(trainer.fullName())