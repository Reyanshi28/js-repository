class Student{
    constructor(){
        this.id=101;
        this.name="ajay";
    }
    showDetails(){
        console.log(this.id+" "+this.name)
    }
    displayInfo(){
        console.log("This is displayInfo method")
    }}
let s=new Student();
s.showDetails();
s.displayInfo();