
    $(document).ready(function() {
		$(".list-person>div").click(function () {
			$('.menu-items-mb').addClass('active');
			
			 setTimeout(function(){ 
				const id = $('.modal.in').attr('id');			
				$('#'+id).find('.menu-items li:first-child h3 a').trigger('click');
				const size = $('#'+id).find(".menu-items li").length;
				if(size == 4){
					$('.menu-items-mb li:nth-child(2)').hide();
				}else{
					$('.menu-items-mb li:nth-child(2)').show();
				}
			 },300);
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
			const check_url = $(this).attr("data-url");
			$('.first_skin').removeClass('hidden');
			$('.click_skin').addClass('hidden');

			$(this).find('.first_skin').addClass('hidden');
			$(this).find('.click_skin').removeClass('hidden');
			const check_content = $(this).attr("data-content");
			const id = $('.modal.in').attr('id');

			const add_video = "<iframe  src='https://www.youtube.com/embed/" + check_url + "?autoplay=1&showinfo=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
			$('#'+id).find(".skin__video").html(add_video);
			$('#'+id).find(".skin__content p").html(check_content);
		});
		$('.menu-items li[data-id="3"] h3').click(function () {
			const id = $('.modal.in').attr('id');

			const id_video_first = $('#'+id).find('.first-video').attr("data-url");
			const check_content =  $('#'+id).find('.first-video').attr("data-content");
			const add_video = "<iframe  src='https://www.youtube.com/embed/" + id_video_first + "?autoplay=0&showinfo=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
			$('#'+id).find(".skin__video").html(add_video);	
			$('#'+id).find(".skin__content p").html(check_content);
		});
		$('.menu-items li[data-id!="3"] h3 a').click(function () {
			const id = $('.modal.in').attr('id');
			$('#'+id).find(".skin__video").empty();
		});	

		$('.main-items a').mouseenter(function() {
		    var img = $(this).attr('data-image');
		    $('.center-banner').html('<img class="img-responsive"  src="'+ img +'" ">');
		  })
		  .mouseleave(function() {
		    var img = $('.center-banner').attr('data-image');
		    $('.center-banner').html('<img class="img-responsive"  src="'+ img +'" ">');
		  });
	});
 	function openNav() {
    	$('#mySidebar').addClass('open');
    }
    function closeNav() {
        $('#mySidebar').removeClass('open');
    }