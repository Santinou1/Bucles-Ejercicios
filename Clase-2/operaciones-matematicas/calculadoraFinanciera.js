export function calculadoraInteres(monto,tasa,periodo,tipo){
    let resultado

    if (tipo==="simple"){
        resultado = monto + (monto*(tasa/100)*periodo)
    } else{
        resultado= monto * (1+(tasa/100) * periodo)
    }
    return resultado.toFixed(2)
}

console.log(calculadoraInteres(150,20,30,"simple"))