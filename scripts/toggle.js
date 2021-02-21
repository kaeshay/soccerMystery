var lightCounter=0;
function lightOff(){
	element=document.getElementById('containment-wrapper');
	sparkles=document.getElementById('sparkles');
	owner=document.getElementById('owner');
	bleachers=document.getElementById('bleachers')
	if(lightCounter==0){
		element.style.filter="invert(1)";
		sparkles.style.display='block';
		owner.src="assets/avatars/owner2.png";
		bleachers.src="assets/stadium/bleachers2.png";
		lightCounter++;
	} else if(lightCounter==1){
		element.style.filter="invert(0)";
		lightCounter=0;
	}
}
