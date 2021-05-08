$(document).ready(function() {
    var banner = $("body");
    var imgs = $(".cicle_1");
// /////////////////////////////////////////////////////////////
function showAllObjects (object) {
		object.fadeIn(900);
}
// /////////////////////////////////////////////////////////////
function moving (object, speed) {
	banner.on('mousemove', function(event) {
		var X = Math.floor((event.pageX)/speed-20) + "px";
    	var Y = Math.floor((event.pageY)/speed) + "px";	
    	$(object).css('transform', 'translate('+X+' , '+Y+')');
	});
}
// /////////////////////////////////////////////////////////////
function moveAll (object) {
	moving($(object)[0],21);
	moving($(object)[1],21);

}
// /////////////////////////////////////////////////////////////
showAllObjects(imgs);
moveAll(imgs);
// /////////////////////////////////////////////////////////////
});