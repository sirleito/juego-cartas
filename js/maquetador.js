(function(){
	function maquetadorCartas(items){

		let fragmento = document.createDocumentFragment()

		items.forEach(function(a, b){
			let div = creador("div", "contenedor")

			div.appendChild(creador("h2", "titulo-carta", a.titulo))
			div.appendChild(creador("p", "texto-carta", a.mensaje))
			div.appendChild(creador("p", "coste-carta", a.coste))

			div.dataset.numero = b
			div.name = a.name
			div.addEventListener("click", global.seleccionar)
			
			fragmento.appendChild(div)
		})
		global.mano.appendChild(fragmento)
	}

	function creador(tipo, clase, texto, contenido, attr, attrValue, data){

		let elemento = document.createElement(tipo)

		clase && elemento.classList.add(clase)

		texto && (elemento.textContent = texto)

		contenido && (elemento.innerHTML = contenido);

		(attr && attrValue) && (elemento.setAttribute(attr, attrValue))

		data && (elemento.dataset.dataCustom = data)

		return elemento
	}
	
	global.maquetadorCartas = maquetadorCartas
	global.creador = creador

	global.encuestasBoton.addEventListener("click", encuestas.encuestasFuncion)

})()