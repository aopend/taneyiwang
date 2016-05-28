$(function() {
	var Done_list = $('#Done_list');
	var Dtow_list = $('#Dtow_list');
	var quna = 'http://101.200.161.146/czly/';
	$('footer').load('footer.html');


	var cc=1;

	// 首页 banner
	function ajaxBanner(index){
		$.ajax({
				url:'http://101.200.161.146/czly/banner/getBannerList?type='+index,
				type:'GET',
				dataType:'json',
				success: function(data){
					$('#indexbanner').empty()
					// console.log(data.data);
					var img = '<img src="'+ quna + data.data[0].path+'"/>'
					$('#indexbanner').append(img);
				}
			});
	}
	ajaxBanner(0);
	// 首页 banner end


	//搜索
	function searchForm(){
		var form  =  $('#searchForm');
		var input =  form.find('input');
		var span  =  form.find('span');

		span.click(function(){
			var text = input.val();
			// console.log(text);
			 window.location.href="newslest.html?searchName="+ text; 

		});

	}
	searchForm();



	function Hnav(){
		var Hnav = $('#Hnav');
		

		Hnav.on('click','li',function(){
			var index = $(this).attr('data');
			$(this).addClass('active').siblings().removeClass('active');
			// console.log('index:'+index);
			ajaxBanner(index);
			ajaxlist(index);
			gundongtiao($('body'));

		})
	}
	Hnav();


	//ajax list

	function ajaxlist(index){

		$.ajax({
				url:'http://101.200.161.146/czly/sugarMedical/getSugarMedicalCaseList?caseType='+index,
				type:'POST',
				dataType:'json',
				success: function(data){
					// console.log(data.data);
					$('#Done_list').empty();
					$('#Dtow_list').empty();
					for (var i = 0; i < data.data.length; i++) {
						 var Done_listH = $('#Done_list').height();
						 var Dtow_listH = $('#Dtow_list').height();
						 // console.log('Done_list:'+Done_listH+'px Dtow_list:'+Dtow_listH+'px');
						 var cn = '<li>'+
										'<a href="'+data.data[i].url+'">'+
											'<img src="'+ quna + data.data[i].icon+'">'+
											'<p>'+data.data[i].title+'</p>'+
										'</a>'+
										'<div class="time">'+
											'<span class="left">阅读 '+ data.data[i].readNum+'</span>'+
											'<span class="rig">'+ data.data[i].creationDate +'</span>'+
											'<div class="clear"></div>'+
										'</div>'+
									'</li>';
						if (Done_listH <= Dtow_listH) {
							$('#Done_list').append(cn);
						}else{
							$('#Dtow_list').append(cn);
						}

					}
				}
			})
	}
	ajaxlist(0);


	function gundongtiao($obj) {
			var $ScrollCon = $obj,
				conHeight  = 0;

			$ScrollCon.animate({
				'scrollTop':conHeight
			},0);

			//$ScrollCon[0].scrollTo(0,conHeight);

			//console.log(conHeight);


	};






     
})