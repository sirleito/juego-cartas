let encuestas = {
	encuestasFuncion: ()=>{
		console.log("holis")
	},
	generar:()=>{

	},
	tipo: {
		ideologia:()=>{
			return encuestas.parrafo([estadisticas.ideExtIzq(), estadisticas.ideIzq(), estadisticas.ideCentro(), estadisticas.ideDer(), estadisticas.ideExtDer()])
		},
		clases:()=>{},
		imagen:()=>{},
		intencionDeVoto:()=>{}
	},
	parrafo:(cont)=>{
		let fragmento = document.createDocumentFragment()
		cont.forEach((a)=> {
			let el = document.createElement("p")
			el.textContent = a
			console.log(el)
			fragmento.appendChild(el)
		})
		return fragmento
	}
}