"use strict";

// Tanıtım amaçlı örnek veri. Oyunun güncel istatistiklerini temsil etmez.
const BRAWLERS = [
  {id:"shelly",name:"Shelly",role:"Hasar",range:"Kısa",icon:"S",c1:"#c65be9",c2:"#7145b5"},
  {id:"colt",name:"Colt",role:"Hasar",range:"Uzun",icon:"C",c1:"#ef586c",c2:"#b62d66"},
  {id:"poco",name:"Poco",role:"Destek",range:"Orta",icon:"P",c1:"#f6aa43",c2:"#cb6948"},
  {id:"jessie",name:"Jessie",role:"Kontrol",range:"Orta",icon:"J",c1:"#6ba9f2",c2:"#3b5cbd"},
  {id:"nita",name:"Nita",role:"Hasar",range:"Orta",icon:"N",c1:"#e87d65",c2:"#a34d89"},
  {id:"elprimo",name:"El Primo",role:"Tank",range:"Kısa",icon:"E",c1:"#5c9aff",c2:"#353cba"},
  {id:"bull",name:"Bull",role:"Tank",range:"Kısa",icon:"B",c1:"#7384b1",c2:"#333f6e"},
  {id:"piper",name:"Piper",role:"Nişancı",range:"Uzun",icon:"P",c1:"#f6a9c9",c2:"#c879bd"},
  {id:"brock",name:"Brock",role:"Nişancı",range:"Uzun",icon:"B",c1:"#9d71ef",c2:"#5a51bd"},
  {id:"barley",name:"Barley",role:"Kontrol",range:"Uzun",icon:"B",c1:"#69c9c9",c2:"#327cb2"},
  {id:"bo",name:"Bo",role:"Kontrol",range:"Uzun",icon:"B",c1:"#ddbc61",c2:"#988349"},
  {id:"rico",name:"Rico",role:"Hasar",range:"Uzun",icon:"R",c1:"#4eaff5",c2:"#4a57a5"}
];
const MAPS = {
  gem:["Hard Rock Mine","Crystal Arcade"],
  ball:["Sneaky Fields","Super Beach"],
  knockout:["Out in the Open","Goldarm Gulch"],
  heist:["Safe Zone","Hot Potato"]
};
const selection = [null,null,null];
const $ = id => document.getElementById(id);
const modeSelect=$("modeSelect"),mapSelect=$("mapSelect"),searchInput=$("searchInput");

function updateMaps(){
  const original=mapSelect.value;
  mapSelect.replaceChildren();
  for(const name of MAPS[modeSelect.value]){
    const option=document.createElement("option");option.textContent=name;option.value=name;mapSelect.append(option);
  }
  if(MAPS[modeSelect.value].includes(original)) mapSelect.value=original;
}

function renderTeam(){
  const next=selection.findIndex(value=>value===null);
  $("teamCount").textContent=`${selection.filter(Boolean).length} / 3 seçildi`;
  $("turnHint").textContent=next<0 ? "Takım hazır. Değerlendirmeye geçebilirsin!" : `Sıra: Oyuncu ${next+1} • Bir karakter seç`;
  const container=$("teamSlots");container.replaceChildren();
  selection.forEach((id,index)=>{
    const current=BRAWLERS.find(b=>b.id===id);
    const cell=document.createElement("div");cell.className=`slot ${current?"filled":""} ${index===next?"current":""}`;
    const badge=document.createElement("div");badge.className=current?"picked-icon":"slot-badge";badge.textContent=current?current.icon:String(index+1);
    const title=document.createElement("strong");title.textContent=current?current.name:`Oyuncu ${index+1}`;
    const info=document.createElement("small");info.textContent=current?`${current.role} • ${current.range}`:"Karakter bekleniyor";
    cell.append(badge,title,info);
    if(current){
      const remove=document.createElement("button");remove.type="button";remove.className="remove";remove.textContent="Seçimi kaldır";remove.setAttribute("aria-label",`Oyuncu ${index+1}: ${current.name} seçimini kaldır`);
      remove.addEventListener("click",()=>{selection[index]=null;renderTeam();renderBrawlers();clearReport();});cell.append(remove);
    }
    container.append(cell);
  });
}
function renderBrawlers(){
  const query=searchInput.value.trim().toLocaleLowerCase("tr");
  const filtered=BRAWLERS.filter(b=>(b.name+" "+b.role+" "+b.range).toLocaleLowerCase("tr").includes(query));
  const grid=$("brawlerGrid");grid.replaceChildren();
  if(!filtered.length){const p=document.createElement("p");p.className="empty-grid";p.textContent="Aramana uygun karakter yok.";grid.append(p);}
  filtered.forEach(b=>{
    const button=document.createElement("button");button.type="button";button.className="brawler-card";
    button.disabled=selection.includes(b.id)||selection.every(Boolean);
    button.setAttribute("aria-label",`${b.name}, ${b.role}, ${b.range} menzil: takıma ekle`);
    const avatar=document.createElement("span");avatar.className="avatar";avatar.textContent=b.icon;
    avatar.style.setProperty("--c1",b.c1);avatar.style.setProperty("--c2",b.c2);
    const title=document.createElement("strong");title.textContent=b.name;
    const subtitle=document.createElement("small");subtitle.textContent=b.role;
    button.append(avatar,title,subtitle);
    button.addEventListener("click",()=>{
      const next=selection.indexOf(null);if(next<0||selection.includes(b.id))return;
      selection[next]=b.id;renderTeam();renderBrawlers();clearReport();
    });grid.append(button);
  });
}
function clearReport(){
  $("scoreValue").textContent="—";
  $("resultText").textContent="Üç karakteri seçtiğinizde takım değerlendirmesi burada görünecek.";
  $("resultTags").replaceChildren();
}
modeSelect.addEventListener("change",()=>{updateMaps();clearReport();});
mapSelect.addEventListener("change",clearReport);
searchInput.addEventListener("input",renderBrawlers);
$("resetButton").addEventListener("click",()=>{selection.fill(null);renderTeam();renderBrawlers();clearReport();});
updateMaps();renderTeam();renderBrawlers();
