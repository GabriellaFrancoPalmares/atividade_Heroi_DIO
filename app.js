const nomeHeroi = prompt('Qual o nome do seu personagem?');
const xpHeroi = parseInt(prompt('Qual o XP do seu personagem?')); // Convertendo para inteiro
let classeHeroi = "";

if (xpHeroi <= 1000) {
    classeHeroi = "Ferro";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
} else if(xpHeroi <= 2000) {
    classeHeroi = "Bronze";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}else if(xpHeroi <= 5000) {
    classeHeroi = "Prata";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}else if(xpHeroi <= 7000){
    classeHeroi = "Ouro";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}else if(xpHeroi <= 8000){
    classeHeroi = "Platina";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}else if(xpHeroi <= 9000){
    classeHeroi = "Ascendente";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}else if(xpHeroi <= 10000){
    classeHeroi = "Imortal";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}else if(xpHeroi > 10000){
    classeHeroi = "Radiante";
    console.log(`O Herói ${nomeHeroi} está no nivel ${xpHeroi}`);
}