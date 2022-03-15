//Create an obj literal for the pet salon 
const petSalon={
    name:"City Dog",
    address:{
        street:"East Avenue",
        number:262,
        zip:92101,
        city:"San Diego",
        state:"CA"
    },
    workingHours:{
        open:"9:00am",
        close:"5:00pm"
    },//Create pets array 
    pets:[
            {
                name:"Appa",
                age:3,
                gender:"Male",
                breed:"English Bulldog",
                service:"Nail trim",
                ownerName:"Jonathan",
                ownerNumber:8051234567
            },
            {
                name:"Goose",
                age:5,
                gender:"Female",
                breed:"Basset Hound",
                service:"Bath",
                ownerName:"Sierrah",
                ownerNumber:8057654321
            },
            {
                name:"Mamba",
                age:8,
                gender:"Male",
                breed:"Chow Chow",
                service:"Bath & Trim",
                ownerName:"Alex",
                ownerNumber:8059876543
            }
        ]
    }
// console.log(petSalon.address.zip);
// console.log(petSalon.pets.length);
// //display the service in the console.
// console.log(petSalon.pets[0].service);

function displayPetSalonInfo(){
document.getElementById("footer-info").innerHTML=`<p>Welcome to ${petSalon.name} located in ${petSalon.address.city}</p>`;
};

displayPetSalonInfo();

// if (petSalon.pets.length >=0){
//     alert("You have "+ petSalon.pets.length +" animals registered")
// };

function displayPetNames(){
    document.getElementById("petnames").innerHTML+=`
    <p> We have ${petSalon.pets[0].name} in the first appointment slot <p>
    <p> We have ${petSalon.pets[1].name} in the second appointment slot <p>
    <p> We have ${petSalon.pets[2].name} in the third appointment slot <p>
    `;
};
displayPetNames();


//display the pet salon info in  the footer section of the html