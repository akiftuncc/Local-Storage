const form = document.getElementById("myForm");
const button = document.querySelector(".btn");
let formArray = [];

button.addEventListener("click", function () {
  localStorage.clear();
});

class Person {
  constructor(name, surname, date, city, image) {
    this.name = name;
    this.surname = surname;
    this.date = date;
    this.city = city;
    this.image = image;
    this.age = this.calcualteAge(date);
  }

  calcualteAge(date) {
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();

    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const dateOfBirth = document.getElementById("date-of-birth").value;
  const city = document.getElementById("city").value;
  let image = document.getElementById("image-form").files[0];
  if (typeof image === "undefined") {
    image = "Empty";
  }
  const person = new Person(name, surname, dateOfBirth, city, image);

  localStorage.setItem(`;person${localStorage.length}`, JSON.stringify(person));
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
}
