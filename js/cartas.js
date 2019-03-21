// window.cartas = {
// 	escuelas10 : function(){
// 		console.log("está funcionando")
// 	}
// }

global.cartas = [
	{
		titulo: "Construir diez escuelas",
		name: "escuelas10",
		coste: 100,
		funcion: function(){
			console.log("está funcionando")
		},
		consecuencia: {
			educación:{
				consecuencia: 10
			},
			politica: {
				extIzq: 10,
				izq: 10,
				centro: 10,
				der: 10,
				extDer: 10
			},
			cultural: {
				extIzq: ["extIzq", "izq", 2],
				izq: ["izq", "centro", 1],
				centro: ["centro", "centro", 0],
				der: ["der", "centro", 1],
				extDer: ["extDer", "der", 2]
			},
			tardanza: {
				educacion: [1,2,3,4,5,6,7,8,9,10],
				politica: {
					extIzq: [1,2,3,4,5,6,7,8,9,10],
					izq: [1,2,3,4,5,6,7,8,9,10],
					centro: [1,2,3,4,5,6,7,8,9,10],
					der: [1,2,3,4,5,6,7,8,9,10],
					extDer: [1,2,3,4,5,6,7,8,9,10]
					},
				cultural: {
					extIzq: [1,10],
					izq: [10],
					centro: [0],
					der: [1],
					extDer: [1,10]
					}
			}
		},
		data: "ejemplo",
		mensaje: "Serán construidas a lo largo del país, y con el modelo clásico"
	},
	{
		titulo: "Construir un Hospital",
		name: "escuelas10",
		coste: 80,
		funcion: function(){
			console.log("está funcionando")
		},
		consecuencia: {
			salud:{
				consecuencia: 10
			},
			politica: {
				extIzq: 10,
				izq: 10,
				centro: 10,
				der: 10,
				extDer: 10
			},
			cultural: {
				extIzq: ["extIzq", "izq", 2],
				izq: ["izq", "centro", 1],
				centro: ["centro", "centro", 0],
				der: ["der", "centro", 1],
				extDer: ["extDer", "der", 2]
			},
			tardanza: {
				educacion: [1,2,3,4,5,6,7,8,9,10],
				politica: {
					extIzq: [1,2,3,4,5,6,7,8,9,10],
					izq: [1,2,3,4,5,6,7,8,9,10],
					centro: [1,2,3,4,5,6,7,8,9,10],
					der: [1,2,3,4,5,6,7,8,9,10],
					extDer: [1,2,3,4,5,6,7,8,9,10]
				},
				cultural: {
					extIzq: [1,10],
					izq: [10],
					centro: [0],
					der: [1],
					extDer: [1,10]
				}
			}
		},
		data: "ejemplo",
		mensaje: "Será construido estratégicamente, y con el modelo clásico"
	}
	]