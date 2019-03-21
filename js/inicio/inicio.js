(function(){

function mapaFunc(){
	mapa.addEventListener("click", iniciar)
}
function iniciarFunc(){
	console.log("hola")
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

})()