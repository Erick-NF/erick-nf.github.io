//paso 1 obtener referencia del documento
const $grafica = document.getElementById("grafica");

//asignar etiquetas al eje X
const etiquetas=["Enero","Febrero","Marzo","Abril"];

//asignar conjunto de datos

const Ventas2022 ={
    label:"Ventas 2022",
    data:[5.3,3.4,8.6,5.7], //misma longitud que en etiquetas
    backgroundColor: 'rgba(54,162,235,.5)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 1
};

const Ventas2021 ={
    label:"Ventas 2021",
    data:[4500,4000,6000,2102], //misma longitud que en etiquetas
    backgroundColor: 'rgba(255,162,135,1)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 1
};

const Ventas2020 ={
    label:"Ventas 2020",
    data:[4000,2000,5000,3102], //misma longitud que en etiquetas
    backgroundColor: 'rgba(255,162,0,1)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 1
};



new Chart ($grafica,{
    type:'bar',
    data:{
        labels:etiquetas,
        datasets:[
            Ventas2022
        ]
    }
})