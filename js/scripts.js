// $("#pagePort").load("illustration.html", function(){
//   $.getScript("js/scripts.js", function() {
//       if (currentPage.init) {
//           currentPage.init();
//       }
//   });
// });
$(document).ready(function(){

var jqueryOverlay = $('<div id="overlay"></div>');
var jqueryImage = $("<img>");
var jqueryCaption = $("<p></p>");

jqueryOverlay.append(jqueryImage);
jqueryOverlay.append(jqueryCaption);

$("body").append(jqueryOverlay);

$("#imageGallery a").click(function(event) {
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 jqueryImage.attr("src", imageLocation);

 jqueryOverlay.show();

 var captionText = $(this).children("img").attr("alt");
  jqueryCaption.text(captionText);
});

jqueryOverlay.click(function() {
  jqueryOverlay.hide();
});

});
