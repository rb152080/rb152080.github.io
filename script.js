const text = "Willkommen";
const typingElement = document.getElementById("typing");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150);
    }
}

typeText();
