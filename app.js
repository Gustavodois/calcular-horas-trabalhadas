function fnCalcular(){
    let valorHora = document.getElementById("valorHora").value
    let horasTrabalhadas = document.getElementById("horasTrabalhadas").value

    if(horasTrabalhadas<= 44){
        let totalNormal = valorHora * horasTrabalhadas
        document.getElementById("resultado").value = "R$" + totalNormal
    }
    else if(horasTrabalhadas > 44){
        let horasExtras =  valorHora * (horasTrabalhadas - 44) * 1.5
        let totalExtras = (valorHora * 44) + horasExtras
        document.getElementById("resultado").value =  "R$" + totalExtras
    }
}