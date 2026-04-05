// Temos que usar essas tags aqui:

// prompt();
// alert();
// console.log(); 


// Mensagem inicial: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var nome = prompt("Seja bem-vindo(a)! Para uma experiência personalizada em nosso site, realizamos um breve cadastro. Por favor insira o seu nome: ");


// Mensagem de cadastro realizado >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

alert("Olá, " + nome + "! Cadastro realizado com sucesso! Veja os detalhes no Console.");

// Variáveis dos estoques dos vinhos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// Vinhos tintos ------------------------------------------------------------------------------------
var casiDDTinto = 5;
var paulitTinto = 3;
var casalGTinto = 2;
var garibTinto = 7;

//  Soma dos tipos de tintos aqui
var totalTinto = ( casalGTinto + paulitTinto + casiDDTinto + garibTinto );  

// Safras de vinhos tintos separados por marcas -------------------------------------------------
var casiDD2025 = 0;
var casiDD2024 = 2;
var casiDD2023 = 3;

var paulit2025 = 1;
var paulit2024 = 1;
var paulit2023 = 1;

var casalG2025 = 0;
var casalG2024 = 0;
var casalG2023 = 2;

var gariB2025 = 1;
var gariB2024 = 2;
var gariB2023 = 4;

// soma das safras de vinhos tintos 2025 aqui
var totTintSaf2025 = (casiDD2025 + paulit2025 + casalG2025 + gariB2025); 

// soma das safras de vinhos tintos 2024 aqui
var totTintSaf2024 = ( casiDD2024 + paulit2024 + casalG2024 + gariB2024); 

// soma das safras de vinhos tintos 2023 aqui
var totTintSaf2023 = (casalG2023 + paulit2023 + casalG2023 + gariB2023); 

//Continuar fazendo para os outros tipos (APAGAR essa mensagem dps de pronto)

//Vinhos rosés ---------------------------------------------------------------------------
var casiDDRose = 4;
var casalGRose = 5;

//soma dos tipos de rosés aqui

//Safras dos vinhos rosés separados por marcas --------------------------------------------------





//Informações de estoque dos vinhos no Console >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//INformações dos vinhos tintos e suas safras ------------------------------------------------

console.log("Total de vinhos tintos: " + totalTinto );
console.log("Casillero del Diablo (tinto): " + casiDDTinto);
console.log("Pauliteiros (tinto): " + paulitTinto);
console.log("Casal Gercia (tinto): " + casalGTinto);

//Safras dos vinhos tintos aqui (todas as marcas)-----------------------------------------------
console.log("Safras de 2025 (tinto): " + totTintSaf2025 );
console.log("Safras de 2024 (tinto): " + totTintSaf2024 );
console.log("Safras de 2023 (tinto): " + totTintSaf2023 );

//Mostrando safras individuais -----------------------------------------------------------------
console.log("Casillero del Diablo - Safra 2025 (tinto): " + casiDD2025 );
console.log("Casillero del Diablo - Safra 2024 (tinto): " + casiDD2024 );
console.log("Casillero del Diablo - Safra 2023 (tinto): " + casiDD2023  );
console.log("Casillero del Diablo - Safra 2023 (tinto): " + casiDD2023  );

console.log("Pauliteiros - Safra 2025 (tinto): " + paulit2025  );
console.log("Pauliteiros - Safra 2024 (tinto): " + paulit2024  );
console.log("Pauliteiros - Safra 2023 (tinto): " + paulit2023  );





    
// Lógica usada -> separar por tipos de vinhos, e dentre os tipos, ditar as opçoes disponiveis (Flávia) 

// Captura a entrada, transforma em minúsculo e remove acentos
var tipo = prompt("Dentre as opções de vinhos: Tinto, Branco ou Rosé, qual é o tipo de vinho que você está procurando?")
           .toLowerCase()                       // Transforma em minúsculas
           .normalize("NFD")                    // Decompõe caracteres acentuados
           .replace(/[\u0300-\u036f]/g, "");    // Remove os acentos

// Agora as verificações ficam muito mais simples:
if (tipo === "tinto") {
    alert("Há " + totalTinto + " unidades deste tipo de vinho. Consulte o Console para verificar as marcas!");
} 
else if (tipo === "branco") {
    alert("Há X unidades deste tipo de vinho. Consulte o Console para verificar as marcas!");
} 
else if (tipo === "rose") {
    // Graças ao normalize/replace, "Rosé", "rosé", "Rose" e "rose" viram todos "rose"
    alert("Há X unidades deste tipo de vinho. Consulte o Console para verificar as marcas!");
} 
else {
    alert("Desculpe, não há unidades disponíveis deste tipo de vinho. Veja outras opções disponíveis no Console ou verifique se digitou o nome corretamente.");
}

