// Below code about displaying Nested object properties in console.
var employee = {
    name : "John",
    age : 30,
    salary : 40000,
    address : { 
            city : "Bengaluru",
            state : "Karnataka",
            pincode : 560037
    }
};
console.log("%c I am " + employee.name + " " + employee.age + " years old, I earn " 
            + employee.salary + "k Per month & located in " 
            + employee.address.city + ", " + employee.address.state + ", " +employee.address.pincode 
            + ".", 'background: #818181; color: $ffffff;');
