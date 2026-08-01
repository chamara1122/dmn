const board=document.getElementById("board");

const colors=[
"red","orange","green","cyan","blue",
"purple","pink","red","orange","green"
];

for(let i=0;i<100;i++){

let card=document.createElement("div");

let color=colors[Math.floor(i/10)];

let no=String(i).padStart(2,"0");

card.className="card "+color;

card.innerHTML=`

<div class="top">

${no}

</div>

<div class="content">

<div>ONLINE KOTU KOLE</div>

<div><b>පොලොන්නරුව</b></div>

<div>3/3 = 300</div>

<div>1/1 = 100</div>

</div>

`;

board.appendChild(card);

}
