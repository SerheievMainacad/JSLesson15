// $(document).ready(function(){})
//return document.getElementById('btn')
$(function() {
	// var btn = $('#btn');
	//document.getElementById('btn').onclick = function(){}
	/*$('#btn').click(function() {
		alert('clicked btn1');
		$('body').append('<div id="newDiv"><p>helloFromNewDiv<p></div>');
	});
	//
	$('#btn2').click(function() {
		$('body').prepend('<div id="newDiv2"><p>helloFromNewDiv2<p></div>');
		$('#one')
			.find('p')
			.css({ 'text-transform': 'uppercase' })
			.attr('name', 'used')
			.addClass('modified');
	});*/

	/*// document.getElementById('btn').addEventListener('click', function(){})
	function clicking() {
		alert('btn2 clicked');
	}
	$('#btn2').on('click', clicking);
	//document.getElementById('btn').removeEventListener('click', function(){})
	$('#btn2').off('click', clicking);*/

	//css(backgroundColor, 'red') css('background-color', 'red')
	//css({'background-color': 'red', 'font-size': '10px'})
	/*	$('body').append('<div id="new"></div>');
	$('#new').css({ width: '100px', height: '100px', backgroundColor: 'red' });
	$('#new').hover(
		function() {
			$(this).css('background-color', 'blue');
			$(this).animate({ height: '200px' }, 1000, function() {
				$(this).animate({ width: '200px' }, 1000, function() {
					$(this).animate({ height: '+=200px' }, 10000);
				});
			});
		},
		function() {
			$(this).css('background-color', 'lightblue');
		}
	);

	//slide
	$('#slideUp').click(function() {
		$('#new').slideUp(1000, function() {
			console.log('slideUp finished');
		});
	});
	$('#slideDown').click(function() {
		$('#new').slideDown(2000);
	});
	$('#slideToggle').click(function() {
		$('#new').slideToggle();
	});

	//fade
	$('#fadeOut').click(function() {
		$('#new').fadeOut(1000, function() {
			console.log('fadeOut finished');
		});
	});
	$('#fadeIn').click(function() {
		$('#new').fadeIn(2000);
	});
	$('#fadeToggle').click(function() {
		$('#new').fadeToggle();
	});

	//show/hide
	$('#show').click(function() {
		$('#new').show(2000);
	});
	$('#hide').click(function() {
		$('#new').hide(2000);
	});*/

	//$(elem).height() == current height
	//$(elem).width() == current width

	$('a[href^="#"]').click(function() {
		$('html,body').animate({ scrollTop: $($.attr(this, 'href')).offset().top });
	});
});
