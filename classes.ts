class Vehicle {
    constructor(public color:string) {
    }
    protected honk():void{
        console.log("beep beep");
    }
}

class Car extends Vehicle {

    constructor(public wheels :number,color:string) {
        super(color);
    }
  private ride():void {
     console.log('vroom');
 }
 startDrivingProcess():void{
     this.ride();
     this.honk();
 }
}

const myCar = new Car(4,'red');
const myVehicle = new Vehicle('blue');
console.log(myVehicle.color);



