
    $(document).ready(function() {
		$(".list-person>div").click(function () {
			$('.menu-items-mb').addClass('active');
			$('.menu-items li:first-child h3 a').trigger('click');

		});
		$(".close-button").click(function () {
			$('.menu-items-mb').removeClass('active');
		});
		$(".menu-items-mb li").click(function () {
			var check_data = $(this).attr("data-id");
			$(".tab_check").addClass("hide");
			$(".menu-items-mb li").removeClass("active");
			$(this).addClass("active");
			console.log($(".menu-items li[data-id='"+ check_data +"']"));

			if($('.modal').hasClass("in")){
				var id = $('.modal.in').attr('id');
				$('#'+id).find(".menu-items li[data-id='"+ check_data +"'] h3 a").trigger('click');
			}
		});
		$(".skin__detail>div").click(function () {
			var check_url = $(this).attr("data-url");

			var add_video = "<iframe  src='https://www.youtube.com/embed/" + check_url + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
			$(this).parent().parent().find(".skin__video").html(add_video);
		});
		$('.menu-items li[data-id="3"] h3 a').click(function () {
			$('.first-video').trigger('click');
		});

	});
 	function openNav() {
    	$('#mySidebar').addClass('open');
    }
    function closeNav() {
        $('#mySidebar').removeClass('open');
    }