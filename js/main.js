$(document).ready(function () {

    $("#owl-example").owlCarousel({
        navigation: true,
        navigationText: ["prev", "next"],
    });

    $("a.down").click(function () {
        $(this).next('ul').slideToggle();
        $(this).children().toggleClass("fa-toggle-up");
    });

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
    });
    //PICTURE VIEW
    $('.displayView .fa-th-list').click(function(){
        $('.twelve-p').show();
        $('.twelve').hide();
    });
     $('.displayView .fa-th').click(function(){
        $('.twelve-p').hide();
        $('.twelve').show();
    });
    //PRODUCT DETAILS SLIDER
    $("aside.preview nav").show();
	var previewImg = $("img#main");
	$("a:first").addClass("active");
	$("nav a img").click(function(){
		var link = $(this).parent();	
		var linkHref = link.attr("href");			
		var linkAlt = link.attr("alt");			
		if( $(link).hasClass("active") == false)
		{
			$("a").removeClass("active");
			link.addClass("active");											
			$(previewImg).animate({
				opacity: 0.8,
			}, 300, function() {
				previewImg.attr("src", linkHref);
				previewImg.attr("alt", linkAlt);				
				$(this).animate({
					opacity: 1,
					}, 300
				);							
			});			
		}
		return false;
	});
	$("input").click(function(){
		$("p.more").fadeIn("slow");
	});
        //SHOW HIDE DISPLAY VIEW
        $('span.fa-cog').click(function(){
           $('.filtersSelect').toggle();
        });
//SHOPING CART ONCLICK
$(".shopingCart").click(function(){
        $(".table").toggle();
    });

});