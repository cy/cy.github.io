$(document).ready(function() {  $('div.socialIcons').bt({
	  spikeLength: 5,
	  spikeGirth: 10,
	  cornerRadius: 5,
	  fill: '#f7fcfa',
		width: 130,
	  strokeWidth: 1,
	  strokeStyle: '#ccc',
	  shadow: true,
	  shadowOffsetX: 1,
	  shadowOffsetY: 2,
	  shadowBlur: 3,
	  shadowColor: '#888',
	  shadowOverlap: false,
	  noShadowOpts: {strokeStyle: '#E3FBFF', strokeWidth: 1},
	  positions: ['bottom'],
	  cssStyles: {color: '#142033', fontWeight: 'bold', fontSize: '9pt', textAlign: 'center'}
	});
	$('.top').addClass('hidden');
	$.waypoints.settings.scrollThrottle = 30;
	$('#waypoint').waypoint(function(event, direction) {
		$('.top').toggleClass('hidden', direction === "up");
	}, {
		offset: '100%'
	});
	$('#form-item').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var post_url = form.attr('action');
		var post_data = form.serialize();
		$('#loader', form).html('<img src="images/loader.gif" /> Please Wait...');
		$.ajax({
			type: 'POST',
			url: post_url, 
			data: post_data,
			success: function(msg) {
				$('#loader').html(msg).fadeIn();
			}
		});
	});
});
