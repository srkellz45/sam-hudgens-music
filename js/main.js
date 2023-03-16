$(document).ready(function () {    
	if ($(window).width() < 768) {
		$('.zindex').hide();
	}
	else {
		//desktop 
		$('#fullpage').fullpage({
		//options here
		licenseKey: '70EA3FEA-1D3D42F9-9B1ED0EE-685729D3',
		autoScrolling: true,
		css3: true,
		scrollingSpeed: 800,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
	    loopHorizontal: false,
		continuousVertical: true,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: true,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 10,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null
	});
			
	$('#fullpage').fullpage();

	$.fn.fullpage.setAllowScrolling(false);
	
	}

    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() <= 768) { 
            fullpage_api.destroy('all');
            console.log('small screen')
        } else {
           //desktop 
                
        $('#fullpage').fullpage();
    
        }
    });
});