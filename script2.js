// Pet array
let pets = [
    { name: "Buddy", age: 3, gender: "Male", service: "Grooming", breed: "Golden Retriever" },
    { name: "Bella", age: 5, gender: "Female", service: "Boarding", breed: "Bulldog" },
    { name: "Charlie", age: 2, gender: "Male", service: "Daycare", breed: "Poodle" }
];

// Function to display the number of registered pets
function displayPetCount() {
    let totalPets = pets.length;
    document.getElementById("total-pets").innerText = "Total Pets: " + totalPets;
}

// Function to display the names of all registered pets
function displayPetNames() {
    let petNamesList = document.getElementById("pet-names");
    petNamesList.innerHTML = ""; // Clear any existing names
    pets.forEach(pet => {
        let listItem = document.createElement("li");
        listItem.textContent = pet.name;
        petNamesList.appendChild(listItem);
    });
}

