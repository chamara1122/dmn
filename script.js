// ==========================================
// ONLINE KOTU KOLE
// script.js
// ==========================================

const board = document.getElementById("board");

// Row Colors (10 Rows)
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

// Taken Numbers
const data = {

    "00":["👤 Thinushi (5)"],
    "01":["② Priyadarshana","③ Moon"],
    "05":["⑤ 0712474616"],
    "09":["③ Moon","② Priyadarshana"],
    "14":["② 0712474616"],
    "19":["⑤ Priyadarshana"],
    "22":["② Priyadarshana"],
    "24":["⑤ Moon"],
    "27":["② Moon"],
    "33":["② Moon"],
    "35":["③ Moon"],
    "36":["⑤ Thusitha"],
    "37":["⑤ Gayan"],
    "38":["② 0712474616"],
    "40":["② Moon"],
    "41":["② 0712474616"],
    "42":["⑤ Moon"],
    "46":["⑤ Thusitha"],
    "48":["⑤ Arakshi Dula"],
    "50":["② Moon"],
    "52":["⑤ Moon"],
    "53":["⑤ Moon"],
    "55":["⑤ M"],
    "59":["⑤ M"],
    "62":["② Priyadarshana"],
    "63":["⑤ Thusitha"],
    "66":["② Priyadarshana"],
    "67":["⑤ Soni"],
    "70":["② M"],
    "73":["⑤ Pahan"],
    "74":["⑤ Dushitha Silva"],
    "76":["③ 0712474616","② Dushitha Silva"],
    "77":["② Priyadarshana","② 0712474616"],
    "79":["⑤ Kasun"],
    "80":["⑤ Thusitha"],
    "81":["⑤ Chamara Shan"],
    "82":["⑤ Kasun"],
    "85":["② 0712474616","② Priyadarshana"],
    "86":["③ 0712474616"],
    "88":["⑤ Dushitha Silva"],
    "89":["⑤ Kasun"],
    "92":["⑤ Buddharakkha"],
    "95":["⑤ Dushitha Seetha"],
    "97":["② M"],
    "99":["⑤ M"]

};

// Generate 100 Cards

for(let i=0;i<100;i++){

    const number = String(i).padStart(2,"0");

    const color = rowColors[Math.floor(i/10)];

    const card = document.createElement("div");

    card.className = `card ${color}`;

    let content = "";

    if(data[number]){

        data[number].forEach(person=>{

            content += `
                <div class="line">
                    ${person}
                </div>
            `;

        });

    }else{

        content = `
            <div class="empty">
                Available
            </div>
        `;

    }

    card.innerHTML = `

        <div class="top">
            ${number}
        </div>

        <div class="content">

            ${content}

        </div>

    `;

    board.appendChild(card);

}
