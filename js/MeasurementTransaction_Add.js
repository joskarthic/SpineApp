alert("MeasurementTransaction_Add.js");
$(document).ready(function (){
	
	var spine = "spine";
	$.ajax({
		type: "POST",
		url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/getSchduleTrackingData",
		data :'spine='+spine,
		dataType: "json",
		processData: true,
		success: function(json) {
			alert("success to json fetch");
			alert(json);
		}
	});	

	
    }
	
});


