console.log("Script");

const student = {
    firstName:"Brandon",
    lastName:"Britt",
    age:99,
    email:"brandon@gmail.com",
    isActive:true,
    // fullName:function(){
    //     return this.firstName+" " + this.lastName;
    // }
// 
};

//     console.log(student.fullName());

   // object constructor 

   function StudentC(firstName,lastName,age,email,isActive){
        this.userFn=firstName;
        this.userLn=lastName;
        this.userAge=age;
        this.userEmail=email;
        this.isActive=isActive;
   }

   let student1 = new StudentC("Vicky","Warren",99,"vickey@gmail.com", true);
   let student2 = new StudentC("Von", "Abrea",98,"von@gmail.com", true);

//    console.log(student1,student2);
//    console.log(StudentC.lastName,email);
function displayStudent(user){
    return `Name: ${user.userFn} \n Email: ${user.userEmail}`;
}
console.log(displayStudent(student1));
console.log(displayStudent(student2));