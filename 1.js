function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.fnDown = function(){
	var _this = this;
	this.obj.addEventListener('mousedown',function(ev){
		_this.disX = ev.pageX - this.obj.offsetLeft;
		_this.disY = ev.pageY - this.obj.offsetTop;
		
		
		document.addEventListener('mousemove',move);
		document.addEventListener('mouseup',up);
		
		function up(ev){
			_this.fnUp(move,up);
		}
		
		function move(ev){
			_this.fnMove(ev);
		}
	});
};
