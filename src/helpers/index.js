const formaterDinero = (valor)=>{
    const formater = new Intl.NumberFormat('en-US',{
        style : 'currency',
        currency: 'USD',
    })
    return formater.format(valor)
};

const calcular = (cantidad, plazo)=>{
    let total;
    if(cantidad<5000){
        total = cantidad * 1.5
    }
    else if(cantidad >5000 && cantidad <10000){
        total = cantidad * 1.4
    }
    else if (cantidad >10000 && cantidad <15000){
        total = cantidad * 1.3
    }
    else {
        total = cantidad * 1.1
    };
    //plazo
    if(plazo==6){
        total*= 1.1
    }
    else if(plazo==12){
        total*= 1.3
    }
    else{
        total*= 1.5
    };
    return total;
}
export{
    formaterDinero,
    calcular
}