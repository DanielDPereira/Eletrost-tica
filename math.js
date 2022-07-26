const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    //Pegar os inputs - início

    const Q = document.querySelector("#Q");
    const q = document.querySelector("#q");
    const d = document.querySelector("#d");

    //Pegar os inputs - fim

    //Transformar os inputs em valores - início
    
    const valueQ = Q.value;
    const valueq = q.value;
    const valued = d.value;

    //Transformar os inputs em valores - fim

    //Código da calculadora - início

    //Constante do vácuo
    const K = 9*10**9;

    V = (K * valueQ)/valued;
    E = (K * Math.abs(valueQ))/Math.pow(valued, 2);
    Epe = (K * valueQ * valueq)/valued;
    Fele = (K * Math.abs(valueQ) * Math.abs(valueq))/Math.pow(valued, 2);

    //Código da calculadora - fim  

    //print dos resultados no console - início

    console.log(V);
    console.log(E);
    console.log(Epe);
    console.log(Fele);

    //print dos resultados no console - fim

    //Retornando valores no HTML - início

    document.getElementById("Resultado V").innerHTML ="V = "+V+" V";
    document.getElementById("Resultado E").innerHTML ="E = "+E+" N/C";
    document.getElementById("Resultado Epe").innerHTML ="Epe = "+Epe+" J";
    document.getElementById("Resultado Fele").innerHTML ="Fele = "+Fele+" N";

    //Retornando valores no HTML - fim


});
