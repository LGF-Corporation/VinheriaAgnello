// Temos que usar essas tags aqui:

// prompt();
// alert();
// console.log(); 


// Mensagem inicial: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var nome = prompt("Seja bem-vindo(a)! Para uma experiência personalizada em nosso site, realizamos um breve cadastro. Por favor insira o seu nome: ");
//Alguem escreva um alert com a mensagem: Cadastro realizado! Veja os detalhes no console. E commita pra registrar o feito.
    alert("Olá, " + nome"! Cadastro realizado com sucesso!");
//verificar este codigo

    
// Lógica usada -> separar por tipos de vinhos, e dentre os tipos, ditar as opçoes disponiveis (Flávia)

var vinho = prompt("Dentre as opções de vinho Tinto, Branco ou Rose, qual é o tipo de vinho que você está procurando: ");

if ((vinho == "Tinto") || (vinho == "tinto")) {
    alert("Há x unidades deste vinho");
}
  else if ((vinho == "Branco" ) || (vinho == "branco" )) {
    alert("Há y unidades deste vinho");

} else if ((vinho == "Rose" ) || (vinho == "rose" ) || (vinho== "rosé") || (vinho=="Rosé")) {
    alert("Há z unidades deste vinho");

} else {
    alert("Desculpe, não há unidades disponíveis deste vinho. Veja outras opções disponíveis em nossa página de produtos ou verifique se digitou o nome corretamente.");
}

//Histórico no console: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("Nome:" + nome);
console.log("vinho:" + vinho);
console.log("Tipo:" + tipo);
console.log("Safra:" + safra);
console.log("Unidades no estoque:" + unid); //<-- Isso não está funcionando e eu não sei porquÊ!!
