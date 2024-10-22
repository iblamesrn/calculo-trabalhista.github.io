var valorHora = parseFloat(document.getElementById('valorHora').value);
var QTEhora = parseFloat(document.getElementById('QTEhora').value);
var outrasDEdu = parseFloat(document.getElementById('outrasDEdu').value);

function calcular() {
    if (QTEhora === 0) {
        window.location.reload();
        return;
    }

    var slBruto = valorHora * QTEhora;
    var desINSS = 0;

    if (slBruto <= 1320) {
        desINSS = slBruto * 0.075;
    } else if (slBruto <= 2571.29) {
        desINSS = (1320 * 0.075) + ((slBruto - 1320) * 0.09);
    } else if (slBruto <= 3856.94) {
        desINSS = (1320 * 0.075) + ((2571.29 - 1320) * 0.09) + ((slBruto - 2571.29) * 0.12);
    } else if (slBruto <= 7507.49) {
        desINSS = (1320 * 0.075) + ((2571.29 - 1320) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((slBruto - 3856.94) * 0.14);
    } else {
        desINSS = (1320 * 0.075) + ((2571.29 - 1320) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((7507.49 - 3856.94) * 0.14);
    }

    var desIRPF = 0;

    if (slBruto <= 2112) {
        desIRPF = 0;
    } else if (slBruto <= 2826.65) {
        desIRPF = slBruto * 0.075;
    } else if (slBruto <= 3751.06) {
        desIRPF = slBruto * 0.15;
    } else if (slBruto <= 4664.68) {
        desIRPF = slBruto * 0.225;
    } else {
        desIRPF = slBruto * 0.275;
    }

    var descVT = 0;
    var sim = document.getElementById('sim');
    
    if (sim.checked) {
        descVT = slBruto * 0.06;
    }

    var descontos = desINSS + desIRPF + descVT + outrasDEdu;
    var slLiquido = slBruto - descontos;

    document.getElementById('slBrutoR').textContent = slBruto.toFixed(2);
    document.getElementById('descINSSR').textContent = desINSS.toFixed(2);
    document.getElementById('descIRPFR').textContent = desIRPF.toFixed(2);
    document.getElementById('descVTR').textContent = descVT.toFixed(2);
    document.getElementById('outrasDedu').textContent = outrasDEdu.toFixed(2);
    document.getElementById('slLIquidoR').textContent = slLiquido.toFixed(2);
}
