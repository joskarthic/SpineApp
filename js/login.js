function login() {
//	alert("enter to login");
	
	var name = document.getElementById("user_id").value;
	var password = document.getElementById("password").value;
	
	
	

	if (name == '' || password == '') {
		alert("Please Fill All Fields");
	}
	else {
		/*if(network_status=='No network connection'){
			md5pwd = calcMD5(password);
			
			onDeviceReady();
		}
		else
		{*/
			// AJAX code to submit form.
	
			$.ajax({
				type: "POST",
				url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/loginAuthentication",
				data :  'user_id='+name+'&password='+password ,
				dataType: "json",
				processData: true,
				
				success: function(json) {
					
					if (json.login_status=='Success') {
						window.open('ScheduleTrackingDashboard_View.html', '_blank','location=no');
					//	alert("Success");
						localStorage.setItem("user_id", json.USER_ID);
						localStorage.setItem("USER_COMP_CODE", json.USER_COMP_CODE);
						
					}else{
						alert('Incorrect Username and Password');
					}
				}
			});
		//}
	}
	return false;
}

