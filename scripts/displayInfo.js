//Create an obj literal for the pet salon 
const petSalon={
    name:"City Dog",
    address:{
        street:"Ave University",
        number:"262",
        zip:"22115",
        city:"San Diego",
        state:"B.C."
    },
    workingHours:{
        open:"9:00am",
        close:"5:00pm"
    },//Create pets array 
    pets:[]
    }
// console.log(petSalon.address.zip);
// console.log(petSalon.pets.length);
// //display the service in the console.
// console.log(petSalon.pets[0].service);

function displayPetSalonInfo(){
    document.getElementById("footer-info").innerHTML=`Welcome to ${petSalon.name} ${petSalon.address.city}`;
}
// displayPetSalonInfo();

if (petSalon.pets.length >=0){
    alert("You have "+ petSalon.pets.length +" animals registered")
};

function displayPetNames(){
    document.getElementById("petnames").innerHTML+=`
    <p> We have ${petSalon.pets[0].name} in the first appointment slot <p>
    <p> We have ${petSalon.pets[1].name} in the second appointment slot <p>
    <p> We have ${petSalon.pets[3].name} in the third appointment slot <p>
    `;
};
// displayPetNames();
// }

//display the pet salon info in  the footer section of the html