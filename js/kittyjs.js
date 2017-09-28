;(function(){
    var bar = document.getElementById('sliderBar'),
	barSlide = document.getElementById('scrollBar'),
	cursorPosition =0,
	position =0,
	slideCount = 12,
	slideGroupCount = 4,
	iterationCount = slideCount/slideGroupCount,
	barSlideWidth = Math.floor(bar.offsetWidth /iterationCount),
	fix=0,
	lastPositionFix = bar.offsetWidth - barSlideWidth * iterationCount,
	maxPosition = bar.offsetWidth - barSlideWidth - lastPositionFix,
	untilBarWidth = bar.getBoundingClientRect(),
	animationIndex=0;
        var currentAnimate = false;

    
    if(lastPositionFix % iterationCount != 0 ) {
	fix = (lastPositionFix+1)/iterationCount;
    } else {
	fix = lastPositionFix/iterationCount;
    }
    
    barSlide.style.width = barSlideWidth + "px";
    
    var kittyWidth = 240,// 150 + padding 
	kittyCount = 4,
	kPosition = 0,
	kittyBoss = document.getElementById("sliderOverflow"),
	kittyUl = document.getElementById("descriptionSliderUl"),
	kittyLi = kittyBoss.querySelectorAll(".description-slider__slide");
    
    function kittyLeft(){
	kPosition = Math.min(kPosition + kittyWidth * kittyCount,0);
	var leftAnimate = setInterval(function(){
	    currentAnimate=true;
	    animationIndex += 30;
	    kittyUl.style.marginLeft = animationIndex + "px";
	    if(animationIndex>=kPosition){
		kittyUl.style.marginLeft = animationIndex + "px";
		currentAnimate = false; 		
		clearInterval(leftAnimate);
	    } 
	},5);
    }

   function kittyRight(){
	
	kPosition = Math.max(kPosition - kittyWidth * kittyCount, -kittyWidth * (kittyLi.length - kittyCount));

	var rightAnimate = setTimeout(function ra(){
	    currentAnimate = true;
	    animationIndex -= 30;
	    kittyUl.style.marginLeft = animationIndex + "px";
	    rightAnimate = setTimeout(ra,7);
	    if(animationIndex <= kPosition){
		currentAnimate = false; 		
		clearInterval(rightAnimate);
	    } 
	},7);
 };
    
    var right = function(e) {
	if(currentAnimate) return; 
	if( !(e.clientX >= (untilBarWidth.left +bar.offsetWidth/2)) ) return;
	if(position >= maxPosition ) {
	    return;
	};
	cursorPosition +=1;
	position = fix + cursorPosition * barSlideWidth;
	barSlide.style.marginLeft = position + fix + "px";
	kittyRight();
    };

    var left = function(e) {
	if(currentAnimate) return; 
	if(!(e.clientX <= (untilBarWidth.left + bar.offsetWidth/2))) return;
	if(position <=0) return;
	
	cursorPosition -= 1;
	position = cursorPosition * barSlideWidth - fix;
	barSlide.style.marginLeft = position - fix + "px";
	kittyLeft();
    };
    
    bar.addEventListener("click", right);
    bar.addEventListener("click", left);
})();




















