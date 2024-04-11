var video = document.querySelector("#player1");

// Page load

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log ("auto play is set to " + video.autoplay);
	console.log ("loop is set to " + video.loop);

});

// Play button and volume update

let volumeDisplay = document.querySelector('#volume');

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
	volumeDisplay.innerHTML = video.volume * 100 + "%";
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
});

// Speed up button
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up Video");
	video.playbackRate /= 0.90;
	console.log("New speed is " + video.playbackRate);
});

// Skip button
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	console.log("New time is " + video.currentTime);
});

// Mute button
document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute");
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Unmute");
	}
})

// Volume slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log("Volume Slider");
	video.volume = this.value / 100;
	volumeDisplay.innerHTML = this.value + "%";
	console.log("Volume is now " + video.volume);
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage");
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool");
});
