const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const html = document.documentElement;
        const icon = document.getElementById("toggleIcon");
        const label = document.getElementById("toggleLabel");

        if (html.dataset.theme === "dark") {
            html.dataset.theme = "light";
            icon.textContent = "🌙";
            label.textContent = "Dark Mode";
        } else {
            html.dataset.theme = "dark";
            icon.textContent = "☀️";
            label.textContent = "Light Mode";
        }
    });
}

const rotatingText = document.getElementById("rotatingText");

if (rotatingText) {
    const words = [
        "Web Developer",
        "Frontend Designer",
        "JavaScript Programmer",
        "College Student"
    ];

    let index = 0;

    setInterval(() => {
        index++;

        if (index >= words.length) {
            index = 0;
        }

        rotatingText.textContent = words[index];

    }, 2000);
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please complete all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been sent.");

        contactForm.reset();
    });
}

const revealElements = document.querySelectorAll(".reveal");

function revealSections() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();