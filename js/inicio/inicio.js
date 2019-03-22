(function(){

function mapaFunc(){
	mapa.addEventListener("click", iniciar)
}
function iniciarFunc(){
	document.querySelector("#jugar").addEventListener("click", function(){
		peticion("pantalla.html", pantallaFunc)
	})
	console.log("cheeeeeeeeeeeeeeeeeeeeeeeeeeee")
}
function peticion(url, func){
	let ajax = new XMLHttpRequest()
	ajax.open("get", url)
	ajax.addEventListener("load", function(){
		document.body.innerHTML = ajax.response

		const mapa = document.querySelector("#mapa")
		func()
		
	})
	ajax.send()

}
peticion("mapa.html", mapaFunc)

function iniciar(e){
	peticion("ministros.html", iniciarFunc)
	console.log(e.target.dataset.link)
}
// global.maquetarMapas = maquetarMapas


function pantallaFunc(){
	document.querySelector("#poblacion p").innerHTML = estadisticas.totalPoblacion
	function ciclo(dato, cont){
		console.log(dato)
		let frag = document.createDocumentFragment()
		for(data in dato){
			let pe = document.createElement("p")
			pe.textContent = data + ": " + dato[data]
			frag.appendChild(pe)
		}
		document.querySelector(cont).appendChild(frag)
	}
	ciclo(estadisticas.ideologiaAtomos, "#ideologiaAtomos")
	ciclo(estadisticas.statusSocialAtomos, "#statusSocialAtomos")
	ciclo(estadisticas.cultura, "#cultura")
	// document.querySelector("#ideologiaAtomos p").innerHTML = estadisticas.ideologiaAtomos
	// document.querySelector("#statusSocialAtomos p").innerHTML = estadisticas.statusSocialAtomos
	// document.querySelector("#cultura p").innerHTML = estadisticas.cultura
}


})()