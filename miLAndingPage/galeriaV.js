class Galeria {
    constructor(src,name,link,id,linkWsp){
      this.src = src;
      this.name = name;
       this.link = link ;
       this.id = id;
       this.linkWsp = linkWsp;
    }
}

const cuadro = new Galeria (
    '<img src="./Accesorios/memoria_ddr3_8gb_corsair.png" alt="">',
    'memoria%20ddr3%20corsair%208gb',
    'https://articulo.mercadolibre.com.ar/MLA-1102786269-memoria-ram-ddr3-8gb-1600mhz-corsair-vengeance-low-profile-_JM#position=20&search_layout=grid&type=item&tracking_id=66e880ed-2e3e-4c59-a776-9693a6f59fc4',
    'memoria8gb',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20memoria%20ddr3%20corsair%208gb`
);
const fuente = new Galeria(
    '<img src="./atx.jpg" alt="" srcset="">',
    'fuente%20atx',
    './index.html',
    'fuente500w',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20fuente%20atx`
)
const memoriaKingston = new Galeria(
    '<img src="./Accesorios/memoria_ddr3_8gb_kingston.png" alt="" srcset="">',
    'memoria%20kingston%208%20gb%20',
    'https://articulo.mercadolibre.com.ar/MLA-922793154-memoria-kingston-8gb-ddr3-1600-cl11-pc-kvr16n118wp-150v-_JM#position=17&search_layout=grid&type=item&tracking_id=a101a4cf-1e83-41a8-b5c3-7fb3e1410db1',
    'kington8',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20memoria%20kingston%208%20gb%20`
)
const fuente800 = new Galeria(
    '<img src="./Accesorios/fuenteCoolerMaster.png" alt="" srcset="">',
    'fuente%20800w%20cooler%20master%20',
    'https://www.mercadolibre.com.ar/fuente-de-alimentacion-para-pc-cooler-master-technology-elite-series-mpw-6001-acaan1-600w-black-100v240v/p/MLA11084787?pdp_filters=category:MLA1695%7CBRAND:8695625#searchVariation=MLA11084787&position=2&search_layout=grid&type=product&tracking_id=95d7c163-d4fc-408f-a849-fd59898eb727',
    'fuente800',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20fuente%20800w%20cooler%20master%20`
)
const wd3Elements = new Galeria(
    '<img src="./Accesorios/wdElementsExterno.png" alt="" srcset="">',
    'disco%20externo%201%20tera',
    'https://www.mercadolibre.com.ar/disco-duro-externo-western-digital-wd-elements-wdbuzg0010bbk-1tb-negro/p/MLA6326753?pdp_filters=category:MLA1672#searchVariation=MLA6326753&position=1&search_layout=stack&type=product&tracking_id=c4a81c00-5612-4497-b262-b921f45519df',
    'discoExterno',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20disco%20externo%201%20tera`    
    
) 
const grafica1gb = new Galeria(
    '<img src="./Accesorios/grafica_nvidia_1gb_ddr3_msi.png" alt="" srcset="">',
    'targeta%20grafica%20nvidia%201gb%20ddr3',
    'https://articulo.mercadolibre.com.ar/MLA-775615927-placa-de-video-msi-geforce-210-1gb-vram-ddr3-palermo-_JM#position=30&search_layout=grid&type=item&tracking_id=83850d7f-03c4-4f51-8b94-8953181eee2d',
    'geforce1gb',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20targeta%20grafica%20nvidia%201gb%20ddr3`    
    )
const vinchaRedragon = new Galeria(
    ' <img src="./Accesorios/auriculares_vincha_redragon.png" alt="" srcset="">',
    'auriculares%20Redragon%20Lamia%20RGB%20con%20luz%20rgb',
    'https://www.mercadolibre.com.ar/auriculares-gamer-redragon-lamia-rgb-negro-con-luz-rgb/p/MLA15558829?pdp_filters=category:MLA6049#searchVariation=MLA15558829&position=18&search_layout=stack&type=product&tracking_id=bde312d1-40d6-4648-8493-b6be1518ebc0',
    'auricularRedragon',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20auriculares%20Redragon%20Lamia%20RGB%20con%20luz%20rgb`    
   ) 
const motherAsus = new Galeria(
    '<img src="./Accesorios/Motherboard_Asus_Prime_A320m-k-Am4_Ddr4_A320_Hdmi_M2 (1).png" alt="" srcset="">',
    'Motherboard%20Asus%20Prime%20Am4%20Ddr4',
    'https://articulo.mercadolibre.com.ar/MLA-1112205731-motherboard-asus-prime-a320m-k-am4-ddr4-a320-hdmi-m2-_JM?searchVariation=173905089285#searchVariation=173905089285&position=49&search_layout=grid&type=item&tracking_id=35aca873-ca78-45dd-a131-38b3a2f34782',
    'motherAsusAm4',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20Motherboard%20Asus%20Prime%20Am4%20Ddr4`    
  
)
const tecladoRedragon = new Galeria(
    ' <img src="./Accesorios/tecladoRgbRedragon.png" alt="" srcset="">',
    'teclado%20Redragon%20Rgb',
    'https://www.mercadolibre.com.ar/teclado-gamer-redragon-shrapnel-k589rgb-qwerty-outemu-blue-lp-espanol-latinoamerica-color-negro-con-luz-rgb/p/MLA16930131?pdp_filters=price:2000-9500%7Ccategory:MLA1648#searchVariation=MLA16930131&position=23&search_layout=stack&type=product&tracking_id=483729c0-6fe6-4e3d-8498-6810668c236c',
    'tecladoRedragon',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20teclado%20Redragon%20Rgb`    
  
) 
const joystickLogitech = new Galeria(
    '<img src="./Accesorios/joiystickLogiTech.png" alt="" srcset="">',
    'joystick%20Logitech',
    'https://www.mercadolibre.com.ar/joystick-inalambrico-logitech-f710-plata-y-negro/p/MLA15108369?pdp_filters=price:2000-9500%7Ccategory:MLA1648#searchVariation=MLA15108369&position=9&search_layout=stack&type=product&tracking_id=655c50e6-9580-4f94-a73c-e4622f76c2fd',
    'joystickLogitech',
    `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20joystick%20Logitech`    
  )
  const memoria4gbSentey = new Galeria(
      '<img src="./Accesorios/Memoria_Ram_Pc_4gb_Ddr3_1600 _Mhz_Sentey_Crucial_Adata.png" alt="" srcset="">',
      'Memoria%20ram%pc%204gb%20Ddr3%201600Mhz',
       'https://articulo.mercadolibre.com.ar/MLA-606900163-memoria-ram-pc-4gb-ddr3-1600-mhz-sentey-crucial-adata-_JM#position=28&search_layout=grid&type=item&tracking_id=1be40ffb-509b-432a-af68-9b8ec592cdb8',
      'memoria4gbSentey',
       `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20Memoria%20ram%pc%204gb%20Ddr3%201600Mhz`
  ) 
  const fuente550wLNZ = new Galeria(
      '<img src="./Accesorios/fuente_pc_550wLNZ.png" alt="" srcset="">',
      'fuente%20ATX%20550wLNZ',
      'https://www.mercadolibre.com.ar/fuente-de-alimentacion-para-pc-lnz-px550-fs-550w-115v230v/p/MLA15799348?pdp_filters=seller_id:1534239#searchVariation=MLA15799348&position=1&search_layout=stack&type=product&tracking_id=ba0a8cca-d90c-4883-a170-6c6ca671b587',
      'fuente550wLNZ',
      `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20fuente%20ATX%20550wLNZ`
  )
  let items = document.getElementById('items');
  /*var mql = window.matchMedia('(max-width: 600px)');
  mql.addEventListener('change',function(e){
      console.log('el screen cambio');
      items.classList.replace('items','items_grid');
      e.preventDefault;
      
*/

const itemImg = (cuadro)=> { 
    
    let mensaje =`<div  id="${cuadro.id}">
    ${cuadro.src}
    </div>`;
    return mensaje;
};


document.addEventListener("DOMContentLoaded",function(e){
    e.preventDefault; 
    let marco = itemImg(cuadro);
    
    
    items.innerHTML = marco;
    items.innerHTML += itemImg(wd3Elements);
    items.innerHTML += itemImg(vinchaRedragon);
    items.innerHTML += itemImg(joystickLogitech);
    items.innerHTML += itemImg(memoria4gbSentey);
    items.innerHTML += itemImg(fuente550wLNZ);
   

    let memoria = document.getElementById('memoria8gb');
    let disco1Tera = document.getElementById(wd3Elements.id);
    let auricularRedragon = document.getElementById(vinchaRedragon.id);
    let joystickLogitec = document.getElementById(joystickLogitech.id);
    let memoria4gb1600Mhz = document.getElementById(memoria4gbSentey.id);
    let fuente550w = document.getElementById(fuente550wLNZ.id);
  
    
    md_link(memoria,cuadro);
    md_link(disco1Tera,wd3Elements);
    md_link(auricularRedragon,vinchaRedragon);
    md_link(joystickLogitec,joystickLogitech);
    md_link(memoria4gb1600Mhz,memoria4gbSentey);
    md_link(fuente550w,fuente550wLNZ);

    
    },true);

const md_link = (mem,o)=>{
    mem.addEventListener("click",function(){
        open(o.linkWsp);
      //  console.log(o.link)
    });
} 
//const rollers = document.querySelector('.rollers');
const rollers = document.getElementById('rollers');

const imgVec =[
    cuadro,fuente800,joystickLogitech,grafica1gb,motherAsus,vinchaRedragon,wd3Elements,
    memoria4gbSentey,fuente550wLNZ
]




const captureLink = function(link){
     let links = ``;
    links += link;
    return links;
}

let el = {
  mensaje :'',
}

function randomMsjImg(cuadro){
    let linkRueda = `http://wa.me/541134487550/?text=me%20interesa%20el%20articulo=%20`;
    let mensaje ='';
    for (let j =0 ; j<5 ; j++){
        let a = getRandomArbitrary(0,cuadro.length-1);
        let i = Math.round(a);
         mensaje +=`<div>
          ${cuadro[i].src}
          </div>`;
          let captureName = `${cuadro[i].name}`;
          linkRueda += `producto${j+1}=%20${captureName}`;
    }
  
    el[0]=captureLink(linkRueda);
    console.log(el[0]);
    return mensaje;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }




window.addEventListener('DOMContentLoaded',function(){
    rollers.innerHTML = randomMsjImg(imgVec);
    
})

let press = document.querySelector('.press');

press.addEventListener('click', function(){
    rollers.innerHTML = randomMsjImg(imgVec);
});

const sendRoll = document.querySelector('.envio');

sendRoll.addEventListener('click',function(){
    open(el[0]);
});

