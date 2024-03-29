jQuery.noConflict();

var deviceTier, deviceOrientation;

function tierAndOrientation() {
  	if (jQuery(".visible-xl").css('display') == 'block') {
		deviceTier = "xl";
	}
	else if (jQuery(".visible-lg").css('display') == 'block') {
		deviceTier = "lg";
	}
	else if (jQuery(".visible-md").css('display') == 'block') {
		deviceTier = "md";
	}
	else if (jQuery(".visible-sm").css('display') == 'block') {
		deviceTier = "sm";
	}
	else if (jQuery(".visible-xs").css('display') == 'block') {
		deviceTier = "xs";
	}
	if (window.innerHeight >= window.innerWidth) {
		deviceOrientation = "portrait";
	}
	else {
		deviceOrientation = "landscape";
	}
	jQuery("body").removeClass('xl lg md sm xs portrait landscape').addClass(deviceTier).addClass(deviceOrientation);
}

jQuery(function() {
	tierAndOrientation();
});

jQuery(window).on("load", function (e) {
	
});

jQuery(window).resize(function() {
	tierAndOrientation();
});

jQuery(window).scroll(function() {

});