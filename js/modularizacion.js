(function(){
	console.time()
	
	function Atomos(cantidad, ideologia, status, cultura){
		this.cantidad = cantidad
		this.ideologia = ideologia
		this.status = status
		this.cultura = cultura
		this.cuantos = function(){
			console.log(this.cantidad, this.ideologia)
		}
	}

	estadisticas.totalPoblacion = paises.pais3.poblacion
	
	let atomosTotales = 0
	let culturaTotal= {
		nacionalismo: 0,
		individualismo: 0,
		autoritarismo: 0,
		violencia: 0,
		conservadurismo: 0
	}
	while( paises.pais3.poblacion > 0){
		atomosTotales++
		let numAtomos = global.numeroAleatorio(1000, 10000)
		let num = global.numeroAleatorio(0, 100)
		paises.pais3.poblacion -= numAtomos
		let ideologia
		let status

		let cultura = {}

		for(item in paises.pais3.cultura){
			culturaTotal[item] += paises.pais3.cultura[item]
			let culturaAleatoria = global.numeroAleatorio(paises.pais3.cultura[item] - 15 , paises.pais3.cultura[item] + 15)
			cultura[item] = culturaAleatoria
		}

		switch(true){
			case (num <= paises.pais3.statusSocial.indigentes):
			estadisticas.statusSocialAtomos.indigentes += numAtomos
			status = "indigentes"
			break
			case (num <= paises.pais3.statusSocial.pobres):
			estadisticas.statusSocialAtomos.pobres += numAtomos
			status = "pobres"
			break
			case (num <= paises.pais3.statusSocial.media):
			estadisticas.statusSocialAtomos.media += numAtomos
			status = "media"
			break
			case (num > paises.pais3.statusSocial.media):
			estadisticas.statusSocialAtomos.ricos += numAtomos
			status = "ricos"
			break
		}
		switch(true){
			case (num <= paises.pais3.ideologiaStandard.extIzq):
			estadisticas.ideologiaAtomos.extIzq += numAtomos
			ideologia = "extIzq"
			break
			case (num <= paises.pais3.ideologiaStandard.izq):
			estadisticas.ideologiaAtomos.izq += numAtomos
			ideologia = "izq"
			break
			case (num <= paises.pais3.ideologiaStandard.centro):
			estadisticas.ideologiaAtomos.centro += numAtomos
			ideologia = "centro"
			break
			case (num <= paises.pais3.ideologiaStandard.der):
			estadisticas.ideologiaAtomos.der += numAtomos
			ideologia = "der"
			break
			case (num <= paises.pais3.ideologiaStandard.extDer):
			estadisticas.ideologiaAtomos.extDer += numAtomos
			ideologia = "extDer"
			break
		}

		estadisticas.poblacion.push(new Atomos(numAtomos, ideologia, status, cultura))

	}

	for(item in culturaTotal){
		culturaTotal[item] = culturaTotal[item] / atomosTotales
	}
	estadisticas.cultura = culturaTotal
	console.log(estadisticas.cultura, atomosTotales)
	// console.log(estadisticas.ideologiaAtomos)
	// console.log(estadisticas.statusSocialAtomos)
	// console.log(estadisticas.porcentaje("ideologiaAtomos","izq"))
	// console.log(estadisticas.poblacion)
	console.timeEnd()
	// console.log(new Atomos(50, "izq"), global.numeroAleatorio(10, 1000))
	// estadisticas.poblacion[0].cuantos()
	// console.log(estadisticas.ideologiaAtomos, estadisticas.totalPoblacion)
	// console.log(estadisticas.ideExtIzq(), estadisticas.ideIzq(), estadisticas.ideCentro(), estadisticas.ideDer(), estadisticas.ideExtDer(),)
	// encuestas.tipo.ideologia()
	// console.log(statusSocial)

})()