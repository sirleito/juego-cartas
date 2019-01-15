(function(){
	function numeroAleatorio(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	global.numeroAleatorio = numeroAleatorio
})()