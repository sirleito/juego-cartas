(function(){
	function maquetadorCartas(items){

		let fragmento = document.createDocumentFragment()

		items.forEach(function(a){

			let div = creador("div", "contenedor")

			div.appendChild(creador("h2", "titulo-carta", a.titulo))
			div.appendChild(creador("p", "texto-carta", a.mensaje))
			div.appendChild(creador("p", "costo-carta", a.costo))

			div.dataset.ejemplo = a.data
			div.addEventListener("click", global.seleccionar)
			
			fragmento.appendChild(div)
		})
		global.mano.appendChild(fragmento)
	}

	function creador(tipo, clase, contenido, data){

		let elemento = document.createElement(tipo)

		clase && elemento.classList.add(clase)

		contenido && (elemento.textContent = contenido)

		return elemento
	}
	
	global.maquetadorCartas = maquetadorCartas

})()