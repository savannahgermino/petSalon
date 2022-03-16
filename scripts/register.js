//create the constructor 
let x=0;
function Pet(name,age,gender,breed,service,ownerName,ownerNumber){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.petOwnerNumber=ownerNumber;
    this.id=x++;
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
        displayPetsTable();
    }
}

function displayPets(){
        let  tmp="";
        for(let i=0;i<petSalon.pets.length;i++){
        tmp+=`
        <div class="pets">
            <p> Name: ${petSalon.pets[i].petName}</p>
            <p> Age: ${petSalon.pets[i].petAge}</p>
            <p> Gender: ${petSalon.pets[i].petGender}</p>
            <p> Breed: ${petSalon.pets[i].petBreed}</p>
            <p> Service: ${petSalon.pets[i].petService}</p>
            <p> Owner Name: ${petSalon.pets[i].petOwnerName}</p>
            <p> Owner Number: ${petSalon.pets[i].petOwnerNumber}</p>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}
function displayPetsTable(){
    let  row="";
    for(let i=0;i<petSalon.pets.length;i++){
        row+=`
            <tr id="${petSalon.pets[i].id}">
                <td> ${petSalon.pets[i].petName}</td>
                <td> ${petSalon.pets[i].petAge}</td>
                <td> ${petSalon.pets[i].petGender}</td>
                <td> ${petSalon.pets[i].petBreed}</td>
                <td> ${petSalon.pets[i].petService}</td>
                <td> ${petSalon.pets[i].petOwnerName}</td>
                <td> ${petSalon.pets[i].petOwnerNumber}</td>
                <td> <button onclick="deletePet(${petSalon.pets[i].id});">Delete</button> </td>
            </tr>
        `;
    }
    document.getElementById("petsTable").innerHTML=row;
}
function deletePet(petId){
    console.log("Delete pet ", petId);
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.id==petId){
            deleteIndex=i;
            console.log("I found the pet ...", deleteIndex)
            ;
        }
    }
    //remove the pet from the array
    petSalon.pets.splice(deleteIndex,1);
    //remove the pet from the html
    document.getElementById(petId).remove();
}
function searchPet(){
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petName.toLowerCase()==searchString.toLowerCase() ||
            pet.petGender.toLowerCase()==searchString.toLowerCase() ){
            console.log("I found it");
            document.getElementById(pet.id).classList.add(`bg-color`);
        }
        else{
            document.getElementById(pet.id).classList.remove(`bg-color`);
        }
    }
}

function init(){
    let appa = new Pet("Appa", 3, "Male", "English Bulldog", "Nail Trim", "Jonathan", 8051234567);
    let goose = new Pet("Goose", 5, "Female", "Basset Hound","Bath", "Sierrah", 8057654321);
    let mamba = new Pet("Mamba", 8, "Male", "Chow Chow","Bath & Trim", "Alex", 8059876543);
    petSalon.pets.push(appa, goose, mamba);
    displayPets();
    displayPetsTable();
}

window.onload=init;