function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.fnDown = function(){
	 
};
Drag.prototype.fnMove = function(ev){
	
	this.obj.style.left = ev.pageX - this.disX + 'px';
	this.obj.style.top = ev.pageY - this.disY + 'px';
	
}

