(function() {
	function inicio(){
		let faltan = 5 - global.manoCartas.length
		let cuales = []
		for (var i = 0; i < faltan; i++) {
			cuales.push(todasLasCartas[global.numeroAleatorio(0, 1)])
			
		}
		global.maquetadorCartas(cuales)
		global.manoCartas = cuales
	}
	document.querySelector("#siguiente").addEventListener("click", global.siguiente)
	inicio()
	console.log(estadisticas.poblacion[151])
})()