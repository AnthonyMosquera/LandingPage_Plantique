jQuery(document).ready(function(){
	var enlace = jQuery(".hambur").attr("href");

	jQuery(".hambur").click(function(e){
		e.preventDefault();
		abrirmenu();
	});


//.boton.boton-blanco
	jQuery("header .container nav a").click(function(){
		var enlace = jQuery(this).attr("href");
		abrirmenu();
		jQuery("html,body").animate({
			"scrollTop" : jQuery(enlace).position().top
		},500,function(){
			
		})
	});

	// jQuery(window).scroll(function(){
	// 	if(jQuery(window).scrollTop() > 100)
	// 	{
	// 		jQuery("header").addClass("negro");
	// 	}else{
	// 		jQuery("header").removeClass("negro");
	// 	}

	// })

	/*jQuery(".hambur").attr("href","http://hola.com");

	jQuery(".hambur").addClass("open");
	jQuery(".hambur").removeClass("hambur");

	if(jQuery(".hambur").hasClass("open") == true)
	{
		console.log("holaa");
	}else{
		console.log("adios");
	}*/

});


function abrirmenu()
{
	jQuery("header").toggleClass("open");
	jQuery("header .container .hambur i").toggleClass("fa-times");
	jQuery("header .container nav").toggleClass("open");
}