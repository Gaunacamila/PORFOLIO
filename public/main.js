const grid = new Muuri('.grid',{
    layout: {
        rounding: false
    }

});
//con esta forma uso murri, que se conecta con la libreria
//layout son como vamos a administrar las imagenes

window.addEventListener ('load', () => {
    grid.refreshItems().layout();
    //las imagenes se adapten cuando modificamos el tamañp de la pestaña
    document.getElementById('grid').classList.add('imagenes-cargadas');






    //quiero acceder a todos los enlaces con LISTERNER (ve al id categorias y me traigas todos los a)
    const enlaces = document.querySelectorAll('#categorias a');

    enlaces.forEach((elemento) => {
    elemento.addEventListener('click',(evento)=>{
        evento.preventDefault();
        //para que no nos aparesca el signo de preguntas 
        enlaces.forEach((enlace) => enlace.classList.remove('activo'));   
         evento.target.classList.add('activo');
        //conneste conocemos el enlace 

        //ahora estoy seleccionando click y aparecen las categorias
        const categoria = evento.target.innerHTML;
        if (categoria === ' TODOS '){
            grid.filter('[data-categoria]')
        }else{
            grid.filter(`[data-categoria ="${categoria}"]`);
        }
      // condicional para que aparescan todos , sino  grid.filter(`[data-categoria ="${categoria}"]`);
         
    })
});

// AHORA QUIERO AGREGAR EL LISTENER PERO PARA BARRA DE BUSQUEDA 
});

//whitesmoke

/*const pagina ='formulario.html';
function Redireccionar()
{
   location.href=pagina 
}
setTimeout ("Redireccionar()",500);*/