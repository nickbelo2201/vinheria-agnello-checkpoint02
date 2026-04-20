// Interação do Usuário(cadastro)
let cadastro = prompt("digite seu nome:");
alert("Cadastro realizado! Veja os detalhes no console.");

console.log("Cadastro realizado!");
function normalizar(texto) {
  return texto.toLowerCase().trim();
}

// Variáveis para os tipos de vinhos
function escolhaTipoDeVinho() {
    let cardapioVinhos = prompt("Temos: Vinho Tinto , Vinho Rosé e Vinho Branco");
    if (normalizar(cardapioVinhos) == normalizar(vinhoTinto)) {
        escolhaVinhoTinto();
        escolhaVinhoBranco();
        escolhaVinhoRose();
    }
}

//função para escolha do vinho tinto
function escolhaVinhoTinto() {
let casilleroDelDiablo = 'Casillero del Diablo 1930';
let terraNoble = 'TerraNoble 1900';
let luigiBosca = 'Luigi Bosca 2015';
let cartuxa = 'Cartuxa 2002';
let vinaMontes = 'Vina Montes 2007';
print("Temos os seguintes vinhos tintos: Casillero del Diablo 1930, TerraNoble 1900, Vina Montes 2007, Luigi Bosca 2015 e Cartuxa 2002");
let escolha = prompt("Qual vinho tinto você deseja?");
    function estoqueVinhoTinto() {
    if (normalizar(escolha) == normalizar(casilleroDelDiablo)) {
    alert("O vinho escolhido foi Casillero del Diablo 1930, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(terraNoble)) {
    alert("O vinho escolhido foi TerraNoble 1900, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(luigiBosca)) {
    alert("O vinho escolhido foi Luigi Bosca 2015, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(cartuxa)) {
    alert("O vinho escolhido foi Cartuxa 2002, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(vinaMontes)) {
    alert("O vinho escolhido foi Vina Montes 2007, temos 10 unidades em estoque");
    } else {
    alert("Opção inválida, não temos em nosso cardápio.");
    }

    for (let i = 0; i <= 10; i++) {
    prompt("Deseja comprar mais algum vinho? (sim ou não)");
    if (normalizar(escolha) == "sim") {
        escolhaTipoDeVinho();    
    }
    }   
    }
}

//Função para escolha do vinho branco
function escolhaVinhoBranco() {
let CasalGarcia = 'Casal Garcia 1829';
let MonteAgudo = 'Monte Agudo 1738';
let Garibaldi = 'Garibaldi 2020';
let SantaHelena = 'Santa Helena 2023';
let Gatonegro = 'Gato Negro 2021';
print("Temos os seguintes vinhos brancos: Casal Garcia 1829, Monte Agudo 1738, Garibaldi 2020, Santa Helena 2023 e Gato Negro 2021");
let escolha = prompt("Qual vinho branco você deseja?");
    function estoqueVinhoBranco() {
    if (normalizar(escolha) == normalizar(CasalGarcia)) {
    alert("O vinho escolhido foi Casal Garcia 1829, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(MonteAgudo)) {
    alert("O vinho escolhido foi Monte Agudo 1738, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(Garibaldi)) {
    alert("O vinho escolhido foi Garibaldi 2020, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(SantaHelena)) {
    alert("O vinho escolhido foi Santa Helena 2023, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(Gatonegro)) {
    alert("O vinho escolhido foi Gato Negro 2021, temos 10 unidades em estoque");
    } else {
    alert("Opção inválida, não temos em nosso cardápio.");
    }

    for (let i = 0; i <= 10; i++) {
    prompt("Deseja comprar mais algum vinho? (sim ou não)");
    if (normalizar(escolha) == "sim") {
        escolhaTipoDeVinho();    
    }
    }   
    }
}

escolhaVinhoRose() {
let CasaValduga = 'Casa Valduga 1942';
let AuroraRosé = 'Aurora Rosé 1935';
let ArteBlendRose = 'Arte Blend Rosé 2022';
let CasalMendes = 'Casal Mendes 2020';
let MioloRosé = 'Miolo Rosé 2021';
print("Temos os seguintes vinhos rosé: Casa Valduga 1942, Aurora Rosé 1935, Arte Blend Rosé 2022, Casal Mendes 2020 e Miolo Rosé 2021");
let escolha = prompt("Qual vinho rosé você deseja?");
    function estoqueVinhoRose() {
    if (normalizar(escolha) == normalizar(CasaValduga)) {
    alert("O vinho escolhido foi Casa Valduga 1942, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(AuroraRosé)) {
    alert("O vinho escolhido foi Aurora Rosé 1935, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(ArteBlendRose)) {
    alert("O vinho escolhido foi Arte Blend Rosé 2022, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(CasalMendes)) {
    alert("O vinho escolhido foi Casal Mendes 2020, temos 10 unidades em estoque");
    } else if (normalizar(escolha) == normalizar(MioloRosé)) {
    alert("O vinho escolhido foi Miolo Rosé 2021, temos 10 unidades em estoque");
    } else {
    alert("Opção inválida, não temos em nosso cardápio.");
    }

    for (let i = 0; i <= 10; i++) {
    prompt("Deseja comprar mais algum vinho? (sim ou não)");
    if (normalizar(escolha) == "sim") {
        escolhaTipoDeVinho();    
    }
    }   
    }
}