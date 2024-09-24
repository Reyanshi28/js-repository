class Student{
    constructor(){
        this.id=101;
        this.name='Ajay'
    }    
    showDetails(){
        console.log(this.id+" "+this.name)
    }
}
let s=new Student();
s.showDetails();