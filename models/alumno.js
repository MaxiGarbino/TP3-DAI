class Alumno{
    constructor(username = "-",DNI = "000",edad = "000"){
        this.username = username;
        this.dni = DNI;
        this.edad = edad;
    }

    toString(){
        return `Alumno: username=${this.username}, DNI = ${this.dni}, edad=${this.edad}`;
    }
}
export default Alumno;