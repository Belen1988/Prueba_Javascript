$('document').ready(function(){
	
	$('#heart').click('.box_heart',function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		$(this).toggleClass('box__heart--red');

	});


	$('#heart').on("click",function(){
		counter=$("#heart").text();
		counter=parseInt(counter);
		counter = counter +1;
		$(this).html('<i>'+' '+counter+'</i>');


	})
	


	$('#trash').click('.box__trash', function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		$(this).parents('.box__profile').fadeOut(1000,function(){
			$(this).remove();
		});
	});


	$('#photo-upload').change(function(){
		var file = $(this).get(0).files[0];
		var reader = new FileReader();
		reader.onload= function(e){ 
			$('#avatar').attr('src', e.target.result);
		};

	reader.readAsDataURL(file);

	});

	$('#uploader').submit(function(e){
		e.preventDefault();

		var image = $('#avatar').attr('src');
		var message = $('#text__box').val();


		var post = `<div class="main col-lg-7 col-md-7" >
					<div class="box__profile">
						<h2 class="box__name">
							<img src="${image}" class="box__avatar">
							<br class="box__avatar ">Usuario:
						</h2>
						<p class="box__posteo col-md-12">${message}</p>
						<i class="fas fa-heart box__heart" id="heart">
							<span> 
							</span>
						</i>
						<i class="fas fa-trash-alt box__trash" id="trash">
							<span> Borrar
							</span>
						</i>
					</div>
				</div>`

		$('.container-fluid .box').prepend(post);

});

});