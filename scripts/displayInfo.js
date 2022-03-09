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
    pets:[
        { // first pet
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"888-888-888"
        },
        { 
            name:"Appa",
            age:4,
            gender:"Male",
            breed:"Bulldog",
            service:"Grooming",
            ownerName:"Jon",
            contactPhone:"123-456-789"
         }
    ]
}
console.log(petSalon.address.zip);
console.log(petSalon.pets.length);
//display the service in the console.
console.log(petSalon.pets[0].service);

function displaySalonInfo(){
    document.getElementById("footer-info").innerHTML=`Welcome to ${petSalon.name} ${petSalon.address.city}`;
}
displaySalonInfo();
function displayPetName(){

}

//display the pet salon info in  the footer section of the html
