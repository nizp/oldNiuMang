function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.fnDown = function(){
	var _this = this;
	this.obj.addEventListener('mousedown',function(ev){
		_this.disX = ev.pageX - _this.obj.offsetLeft;
		_this.disY = ev.pageY - _this.obj.offsetTop;
		
		
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
Drag.prototype.fnMove = function(ev){
	
	this.obj.style.left = ev.clientX - this.disX + 'px';
	this.obj.style.top = ev.clientY - this.disY + 'px';
	
	console.log(123);
	
}

Drag.prototype.fnUp = function(move,up){
	 document.removeEventListener('mousemove',move);
	 document.removeEventListener('mouseup',up);
};
