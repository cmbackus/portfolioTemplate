$(document).ready(function(){
     init(); 
});
			function init(){
				//runProject();
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
			function loadData(){
			var xhr = new XMLHttpRequest();
			xhr.onload = function(){
				// JSON.parse() converts a string to JSON.
 				var myJSON = JSON.parse( xhr.responseText );
 				
 			//	var myJSON = eval('(' + xhr.responseText + ')');
 				var allProjects = myJSON.projects;
				var html="";
				for(var i=0;i<allProjects.length;i++){
				project=allProjects[i];
					for(var i=0;i<project.pages.length;i++){
						html+="<div class='joke'>";
						html +="<h3>"+page.Title+"</h3>";
						html+="<p>"+page.Caption+"</p>"
						html+="<p>Rating= "+page.Img+"</p>";
						
						html +="</div>";
					}
				}
				document.querySelector('#content').innerHTML = html;
				
				
			}
			
			var url = "../projects.json";
			xhr.open('GET',url,true);
			// try to prevent browser caching by sending a header to the server
			xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2010 00:00:00 GMT");
			xhr.send();
		}