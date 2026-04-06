/// ==============================================================================================
// PROJETO: VINHERIA AGNELLO - CP1
// ==============================================================================================

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

// Soma dos tipos de tintos aqui
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

// soma das safras de vinhos tintos aqui
var totTintSaf2025 = (casiDD2025 + paulit2025 + casalG2025 + gariB2025); 
var totTintSaf2024 = ( casiDD2024 + paulit2024 + casalG2024 + gariB2024); 
var totTintSaf2023 = (casiDD2023 + paulit2023 + casalG2023 + gariB2023); 

// Vinhos brancos ----------------------------------------------------------------------------------
var casiDDBranco = 3;  // Engloba os dois modelos da Casillero das fotos
var casalGBranco = 8;  // Vinho Verde

// soma dos tipos de brancos aqui
var totalBranco = (casiDDBranco + casalGBranco);

// Safras dos vinhos brancos separados por marcas --------------------------------------------------
// Para o Casillero Branco (Total 3)
var casiDDBran2025 = 1;
var casiDDBran2024 = 2;

// Para o Casal Garcia Branco/Verde (Total 8)
var casalGBran2025 = 3;
var casalGBran2024 = 5;

// soma das safras de vinhos brancos aqui
var totBranSaf2025 = (casiDDBran2025 + casalGBran2025);
var totBranSaf2024 = (casiDDBran2024 + casalGBran2024);


// Vinhos rosés ---------------------------------------------------------------------------
var casiDDRose = 4;
var casalGRose = 5;

// soma dos tipos de rosés aqui
var totalRose = (casiDDRose + casalGRose);

// Safras dos vinhos rosés separados por marcas --------------------------------------------------
var casiDDRose2025 = 1;
var casiDDRose2024 = 1;
var casiDDRose2023 = 2;

var casalGRose2025 = 2;
var casalGRose2024 = 2;
var casalGRose2023 = 1;

// soma das safras de vinhos rosés aqui
var totRoseSaf2025 = (casiDDRose2025 + casalGRose2025);
var totRoseSaf2024 = (casiDDRose2024 + casalGRose2024);
var totRoseSaf2023 = (casiDDRose2023 + casalGRose2023);



// Lógica de busca interativa >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Lógica de busca interativa modificada
var tipo = prompt("Dentre as opções de vinhos: Tinto, Branco ou Rosé, qual é o tipo de vinho que você está procurando?")
           .toLowerCase()                       
           .normalize("NFD")                    
           .replace(/[\u0300-\u036f]/g, "");    

if (tipo === "tinto") {
    alert("Há " + totalTinto + " unidades deste tipo de vinho. Veja os detalhes detalhados no Console!");
    
    console.clear(); // Limpa o console para focar só no resultado atual
    console.log("--- RELATÓRIO DETALHADO: VINHOS TINTOS ---");
    console.log("Total Geral: " + totalTinto);
    console.log("------------------------------------------");
    console.log("ESTOQUE POR SAFRA:");
    console.log("Safra 2025: " + totTintSaf2025);
    console.log("Safra 2024: " + totTintSaf2024);
    console.log("Safra 2023: " + totTintSaf2023);
    console.log("------------------------------------------");
    console.log("DETALHES POR MARCA:");
    console.log("Casillero del Diablo - Safra 2025: " + casiDD2025);
    console.log("Casillero del Diablo - Safra 2024: " + casiDD2024);
    console.log("Casillero del Diablo - Safra 2023: " + casiDD2023);
    console.log("Pauliteiros - Safra 2025: " + paulit2025);
    console.log("Pauliteiros - Safra 2024: " + paulit2024);
    console.log("Pauliteiros - Safra 2023: " + paulit2023);
} 

else if (tipo === "branco") {
    alert("Há " + totalBranco + " unidades deste tipo de vinho. Veja os detalhes detalhados no Console!");
    
    console.clear();
    console.log("--- RELATÓRIO DETALHADO: VINHOS BRANCOS ---");
    console.log("Total Geral: " + totalBranco);
    console.log("-------------------------------------------");
    console.log("ESTOQUE POR SAFRA:");
    console.log("Safra 2025: " + totBranSaf2025);
    console.log("Safra 2024: " + totBranSaf2024);
    console.log("-------------------------------------------");
    console.log("DETALHES POR MARCA:");
    console.log("Casillero del Diablo - Safra 2025: " + casiDDBran2025);
    console.log("Casillero del Diablo - Safra 2024: " + casiDDBran2024);
    console.log("Casal Garcia - Safra 2025: " + casalGBran2025);
    console.log("Casal Garcia - Safra 2024: " + casalGBran2024);
} 

else if (tipo === "rose") {
    alert("Há " + totalRose + " unidades deste tipo de vinho. Veja os detalhes detalhados no Console!");
    
    console.clear();
    console.log("--- RELATÓRIO DETALHADO: VINHOS ROSÉS ---");
    console.log("Total Geral: " + totalRose);
    console.log("------------------------------------------");
    console.log("ESTOQUE POR SAFRA:");
    console.log("Safra 2025: " + totRoseSaf2025);
    console.log("Safra 2024: " + totRoseSaf2024);
    console.log("Safra 2023: " + totRoseSaf2023);
    console.log("------------------------------------------");
    console.log("DETALHES POR MARCA:");
    console.log("Casillero del Diablo - Safra 2025: " + casiDDRose2025);
    console.log("Casillero del Diablo - Safra 2024: " + casiDDRose2024);
    console.log("Casillero del Diablo - Safra 2023: " + casiDDRose2023);
    console.log("Casal Garcia - Safra 2025: " + casalGRose2025);
    console.log("Casal Garcia - Safra 2024: " + casalGRose2024);
    console.log("Casal Garcia - Safra 2023: " + casalGRose2023);
} 

else {
    alert("Tipo de vinho não encontrado. Tente Tinto, Branco ou Rosé.");
}
