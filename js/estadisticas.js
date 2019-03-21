let estadisticas = {
	poblacion: [],
	totalPoblacion: 0,
	ideologiaAtomos: {
		extIzq: 0,
		izq: 0,
		centro: 0,
		der: 0,
		extDer: 0
	},
	statusSocialAtomos: {
		indigentes: 0,
		pobres: 0,
		media: 0,
		ricos: 0
	},
	cultura: {},
	porcentaje: (arg, arg2)=>{
		console.log(estadisticas[arg][arg2], estadisticas.totalPoblacion )
		return ((estadisticas[arg][arg2] * 100) / estadisticas.totalPoblacion).toFixed(2)
	},
	ideExtIzq: ()=>{ return ((estadisticas.ideologiaAtomos.extIzq * 100) / estadisticas.totalPoblacion).toFixed(2)},
	ideIzq: ()=>{ return ((estadisticas.ideologiaAtomos.izq * 100) / estadisticas.totalPoblacion).toFixed(2)},
	ideCentro: ()=>{ return ((estadisticas.ideologiaAtomos.centro * 100) / estadisticas.totalPoblacion).toFixed(2)},
	ideDer: ()=>{ return ((estadisticas.ideologiaAtomos.der * 100) / estadisticas.totalPoblacion).toFixed(2)},
	ideExtDer: ()=>{ return ((estadisticas.ideologiaAtomos.extDer * 100) / estadisticas.totalPoblacion).toFixed(2)},
}