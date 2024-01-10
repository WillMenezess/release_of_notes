function CalcularJo(){
    var Prova1Joana = document.getElementById("Prova1Joana").value
    var Prova2Joana = document.getElementById("Prova2Joana").value
    var ExameJoana = document.getElementById("ExameJoana").value

    var mediajo = (Number(Prova1Joana) + Number(Prova2Joana) + Number(ExameJoana)) / 3
    document.getElementById("ResultadoJoana").value = mediajo;
}
function CalcularMa(){
    var Prova1Maria = document.getElementById("Prova1Maria").value
    var Prova2Maria = document.getElementById("Prova2Maria").value
    var ExameMaria = document.getElementById("ExameMaria").value

    var mediama = (Number(Prova1Maria) + Number(Prova2Maria) + Number(ExameMaria)) / 3
    document.getElementById("ResultadoMaria").value = mediama;
}
function CalcularPe(){
    var Prova1Pedro = document.getElementById("Prova1Pedro").value
    var Prova2Pedro = document.getElementById("Prova2Pedro").value
    var ExamePedro = document.getElementById("ExamePedro").value

    var mediape = (Number(Prova1Pedro) + Number(Prova2Pedro) + Number(ExamePedro)) / 3
    document.getElementById("ResultadoPedro").value = mediape;
}