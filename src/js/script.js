// Temos que usar essas tags aqui:

// prompt();
// alert();
// console.log(); 




// Mensagem inicial: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var nome = prompt("Seja bem-vindo(a)! Para uma experiência personalizada em nosso site, realizamos um breve cadastro. Por favor insira o seu nome: ");

//Alguem escreva um alert com a mensagem: Cadastro realizado! Veja os detalhes no console. E commita pra registrar o feito.

// Lógica para mostrar estoques dos vinhos: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var vinho = prompt("Qual vinho você procura? (Digite o nome do vinho)");

var tipo = prompt("Qual o tipo do vinho. Tinto, rosé ou branco?"); 

var safra = prompt("Qual seria a safra desejada? (2024, 2025 ou 2026)"); 


    // Vinho pauliteiros

if ((vinho == "Pauliteiros" ) || (vinho == "pauliteiros" ) && (tipo == "tinto") && (safra == "2024")) {
    alert("Há 7 unidades deste vinho");

} else if ((vinho == "Pauliteiros" ) || (vinho == "pauliteiros" ) && (tipo == "tinto") && (safra == "2025")) {
    alert("Há 15 unidades deste vinho");

    // Vinho Casillero del Diablo

} else if ((vinho == "casillero del diablo" ) || (vinho == "Casillero del Diablo" ) && (tipo == "tinto") && (safra == "2024")) {
    alert("Há 32 unidades deste vinho");

} else if ((vinho == "casillero del diablo" ) || (vinho == "Casillero del Diablo" ) && (tipo == "tinto") && (safra == "2025")) {
    alert("Há 20 unidades deste vinho");

} else if ((vinho == "casillero del diablo" ) || (vinho == "Casillero del Diablo" ) && (tipo == "rosé") && (safra == "2025")) {
    alert("Há 15 unidades deste vinho");
    
} else if ((vinho == "casillero del diablo" ) || (vinho == "Casillero del Diablo" ) && (tipo == "rosé") && (safra == "2024")) {
    alert("Há 21 unidades deste vinho");

} else if ((vinho == "casillero del diablo" ) || (vinho == "Casillero del Diablo" ) && (tipo == "branco") && (safra == "2025")) {
    alert("Há 34 unidades deste vinho");

} else if ((vinho == "casillero del diablo" ) || (vinho == "Casillero del Diablo" ) && (tipo == "branco") && (safra == "2024")) {
    var unid = 32; //<-- Isso aqui foi um teste, mas não tá rolando!
    alert("Há 32 unidades deste vinho");
    
} else {
    alert("Desculpe, não há unidades disponíveis deste vinho. Veja outras opções disponíveis em nossa página de produtos ou verifique se digitou o nome corretamente.");
}

//Histórico no console: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("Nome:" + nome);
console.log("vinho:" + vinho);
console.log("Tipo:" + tipo);
console.log("Safra:" + safra);
console.log("Unidades no estoque:" + unid); //<-- Isso não está funcionando e eu não sei porquÊ!!
