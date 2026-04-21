window.onload = () => {

//Cadastro
let cadastro = prompt("digite seu nome:");
alert("Cadastro realizado! Veja os detalhes no console.");
console.log("Cadastro realizado!");

// Contadores
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let vinhoMaisAntigo = "";
let anoMaisAntigo = 9999;

function normalizar(texto) {
  return texto ? texto.toLowerCase().trim() : "";
}

function classificarVinho(ano) {
    let anoAtual = 2026;
    let idade = anoAtual - ano;
    if (idade <= 3) return "Jovem";
    else if (idade <= 15) return "Amadurecido";
    else return "Antigo";
}

    function alertaEstoque(nome, ano, estoque) {
    let classe = classificarVinho(ano);
    let avisoEstoque = estoque <= 5 ? " ESTOQUE BAIXO!" : "";
    alert(nome + " - " + estoque + " unidades em estoque" + avisoEstoque + " " + "\n Classificação: " + classe);
    console.log(nome + " - " + estoque + " unidades em estoque" + "  " + avisoEstoque + " | Classificação: " + classe);
}

function getNomeVinho(categoria, posicao) {
    if (categoria === "Tinto") {
        if (posicao === 1) return "Casillero del Diablo 1930";
        if (posicao === 2) return "TerraNoble 1900";
        if (posicao === 3) return "Luigi Bosca 2015";
        if (posicao === 4) return "Cartuxa 2002";
        if (posicao === 5) return "Vina Montes 2007";
    }
    if (categoria === "Branco") {
        if (posicao === 1) return "Casal Garcia 1829";
        if (posicao === 2) return "Monte Agudo 1738";
        if (posicao === 3) return "Garibaldi 2020";
        if (posicao === 4) return "Santa Helena 2023";
        if (posicao === 5) return "Gato Negro 2021";
    }
    if (categoria === "Rosé") {
        if (posicao === 1) return "Casa Valduga 1942";
        if (posicao === 2) return "Aurora Rosé 1935";
        if (posicao === 3) return "Arte Blend Rosé 2022";
        if (posicao === 4) return "Casal Mendes 2020";
        if (posicao === 5) return "Miolo Rosé 2021";
    }
    return "Vinho não encontrado";
}

function processarDadosVinho(categoria, posicao) {
    let nome, ano, estoque;
    if (categoria === "Tinto") {
        if (posicao === 1) { nome = "Casillero del Diablo 1930"; ano = 1930; estoque = 10; }
        else if (posicao === 2) { nome = "TerraNoble 1900"; ano = 1900; estoque = 2; }
        else if (posicao === 3) { nome = "Luigi Bosca 2015"; ano = 2015; estoque = 5; }
        else if (posicao === 4) { nome = "Cartuxa 2002"; ano = 2002; estoque = 6; }
        else if (posicao === 5) { nome = "Vina Montes 2007"; ano = 2007; estoque = 1; }
    } else if (categoria === "Branco") {
        if (posicao === 1) { nome = "Casal Garcia 1829"; ano = 1829; estoque = 8; }
        else if (posicao === 2) { nome = "Monte Agudo 1738"; ano = 1738; estoque = 3; }
        else if (posicao === 3) { nome = "Garibaldi 2020"; ano = 2020; estoque = 4; }
        else if (posicao === 4) { nome = "Santa Helena 2023"; ano = 2023; estoque = 7; }
        else if (posicao === 5) { nome = "Gato Negro 2021"; ano = 2021; estoque = 2; }
    } else if (categoria === "Rosé") {
        if (posicao === 1) { nome = "Casa Valduga 1942"; ano = 1942; estoque = 5; }
        else if (posicao === 2) { nome = "Aurora Rosé 1935"; ano = 1935; estoque = 6; }
        else if (posicao === 3) { nome = "Arte Blend Rosé 2022"; ano = 2022; estoque = 4; }
        else if (posicao === 4) { nome = "Casal Mendes 2020"; ano = 2020; estoque = 3; }
        else if (posicao === 5) { nome = "Miolo Rosé 2021"; ano = 2021; estoque = 5; }
    } else {
        alert("Categoria inválida.");
        return;
    }

    // Verifica estoque baixo
    if (estoque <= 5) totalEstoqueBaixo++;

    // Verifica safra mais antiga
    if (ano < anoMaisAntigo) {
        anoMaisAntigo = ano;
        vinhoMaisAntigo = nome;
    }

    alertaEstoque(nome, ano, estoque);
}

function escolhaVinho(categoria) {
    alert(`Temos os seguintes vinhos ${categoria}: ${getNomeVinho(categoria, 1)}, ${getNomeVinho(categoria, 2)}, ${getNomeVinho(categoria, 3)}, ${getNomeVinho(categoria, 4)} e ${getNomeVinho(categoria, 5)}`);
    let escolha = normalizar(prompt(`Qual vinho ${categoria} você deseja?`));

    if (escolha == normalizar(getNomeVinho(categoria, 1))) processarDadosVinho(categoria, 1);
    else if (escolha == normalizar(getNomeVinho(categoria, 2))) processarDadosVinho(categoria, 2);
    else if (escolha == normalizar(getNomeVinho(categoria, 3))) processarDadosVinho(categoria, 3);
    else if (escolha == normalizar(getNomeVinho(categoria, 4))) processarDadosVinho(categoria, 4);
    else if (escolha == normalizar(getNomeVinho(categoria, 5))) processarDadosVinho(categoria, 5);
    else {
        alert("Opção inválida, não temos em nosso cardápio.");
        console.log("Opção inválida.");
    }
}

function escolhaTipoDeVinho() {
    let cardapioVinhos = normalizar(prompt("Temos: Vinho Tinto, Vinho Rosé e Vinho Branco. Qual você deseja?"));
    if (cardapioVinhos == "vinho tinto") {
        escolhaVinho("Tinto");
    } else if (cardapioVinhos == "vinho branco") {
        escolhaVinho("Branco");
    } else if (cardapioVinhos.includes("ros")) {
        escolhaVinho("Rosé");
    } else {
        alert("Tipo de vinho inválido!");
    }
}

// Inicia o sistema
let continuar = true;
while (continuar) {
    totalCadastros++;
    escolhaTipoDeVinho();
    let resposta = normalizar(prompt("Deseja comprar mais algum vinho? (sim ou não)"));
    if (resposta == "não" || resposta == "nao") {
        continuar = false;
        alert("Obrigado por comprar conosco, " + cadastro + "!");
        console.log("Obrigado por comprar conosco, " + cadastro + "!");

        // Relatório final
        alert(
            "RELATÓRIO FINAL\n" +
            "Cadastros realizados: " + totalCadastros + "\n" +
            "Vinhos com estoque baixo consultados: " + totalEstoqueBaixo + "\n" +
            "Vinho com safra mais antiga: " + vinhoMaisAntigo + " (" + anoMaisAntigo + ")"
        );
        console.log("RELATÓRIO FINAL");
        console.log("Cadastros: " + totalCadastros);
        console.log("Estoque baixo: " + totalEstoqueBaixo);
        console.log("Vinho mais antigo: " + vinhoMaisAntigo + " (" + anoMaisAntigo + ")");
    }
}

//funcoes para botoes
function vinhosBotao(){
    alert("Temos vinhos: Rosé, Tinto e Branco")
    console.log("Temos vinhos: Rosé, Tinto e Branco")
}

function tiposVinho(){
    alert("VINHOS TINTO: Casillero del Diablo 1930, TerraNoble 1900, Luigi Bosca 2015,Cartuxa 2002, Vina Montes 2007.");
    console.log("VINHOS TINTO: Casillero del Diablo 1930, TerraNoble 1900, Luigi Bosca 2015,Cartuxa 2002, Vina Montes 2007.");
    alert("VINHOS ROSÉ: Casa Valduga 1942, Aurora Rosé 1935, Arte Blend Rosé 2022, Casal Mendes 2020, Miolo Rosé 2021.");
    console.log("VINHOS ROSÉ: Casa Valduga 1942, Aurora Rosé 1935, Arte Blend Rosé 2022, Casal Mendes 2020, Miolo Rosé 2021.");
    alert("VINHOS BRANCO:  Casal Garcia 1829, Monte Agudo 1738, Garibaldi 2020, Santa Helena 2023, Gato Negro 2021");
    console.log("VINHOS BRANCO:  Casal Garcia 1829, Monte Agudo 1738, Garibaldi 2020, Santa Helena 2023, Gato Negro 2021");
    // escolhaBotaoVinho = prompt("Qual a escolha?")
}

// botoes
document.getElementById("vinhos").addEventListener("click", function(e) {
    e.preventDefault();
    vinhosBotao();
  })
// botoes
document.getElementById("cardapio").addEventListener("click", function(e) {
    e.preventDefault(); 
    tiposVinho();
  })
}