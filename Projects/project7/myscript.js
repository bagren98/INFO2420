// JavaScript Document
var	PrintButton1 = new Image
var	PrintButton2 = new Image
var	logo1 = new Image
var	logo2 = new Image

if (document.images) {
	PrintButton1.src = "Images/PrintButton1.png"
	PrintButton2.src = "Images/PrintButton2.png"
	logo1.src = "Images/logo1.jpg"
	logo2.src = "Images/logo2.png"
}


		var imgArray = new Array(
			'Image1Lg.jpg',
			'Image2Lg.jpg',
			'Image3Lg.jpg',
			'Image4Lg.jpg'
			

		);


		var titleArray = new Array(
			'Dog looking at leaves',
			'Woman and Dog',
			'Girl and a Hamster',
			'Woman and Horse'
			
		);
			
		var imgPath = "Images/Fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      		textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		