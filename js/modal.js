let cerrar = document.querySelectorAll(".exit_button")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalc = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
	e.preventDefault();
	modalc.style.opacity = "1";
	modalc.style.visibility = "visible";
	modal.classList.toggle("close-modal");
});

cerrar.addEventListener("click", function(e){
	e.preventDefault();
	modal.classList.toggle("close-modal");

	setTimeout(function(){
	modalc.style.opacity = "0";
	modalc.style.visibility = "hidden";

	},500)
})
window.addEventListener("click", function(e){
	e.preventDefault();
	console.log(e.target)
	if(e.target == modalc){
			modal.classList.toggle("close-modal");

	setTimeout(function(){
	modalc.style.opacity = "0";
	modalc.style.visibility = "hidden";

	},120)
	}
})