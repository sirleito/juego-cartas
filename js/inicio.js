(function() {
	function inicio(){
		let faltan = 10 - global.manoCartas.length
		let cuales = []
		for (var i = 0; i < faltan; i++) {
			cuales.push(global.obj[global.numeroAleatorio(0, 1)])
		}
		global.maquetadorCartas(cuales)
	}
	document.querySelector("#siguiente").addEventListener("click", global.siguiente)
	inicio()
})()