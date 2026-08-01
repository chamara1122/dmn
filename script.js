// =========================================
// ONLINE KOTU KOLE
// script.js
// =========================================

const container = document.querySelector(".container");

const PRICE = "Rs.500";
const DATE = new Date().toISOString().split("T")[0];

const TITLE = "ONLINE කොටු KOLE";
const PLACE = "පොලොන්නරුව";

const rowColors = [
    "red",
    "orange",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "green"
];

// Load saved payment status
let paymentStatus = JSON.parse(localStorage.getItem("paymentStatus")) || {};

for (let i = 0; i < 100; i++) {

    const number = String(i).padStart(2, "0");

    const color = rowColors[Math.floor(i / 10)];

    if (paymentStatus[number] === undefined) {
        paymentStatus[number] = false;
    }

    const card = document.createElement("div");

    card.className = `card ${color}`;

    card.innerHTML = `
        <div class="header">
            <span class="status">${paymentStatus[number] ? "✅" : "❌"}</span>
            <span class="price">${PRICE}</span>
            <span class="date">${DATE}</span>
        </div>

        <div class="number">${number}</div>

        <div class="title">${TITLE}</div>

        <div class="place">${PLACE}</div>

        <div class="prize">
            <div>3/3 = Rs.300</div>
            <div>1/1 = Rs.100</div>
        </div>
    `;

    // Click to change payment status
    card.addEventListener("click", () => {

        paymentStatus[number] = !paymentStatus[number];

        localStorage.setItem(
            "paymentStatus",
            JSON.stringify(paymentStatus)
        );

        card.querySelector(".status").textContent =
            paymentStatus[number] ? "✅" : "❌";

    });

    container.appendChild(card);

}
