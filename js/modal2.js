let close = document.querySelectorAll(".exit_button2")[0];
let open = document.querySelectorAll(".cta2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalc2 = document.querySelectorAll(".modal2-container")[0];

open.addEventListener("click", function(e){
	e.preventDefault();
	modalc2.style.opacity = "1";
	modalc2.style.visibility = "visible";
	modal2.classList.toggle("close-modal");
});

close.addEventListener("click", function(e){
	e.preventDefault();
	modal2.classList.toggle("close-modal");

	setTimeout(function(){
	modalc2.style.opacity = "0";
	modalc2.style.visibility = "hidden";

	},500)
})
window.addEventListener("click", function(e){
	e.preventDefault();
	console.log(e.target)
	if(e.target == modalc){
			modal2.classList.toggle("close-modal");

	setTimeout(function(){
	modalc2.style.opacity = "0";
	modalc2.style.visibility = "hidden";

	},120)
	}
})