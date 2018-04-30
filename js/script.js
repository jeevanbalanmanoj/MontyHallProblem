$(function(){
	$('#piechart_3d').hide();
$('#submit').click(function(){
	startSim($('#count').val());
});	

function startSim(count){
	var winCount=0;
	var noOdfDoors=3;
	for(i=0;i<count;i++){
	var prize =Math.floor(Math.random() * (noOdfDoors)) + 1;
	var choice =Math.floor(Math.random() * (noOdfDoors)) + 1;
	if(prize==choice)
		winCount++;
	}
		$('#piechart_3d').show();
	$('#problemStatement').hide();
	drawChart(winCount,count-winCount);
	//alert(winCount+" "+winCount/count);

}
});