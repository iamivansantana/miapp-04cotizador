//obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year
}

//Calcula el total a pagar segun la marca 
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'europeo':
            incremento=1.30;
            break;
        case 'americano':
            incremento=1.15;
            break;
        case 'asiatico':
            incremento=1.05;
            break;
        default:
        break;
    }return incremento;
}

//Calcula el tipo del seguro
export function calculaPlan(plan){
    return (plan==='basico')? 1.20 : 1.50;
}

//Muestra la primer letra Mayuscula
export function primeraMayuscula(texto){
    const contenedor=texto.charAt(0);
     return contenedor.toUpperCase()+texto.slice(1);
}