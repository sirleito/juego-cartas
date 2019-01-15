let global = {
	mano : document.querySelector("#mano"),
	manoCartas : [],
	seleccionadas: [],
	seleccionar: function(){
		let index = global.seleccionadas.indexOf(this)
		console.log(index, this.dataset)
		if (index > -1) {
			global.seleccionadas.splice(index)
		}else{
			global.seleccionadas.push(this)	
		}
	},
	siguiente: function(){
		console.log(global.seleccionadas)
	},
	obj : [
	{
		titulo: "Construir diez escuelas",
		coste: 100,
		consecuencia: {
			educación:{
				consecuencia: 10,
				tardanza: 6,
				diseminacion: false
			},
			popularidad:{
				consecuencia: 5,
				tardanza: 1,
				diseminacion: false
			}
		},
		data: "ejemplo",
		mensaje: "Serán construidas a lo largo del país, y con el modelo clásico"
	},
	{
		titulo: "Construir un hospital",
		coste: 40,
		consecuencia: {
			salud:{
				consecuencia: 10,
				tardanza: 12,
				diseminacion: true
			},
			popularidad:{
				consecuencia:  10,
				tardanza: 1,
				diseminacion: false
			}
		},
		data: " otro ejemplo",
		mensaje: "Será construido en un lugar estratégico, y con el modelo clásico"
	}
]

}