window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let sexo = document.getElementById('sexo');
let idades = document.getElementById('idades');
let sexos = document.getElementById('sexos');
let resposta = document.getElementById('resposta');
let riscos = document.getElementById('riscos');
let clasificacao = document.getElementById('clasificacao');
let img = document.getElementById('img');
const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    let cor = ""
    let alturaAtual = altura.value / 100
    let IMC = (peso.value /(alturaAtual*alturaAtual)).toFixed(2);
    sexos.innerHTML = 'Sexo: ' + sexo.value 
    idades.innerHTML = 'Idade: ' + idade.value + ' anos' 
    resposta.innerHTML = 'O IMC de ' + nome.value + " é: " + IMC 
    if(IMC < 16){
        clasificacao.innerHTML = "Magreza GRAVE";
        riscos.innerHTML = "Risco alto - Anorexia, Bulimia, Osteoporose e auto consumo de massa muscular, Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais e sexuais."
        cor = "red"
        clasificacao.style.color = cor
        img.src= "https://images7.memedroid.com/images/UPLOADED859/60038386702b8.jpeg"
        img.style.width = "50%"
    }
    if(IMC >= 16 && IMC < 17){
        clasificacao.innerHTML = "Magreza Moderada"
        riscos.innerHTML = "Risco alto - Anorexia, Bulimia, Osteoporose e auto consumo de massa muscular, Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais e sexuais."
        cor = "red"
        clasificacao.style.color = cor
        img.src= "https://images7.memedroid.com/images/UPLOADED859/60038386702b8.jpeg"
        img.style.width = "50%"
    }
    if(IMC >= 17 && IMC < 18.5){
        clasificacao.innerHTML = "Magreza Leve"
        riscos.innerHTML = "Risco moderado - Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais."
        cor = "red"
        clasificacao.style.color = cor
        img.src= "https://images7.memedroid.com/images/UPLOADED859/60038386702b8.jpeg"
        img.style.width = "50%"
    } 
    if(IMC > 18.4 && IMC < 25 ){
        clasificacao.innerHTML = "Saudavel Renato"
        riscos.innerHTML = "Baixo risco - Estado normal, bom nível de energia, vitalidade e boa condição física. Mantenha o seu peso e IMC."
        cor = "green"
        clasificacao.style.color = cor
        img.src = "https://pbs.twimg.com/media/FyR-USBWIAIRH44.jpg"
        img.style.width = "50%"
    } 
    if(IMC > 25 && IMC < 30 ){
        clasificacao.innerHTML = "Excesso de Peso"
        riscos.innerHTML = "Risco moderado - Fadiga, problemas digestivos, problemas circulatórios, má circulação nas pernas, varizes."
        cor = "orange"
        clasificacao.style.color = cor
        img.src= "https://i.pinimg.com/564x/2f/4a/50/2f4a5036a5d582e3d611d5fb4db322b3.jpg"
        img.style.width = "50%"
    } 
    if(IMC >= 30 && IMC < 35 ){
        clasificacao.innerHTML = "obsedidade grau 1"
        riscos.innerHTML = "Risco alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações mestruais, disfunções sexuais."
        cor = "red"
        clasificacao.style.color = cor
        img.src= "https://images7.memedroid.com/images/UPLOADED859/60038386702b8.jpeg"
        img.style.width = "50%"
    } 
    if(IMC >= 35 && IMC < 40 ){
        clasificacao.innerHTML = "obsedidade grau 2"
        riscos.innerHTML = "Risco Muito alto - Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, cancro do colon uterino e mamário, refluxo esofágico,disfunções sexuais, discriminação social, laboral e sexual."
        cor = "red"
        clasificacao.style.color = cor
        img.src= "https://i.pinimg.com/236x/20/1f/e1/201fe15bbe1e8fe535b054fec1276b6d--memes.jpg"
        img.style.width = "50%"
    } 
    if(IMC >= 40 ){
        clasificacao.innerHTML = "obsedidade grau 3"
        riscos.innerHTML = "Risco Muito alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações mestruais, Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, cancro do colon uterino e mamário, refluxo esofágico,disfunções sexuais, discriminação social, laboral e sexual."
        cor = "red"
        clasificacao.style.color = cor
        img.src= "https://images7.memedroid.com/images/UPLOADED859/60038386702b8.jpeg"
        img.style.width = "50%"
    } 
})  