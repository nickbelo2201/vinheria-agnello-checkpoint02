let cadastro = prompt("digite seu nome:");
alert("Cadastro realizado! Veja os detalhes no console.");

console.log("Cadastro realizado!");
function normalizar(texto) {
  return texto.toLowerCase().trim();
}
let cardapioVinhos;

cardapioVinhos = prompt("Temos: Vinho Tinto , Vinho Rosé e Vinho Branco");

//VINHOS TINTOS 
let vinhoTinto = 'Vinho Tinto';

let casilleroDelDiablo = 'Casillero del Diablo 1930';
let terraNoble = 'TerraNoble 1900';
let luigiBosca = 'Luigi Bosca 2015';
let cartuxa = 'Cartuxa 2002';
let vinaMontes = 'Vina Montes 2007';



//ESTRUTURA DE DECISÃO 
let escolha;
if (normalizar(cardapioVinhos) == normalizar(vinhoTinto)) {
  console.log("Você escolheu Vinho Tinto");
  alert("Você escolheu Vinho Tinto")
  escolha = prompt("Casillero del Diablo 1930, TerraNoble 1900, Vina Montes 2007, Luigi Bosca 2015 e Cartuxa 2002");
  if (normalizar(escolha) == normalizar(casilleroDelDiablo)) {
    console.log("O vinho escolhido foi Casillero del Diablo 1930");
    alert("O vinho escolhido foi Casillero del Diablo 1930")
  } else if (normalizar(escolha) == normalizar(terraNoble)) {
    console.log("O vinho escolhido foi TerraNoble 1900");
    alert("O vinho escolhido foi TerraNoble 1900")
  } else if (normalizar(escolha) == normalizar(luigiBosca)) {
    console.log("O vinho escolhido foi Luigi Bosca 2015");
    alert("O vinho escolhido foi Luigi Bosca 2015")
  } else if (normalizar(escolha) == normalizar(cartuxa)) {
    console.log("O vinho escolhido foi Cartuxa 2002");
    alert("O vinho escolhido foi Cartuxa 2002")
  } else if (normalizar(escolha) == normalizar(vinaMontes)) {
    console.log("O vinho escolhido foi Vina Montes 2007");
    alert("O vinho escolhido foi Vina Montes 2007")
  } else {
    console.log("Opção inválida");
    alert(" Opção inválida, não temos em nosso cardapio.");
  }
}

let vinhoBranco = 'Vinho Branco';

let CasalGarcia = 'Casal Garcia 1829';
let MonteAgudo = 'Monte Agudo 1738';
let Garibaldi = 'Garibaldi 2020';
let SantaHelena = 'Santa Helena 2023';
let Gatonegro = 'Gato Negro 1921';


let escolhaBranco;
if (normalizar(cardapioVinhos) == normalizar(vinhoBranco)) {
  console.log("Você escolheu Vinho Branco");
  alert("Você escolheu Vinho Branco")
  
  escolhaBranco = prompt("Temos: Casal Garcia 1829, Gato Negro 1921, Garibaldi 2020, Monte Agudo 1738, Santa Helena 2023");

  if (escolhaBranco == CasalGarcia) {
    console.log("O vinho escolhido foi Casal Garcia 1829");
    alert("O vinho escolhido foi Casal Garcia 1829")
  } else if (normalizar(cardapioVinhos) == normalizar(Gatonegro)) {
    console.log("O vinho escolhido foi Gato Negro 1921");
    alert("O vinho escolhido foi Gato Negro 1921")
  } else if (normalizar(cardapioVinhos) == normalizar(Garibaldi)) {
    console.log("O vinho escolhido foi Garibaldi 2020");
    alert("O vinho escolhido foi Garibaldi 2020")
  } else if (normalizar(cardapioVinhos) == normalizar(MonteAgudo)) {
    console.log("O vinho escolhido foi Monte Agudo 1738");
    alert("O vinho escolhido foi Monte Agudo 1738")
  } else if (normalizar(cardapioVinhos) == normalizar(SantaHelena)) {
    console.log("O vinho escolhido foi Santa Helena 2023");
    alert("O vinho escolhido foi Santa Helena 2023")
  } else {
    console.log("Opção inválida");
    alert("Opção inválida, não temos em nosso cardápio.");
  }
}

//VINHOS ROSÉ
let vinhoRose = 'Vinho Rosé';
let CasaValduga = 'Casa Valduga 1942';
let AuroraRosé = 'Aurora Rosé 1935';
let ArteBlendRose = 'Arte Blend Rosé 2022';
let CasalMendes = 'Casal Mendes 2020';
let MioloRosé = 'Miolo Rosé 2021';


let escolhaRose;

if (normalizar(cardapioVinhos) == normalizar(vinhoRose)) {
  console.log("Você escolheu Vinho Rosé");
  alert("Você escolheu Vinho Rosé")
  
  escolhaRose = prompt("Temos: Casa Valduga 1942, Aurora Rosé 1935, Miolo Rosé 2021, Arte Blend Rosé 2022, Casal Mendes 2020");

  if (escolhaRose == CasaValduga) {
    console.log("O vinho escolhido foi Casa Valduga 1942");
    alert("O vinho escolhido foi Casa Valduga 1942")
  } else if (normalizar(cardapioVinhos) == normalizar(AuroraRosé)) {
    console.log("O vinho escolhido foi Aurora Rosé 1935");
    alert ("O vinho escolhido foi Aurora Rosé 1935")
  } else if (normalizar(cardapioVinhos) == normalizar(ArteBlendRose)) {
    console.log("O vinho escolhido foi Arte Blend Rosé 2022");
    alert("O vinho escolhido foi Arte Blend Rosé 2022")
  } else if (normalizar(cardapioVinhos) == normalizar(CasalMendes)) {
    console.log("O vinho escolhido foi Casal Mendes 2020");
    alert("O vinho escolhido foi Casal Mendes  2020")
  } else if (normalizar(cardapioVinhos) == normalizar(MioloRosé)) {
    console.log("O vinho escolhido foi Miolo Rosé 2021");
    alert("O vinho escolhido foi Miolo Rosé 2021")
  } else {
    console.log("Opção inválida");
    alert("Opção inválida, não temos em nosso cardápio.");
  }
}
