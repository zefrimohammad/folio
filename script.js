// coded by Mohammad Zefri

function calculateAge(birthdate) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function setAge() {
    const birthdate = new Date("2000-05-05");
    const age = calculateAge(birthdate);
    const myAge = document.getElementById("my-age");
    myAge.textContent = `${age}`;
}

setAge();
