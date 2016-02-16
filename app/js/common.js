$(function() {
	
	var owl = $("#owl-example");
	//Start owl-carousel
	$("#owl-example").owlCarousel({
		 // Most important owl features
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
 		pagination: false
 
	});

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });

	//кнопка меню
	$(".openmenu").click(function(){
		$(".nav").slideToggle(400);
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

});

