//alert (" la web side is yourself");

const select_mem = document.getElementById('selectMemory');
const select_mother = document.getElementById('selectMicro');
const select_micro = document.getElementById('selectProcesador');
const select_disk = document.getElementById('selectDisco');
const select_atx = document.getElementById('selectFuente'); 
const confirm = document.querySelector('.confirmPc');


confirm.addEventListener("click",function(){
    
    let text_mother =select_mother.value;
    
    
    let text_mem = select_mem.value ; 
    let text_micro = select_mother.value;
   
    let inputText = document.querySelector(".textConfirm");
    
    
    let mother =  select_mother.value; 
    let procesador =  select_micro.value;
    
    let disco =  select_disk.value;
    let memoria = select_mem.value;
    
    let atx =  select_atx.value;


    let mensaje =    solicitudDeArmado(mother,procesador,disco,memoria,atx);
    console.log(mensaje);

    inputText.innerHTML = mother;
    inputText.innerHTML +=`<br>${procesador}` ;
    
    inputText.innerHTML +=`<br>${disco}` ;
    inputText.innerHTML +=`<br>${memoria}` ;
    inputText.innerHTML +=`<br> ${atx}<br>` ;
    inputText.innerHTML+= mensaje;
   
    inputText.classList.add('green_mode');
    inputText.classList.add('.green_mode a');

   //let envio = prompt('enviar solicitud ', 'si');

   /*if (envio ==='si'){
       window.onload('http://www.youtube.com' );
   }*/
   console.log (envio);

});



const solicitudDeArmado = function(mother, procesador,disco,memoria,atx){
    
    let mensaje = `<a href="http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=Armado%20de%20pc-->con_las_siguientes_caracteristicas:_mother:_${mother};micro:_${procesador};memoriaRam:_${memoria};disco_rigido:_${disco};potencia_atx:_${atx}"target ="_blank"><h2 class="pulsador"> enviar </h2></a>`;
 
    return mensaje;
}


const precioFinal = function (costoA, costoB, costoC){
     let jump ;

     jump= costoA+costoB+costoC;
     return jump;
     }
const calcularMemoria = function (){
            
             let costo ;
             let value = select_mem.value;

            if (value =="ddr2"){
                costo = 3000;
                return costo; 
            }else if (value == "ddr3"){
                costo = 5000;
                return costo ;
            } else if ( value == "ddr4"){
                costo = 12000;
                return costo;
            }
            return costo ; 
    }
     


    

