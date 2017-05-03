
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var jqueryOverlay = $('<div id="overlay" style="display: none;"></div>');
$(document).ready(function(){
var jqueryImage = $("<img>");
var jqueryCaption = $("<p></p>");
var jqueryStyle = $('<style>#overlay {background:rgba(41, 47, 54, 0.8); height:100%; width:100%; text-align:center;}</style>')

jqueryOverlay.append(jqueryImage);
jqueryOverlay.append(jqueryCaption);

$("body").append(jqueryOverlay);

$("#imageGallery a").click(function(event) {
 event.preventDefault();
 $("body").append(jqueryStyle);
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
