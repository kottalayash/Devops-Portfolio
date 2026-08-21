// Portfolio loaded message

console.log("Kottala Yash - DevOps Portfolio");

// Current year

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML = `© ${year} Kottala Yash | DevOps Engineer`;
}

// Smooth navigation

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
