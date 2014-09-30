$(document).ready(function(){
     init(); 
});
			function init(){
				runProject();
			}
			
			function runApp(){
				
				
				var li, $li, img, $img, $href,featured;
				$('.featured').hide();
				for(var i=0;i<galleryInfo.length;i++)
				{
					
					$li=$(document.createElement('li'));
					$img=$(document.createElement('img'));
					$li.append($img);
					$li.data('num',i);
					$img.attr('src',galleryInfo[i].tab) ;
					$img.attr('width','325') ;
					$img.attr('height','325') ;
					$li.append($img);
					$li.click(runProject);
					$('#galleryspace').append($li);
				}
			}
				function runProject()
			{
			
				var $featured, $featuredImg, $featuredDesc, $featuredTitle, $featuredLink,$p;
					
					var current=$(this).data('num');
					$featured= $('.featured');
					$featured.show();
					$item3=$('#background');
					$featuredImg = $('#featuredImg');
					$featuredImg2 = $('#featuredImg2');
					$featuredImg3 = $('#featuredImg3');
					
					
					$featuredImg2.attr('src', "media/picFour.jpg");
					$featuredImg3.attr('src', "media/picOne.jpg");
					
				
					
					//$('html, body').animate({ scrollTop: 0 }, 'slow');
				
			}