/**
 * Setup:
 * 1. Set path to folder containing images (relative to gallery html)
 * 2. Manually set the files array with the names of the image files.
 * 
 * JS does not have access to the filesystem.
 * Thus, you need a server-side image gallery in order to dynamically
 * load images from a folder.
 **/

var folder="images/";
var images=["Agrarian.jpg",
"Amber-Waves.jpg", 
"Autumnal.jpg",
"Autumn-Prelude.jpg",
"Beams.jpg",
"Buildup.jpg",
"Changeable.jpg",
"Circumnavigation.jpg",
"Cliffside.jpg",
"Colossal.jpg",
"Commuters'-Dawn.jpg",
"Crest.jpg",
"Decommissioned.jpg",
"Descent.jpg",
"Deserted.jpg",
"Dichotomy.jpg",
"Dispersed.jpg",
"Downhill.jpg",
"Downtown.jpg",
"Drenched.jpg",
"Dusky.jpg",
"Dusted.jpg",
"Earth-Tones.jpg",
"Ecotone.jpg",
"Edge-Effect.jpg",
"Enclosed.jpg",
"Evergreen.jpg",
"Expanse.jpg",
"Expansion.jpg",
"Far-'n'-Away.jpg",
"Fenced.jpg",
"Firmament.jpg",
"Forgotten.jpg",
"Forlorn.jpg",
"Free-Flowing.jpg",
"Glazed.jpg",
"Gray-Matter.jpg",
"Hill-'n'-Dale.jpg",
"Horizonal.jpg",
"Hovering.jpg",
"Inlet.jpg",
"Insular.jpg"]

$(document).ready(function() {
	num_pictures = images.length;
	var ticks = new Array(num_pictures-1);
	$("#slider").slider({ max: num_pictures-1});
	$("#slider").slider({
		slide: function(event, ui) {  
			var value = $( "#slider" ).slider( "option", "value" );
			document["frame"].src = folder+images[value];
		}		
	});
	
	$(ticks).each(function(i) {
		var tick = $('<div class="tick ui-widget-content"></div>').appendTo(slider);
		tick.css({
			left: (100 / ticks.length * i) + '%',
			width: (100 / ticks.length) + '%'
		});
	})
	
});
