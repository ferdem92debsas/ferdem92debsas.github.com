const contenedor = document.querySelector(".flex-container");

function crearllave(nombre,modelo,precio){
    Img= "<img src='./src/llave.png' class=llave-img>"
    nombre= `<h2>${nombre}</h2>`;
    modelo= `<h3>${modelo}</h3>`;
    precio= `<p>precio:<b>${precio}</b></p>`;
    return [Img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
document.querySelector(".key-data").value= number;
}

let documentFragment = document.createDocumentFragment();

for(var i =1 ; i<= 20 ; i++){
    
    let modelorandom = Math.round(Math.random()*1000);
    let preciorandom = Math.round(Math.random()*10+30);
    let llave = crearllave(`llave:${i}`,`modelo: ${modelorandom}`,preciorandom );
    let div = document.createElement("DIV");
    div.tabIndex= i;
    div.addEventListener("click",()=>{changeHidden(modelorandom);
        alert(`llave ${modelorandom} seleccionada`)});
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);