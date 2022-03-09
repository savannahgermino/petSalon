console.log("Script");

const student = {
    firstName:"Brandon",
    lastName:"Britt",
    age:99,
    email:"brandon@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+" " + this.lastName;
    }
};

    console.log(student.fullName());

    function displayStudent(){
       
    }
    displayStudent();