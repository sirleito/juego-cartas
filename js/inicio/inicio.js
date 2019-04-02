(function(){

peticion("mapa.html", mapaFunc)

function mapaFunc(){
	mapa.addEventListener("click", iniciar)
}

function iniciar(e){
	peticion("ministros.html", ministrosFunc)
	console.log(e.target.dataset.link)
}
// global.maquetarMapas = maquetarMapas

function ministrosFunc(){
	const cartaSigno = global.creador("img", null, null, "src", "img/perfil.png")
	console.log(cartaSigno)
	global.ministrosElegidos = {
		jefeGabinete: cartaSigno,
		minEconomia: cartaSigno,
		minEducacion: cartaSigno,
		minSeguridad: cartaSigno,
		minDefensa: cartaSigno,
		minSalud: cartaSigno,
		minMedioAmbiente: cartaSigno
	}
	global.ministrosElegidosElementos = {
		jefeGabinete: document.querySelector("#jefeGabinete"),
		minEconomia: document.querySelector("#minEconomia"),
		minEducacion: document.querySelector("#minEducacion"),
		minSeguridad: document.querySelector("#minSeguridad"),
		minDefensa: document.querySelector("#minDefensa"),
		minSalud: document.querySelector("#minSalud"),
		minMedioAmbiente: document.querySelector("#minMedioAmbiente")
	}
	document.querySelector("#jugar").addEventListener("click", function(){
		peticion("pantalla.html", pantallaFunc)
	})

	document.querySelectorAll(".cartaMinistros").forEach(function(a){
		a.addEventListener("click", seleccionMinistros)
	})

}

function actualizarElegidos(elegido){
	console.log(global.ministrosElegidos[elegido])
	global.ministrosElegidosElementos[elegido].innerHTML = ""
	global.ministrosElegidosElementos[elegido].appendChild(document.importNode(global.ministrosElegidos[elegido], true))
}

function seleccionMinistros(){
	let identificador = this.parentElement.id
	if (global.ministrosElegidos[identificador] != this) {
		console.log("lalala")
		global.ministrosElegidos[identificador] = this
		actualizarElegidos(identificador)
	}
	if(!this.classList.contains("cartaSeleccionada")){
		console.log(global.ministrosElegidosElementos[identificador])
		if(document.querySelector(`#${identificador} .cartaSeleccionada`)){
			document.querySelector(`#${identificador} .cartaSeleccionada`).classList.remove("cartaSeleccionada")
		}
		this.classList.add("cartaSeleccionada")
		// global.ministrosElegidosElementos[identificador].classList.remove("cartaSeleccionada")
	}
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



function pantallaFunc(){
	document.querySelector("#poblacion p").innerHTML = estadisticas.totalPoblacion
	function ciclo(dato, cont){
		let frag = document.createDocumentFragment()
		for(data in dato){
			let pe = document.createElement("p")
			pe.textContent = data + ": " + estadisticas.porcentajeFunc(dato[data], estadisticas.totalPoblacion)
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