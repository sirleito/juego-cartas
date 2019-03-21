let global = {
	mano : document.querySelector("#mano"),
	encuestasBoton : document.querySelector("#encuestas"),
	manoCartas : [],
	seleccionadas: [],
	encuestas: ["ideologia"],
	seleccionar: function(){
		let index = global.seleccionadas.indexOf(this)
		if (index > -1) {
			global.seleccionadas.splice(index)
			this.style.marginTop = "0px"
		}else{
			this.style.marginTop = "-50px"
			global.seleccionadas.push(this)	
		}
	},
	siguiente: function(){
		for( item of global.seleccionadas ){
			global.manoCartas[item.dataset.numero].funcion()
		}
		for( item of global.encuestas ){
			encuestas.tipo[item]()
		}
	},
	numeroAleatorio: ()=>{},
}