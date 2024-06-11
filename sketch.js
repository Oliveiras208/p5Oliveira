// romance, drama, aventura, fantasia, ficção científica, ação, livre, família, animação, 



// enrolados, livre, família, animação
// wall-e, livre, animação, ficção científica
// crepúsculo: amanhecer part 2, 12, romance, drama, aventura fantasia
// vingadores: ultimato, 12, ficção científica, aventura, ação
// jogos vorazes: a esperança part 2, 14, aventura, ação, ficção científica


let campoIdade;
let campoFicçãoCientífica;

function setup() {
  createCanvas(700, 400);
  createElement("h2" ," Recomendador de filmes");
  createSpan("Sua idade");
  campoIdade = createInput(15);
campoFicçãoCientífica = createCheckbox("Gosta de ficção científica?")
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFicçãoCientífica = campoFicçãoCientífica.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFicçãoCientífica);
  fill("rgb(0,0,0)");
  textAlign(CENTER, CENTER);
  textSize(38);
  text (recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFicçãoCientífica) {
  if (idade >= 12) {
    if (idade >= 14) {
    return "jogos vorazes: a esperança part 2";
  } else {
    if (gostaDeFicçãoCientífica) {
      return "vingadores: ultimato";
    } else {
      return "crepúsculo: amanhecer part 2";
    }
  }
} else {
  if(gostaDeFicçãoCientífica) {
    return "wall-e";
  } else {
  return "enrolados";
  }
}
}
