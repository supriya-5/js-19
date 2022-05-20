//callback hell - they are just a name or convention for using javascript functions. It instead of returning results immediately like other functions, takes time to produce the result.these are more of like an I/O operations.

//callback hell - form of arrow shaped, pyramid shaped




const getEmployeeID = () => {
   
    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1,2,3,4,5];
        console.log(id);
        
        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
            
            setTimeout(() => {
                employeeDetails.gender = "Male",
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
               
                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                },2000);
           
            }, 2000);
        
        }, 2000)
  
    },2000);
}


getEmployeeID();
