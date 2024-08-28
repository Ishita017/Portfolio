let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.screenY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  //reset:true,
  distance: "90px",
  duration: 3000,
  delay: 100,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Website Designer"],
  typeSpeed: 100,
  //   backSpeed: 100,
  //   backDelay: 1000,
  //   loop: true,
});
function toggleDetails(sectionId) {
  const details = document.getElementById(sectionId);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

(function () {
  emailjs.init("_yAdnP5ApYU14yj-G"); // Replace 'your_user_id' with your actual user ID from EmailJS
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_342ygoa"; // Replace with your actual service ID from EmailJS
    const templateID = "template_xowojdm"; // Replace with your actual template ID from EmailJS

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        document.getElementById("status").innerText =
          "Message sent successfully!";
        setTimeout(function () {
          document.getElementById("status").innerHTML = "";
        }, 5000);
        document.getElementById("contact-form").reset();
      },
      (err) => {
        document.getElementById("status").innerText =
          "Failed to send message. Please try again.";
        document.getElementById("status").style.color = red;
      }
    );
  });
