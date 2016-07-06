function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.fnDown = function(){
	 
};
Drag.prototype.fnUp = function(move,up){
	 document.removeEventListener('mousemove',move);
	 document.removeEventListener('mouseup',up);
};