//create the constructor 
function Pet(name,age,gender,breed,service,ownerName,ownerNumber){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.petOwnerNumber=ownerNumber;
}
//get the info from the inputs
let inputPetName=document.getElementById("txtPetName");
let inputPetAge=document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");
let inputPetBreed=document.getElementById("txtPetBreed");
let inputPetService=document.getElementById("txtPetService");
let inputPetOwnerName=document.getElementById("txtPetOwnerName");
let inputPetOwnerNumber=document.getElementById("txtPetOwnerNumber");

function isValid(aPet){
    let valid=true;
    if(aPet.petName.length==0){
        valid=false;
        console.log("Invalid name")
    }
    if (aPet.petAge.length==0){
        valid=false;
        console.log("Invalid age")
    }
    if (aPet.petService.length==0){
        valid=false;
        console.log("Invalid service")
    }
    if (aPet.petOwnerNumber.length==0){
        valid=false;
        console.log("Invalid phone number")
    return valid;
    }
}

function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwnerName.value,inputPetOwnerNumber.value);
    //create the obj
    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwnerName.value,inputPetOwnerNumber.value);
    console.log(thePet);

    if(isValid){
        //push the obj
        petSalon.pets.push(thePet);
        //display the obj in the console
        displayPets();
    }
}

function displayPets(){
        let  tmp="";
        for(let i=0;i<petSalon.pets.length;i++){
        tmp=`
        <div class="pet">
            <h4> Name: ${petSalon.pets[i].petName}</h4>
            <p> Age: ${petSalon.pets[i].petAge}<p>
            <p> Gender: ${petSalon.pets[i].petGender}<p>
            <p> Breed: ${petSalon.pets[i].petBreed}<p>
            <p> Service: ${petSalon.pets[i].petService}<p>
            <p> Owner Name: ${petSalon.pets[i].petOwnerName}<p>
            <p> Owner Number: ${petSalon.pets[i].petOwnerNumber}<p>
        </div>
        `;
        console.log(tmp);
    }
    document.getElementById("pets").innerHTML=tmp;
}

function init(){
    let appa = new Pet("Appa", 3, "Male", "English Bulldog", "Nail Trim", "Jonathan", 8051234567);
    let goose = new Pet("Goose", 5, "Female", "Basset Hound","Bath", "Sierrah", 8057654321);
    let mamba = new Pet("Mamba", 8, "Male", "Chow Chow","Bath & Trim", "Alex", 8059876543);
    petSalon.pets.push(appa, goose, mamba);
    displayPets();
}
window.onload=init;