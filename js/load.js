$(function() {
	//根据title触发
	function TitleDemo(){
		var	thisTitle = $('title').attr('data'),
			navli     = $('#fnav').find('li');

			console.log(parseInt(thisTitle));
			console.log(navli.length);
			navli.removeClass('active');
			navli.eq(parseInt(thisTitle)).addClass('active');
	};//TitleDemo
	TitleDemo();
})