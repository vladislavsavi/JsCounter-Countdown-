$(document).ready(function(){
	var count={
	 	sec:60,
	 	min:59,
	 	hour:23,
	 	day:3,
	
	} 
	    secer=count.sec;
		setInterval(function(){
			$("#counter").text(secer+"-Sec. "+count.min+"-Min. "+count.hour+"-H. "+count.day+"-day");
			
			if(secer==0){
				secer=60;
				count.min--;
				
			}
			if(count.min==0){
				count.hour--;
				count.min=60;
			}
			if(count.hour==0){
				count.day--;
				count.hour=23;
			}
			secer--;
		}, 1000);
});

