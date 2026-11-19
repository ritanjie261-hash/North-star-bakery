
const bakeryProducts = [
  { id: 1, name: "Signature Bread" },
  { id: 2, name: "Chocolate Cake" },
  { id: 3, name: "Fresh Croissants" },
  { id: 4, name: "Cookies" }
];


let favorites = JSON.parse(localStorage.getItem("bakeryFavorites")) || [];


function displayProducts() {
  const container = document.getElementById("favorite-options");

  bakeryProducts.forEach(function(product) {
    const button = document.createElement("button");

    button.textContent = "♡ " + product.name;
    button.type = "button";

    button.addEventListener("click", function() {
      toggleFavorite(product.id);
    });

    container.appendChild(button);
  });
}


function toggleFavorite(productId) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter(function(id) {
      return id !== productId;
    });
  } else {
    favorites.push(productId);
  }

  localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));

  displayFavorites();
}


function displayFavorites() {
  const list = document.getElementById("favorites-list");
  list.innerHTML = "";

  favorites.forEach(function(id) {
    const product = bakeryProducts.find(function(item) {
      return item.id === id;
    });

    if (product) {
      const listItem = document.createElement("li");
      listItem.textContent = product.name;
      list.appendChild(listItem);
    }
  });
}


if (document.getElementById("favorite-options")) {
  displayProducts();
  displayFavorites();
}



const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customer-name").value.trim();
    const email = document.getElementById("email").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    nameError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (name.length < 2) {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (isValid) {
      alert("Your form is valid. Thank you for contacting North Star Bakery!");
    }
  });
}

