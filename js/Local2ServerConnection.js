alert("Local2Server Connection");
/*$(document).ready(function(){
	alert("Test");
	var networkState = navigator.connection.type;
	alert("Inside fn");
	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.CELL]     = 'Cell generic connection';
	states[Connection.NONE]     = 'No network connection';
	alert('Connection type: ' + states[networkState]);
	if(states[networkState] ==  'No network connection'){
		alert("No Net conn..");
	}else{
		alert("Yes Net conn..");
	}
});
*/
function sync(){
	alert("Local Count Values");
	local2ServerImage();
	var headlen = localStorage.getItem("LocalHeadlength");
	alert("len->"+headlen);
	if(localStorage.getItem("LocalHeadlength") === null){
		alert("Value Null");
		LineValueSend2Server();
	}else{
		alert("Value Select");
		HeadValueSend2Server();
	}
}


	
	
	/* Head Values Send to Server Concept Start */
	
	function HeadValueSend2Server(){
		alert("SelectLocalHeadValues");
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		db.transaction(Server_Head, errorCB);
		function Server_Head(tx) {
			tx.executeSql('SELECT * FROM LOGI_T_MEASURE_HEAD ', [], function (tx, results) {
				var headData =  [];
				var Headlength = results.rows.length;
				alert("Headlength-->"+Headlength);
			 	  for (var i = 0; i < Headlength; i++) {
					var row = results.rows.item(i);
					var headValues = {USER_COMP_CODE:row.USER_COMP_CODE,MH_TXN_CODE:row.MH_TXN_CODE,MH_TXN_DT:row.MH_TXN_DT,LSH_DOC_REF:row.LSH_DOC_REF,LSL_LOCN_CODE:row.LSL_LOCN_CODE,LSL_SR_CODE:row.LSL_SR_CODE,LSL_REF_SYS_ID:row.LSL_REF_SYS_ID,LSL_REF_TXN_CODE:row.LSL_REF_TXN_CODE,LSL_REF_TXN_NO:row.LSL_REF_TXN_NO,LSL_REF_TXN_DT:row.LSL_REF_TXN_DT,MH_SALE_REF_TXN_CODE:row.MH_SALE_REF_TXN_CODE,MH_SALE_REF_TXN_NO:row.MH_SALE_REF_TXN_NO,MH_SALE_REF_SYS_ID:row.MH_SALE_REF_SYS_ID,MH_SALE_REF_TXN_DT:row.MH_SALE_REF_TXN_DT,LSL_CONTACT_NO:row.LSL_CONTACT_NO,MH_CONTACT_PERSON:row.MH_CONTACT_PERSON,LSL_CUST_AC_CODE:row.LSL_CUST_AC_CODE,MH_CUST_AC_DESC:row.MH_CUST_AC_DESC,MH_ADD1:row.MH_ADD1,LSL_ADD2:row.LSL_ADD2,LSL_ADD3:row.LSL_ADD3,LSL_ADD4:row.LSL_ADD4,LSL_CN_CODE:row.LSL_CN_CODE,LSL_ST_CODE:row.LSL_ST_CODE,MH_CT_CODE:row.MH_CT_CODE,LSL_CT_AREA_CODE:row.LSL_CT_AREA_CODE,LSL_POSTAL:row.LSL_POSTAL,LSL_MOBILE:row.LSL_MOBILE,LSL_PHONE:row.LSL_PHONE,LSL_FAX:row.LSL_FAX,LSL_EMAIL:row.LSL_EMAIL,LSL_DESC:row.LSL_DESC,LSL_APPOINT_DT:row.LSL_APPOINT_DT,USER_ID:row.USER_ID,MH_REF_TXN_DT:row.MH_REF_TXN_DT,SYS_ID:row.SYS_ID};
					headData.push(headValues);
				}
			 	 var len = headData.length;
			 	 alert(len);
			 	 for (var i=0; i<len; i++){
			 		var headPush = headData[i];
					alert("comp code-->"+headPush.USER_COMP_CODE);
					alert("sys id-->"+headPush.SYS_ID);
					$.ajax({
						type: "POST",
					    url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionHead_Local2Server",
					    data : {"headData":headPush},
					    dataType:'json',
					    async: false,
					    success: function (json){
					    	alert("sys-->"+json.system_id);
							alert("sys-->"+json.error_message);
							localStorage.setItem("SYS_ID", json.system_id);
							alert("Replace the head data values in line start");
							var HeadId = headPush.SYS_ID;
							alert("H->"+HeadId);
							var LineReId = json.system_id;
							alert("ReH->"+LineReId);
							tx.executeSql('UPDATE LOGI_T_MEASURE_LINES SET SYS_ID =? WHERE SYS_ID =?', [LineReId,HeadId], function (tx, results) {
								alert("Update Success");
							});
							alert("Select Line Values Start");
							var NewHeadId = json.system_id;
							alert("New Head Id->"+NewHeadId);
							tx.executeSql('SELECT * FROM LOGI_T_MEASURE_LINES WHERE SYS_ID = ?', [NewHeadId], function (tx, results) {
								var lineData =  [];
								var Linelength = results.rows.length;
								alert("Linelength-->"+Linelength);
								for (var i=0; i <Linelength; i++){
									var row = results.rows.item(i);
									alert("SYS_ID->"+row.SYS_ID);
									var linesValue = {MH_SALE_REF_SYS_ID:row.MH_SALE_REF_SYS_ID,SYS_ID:row.SYS_ID,USER_COMP_CODE:row.USER_COMP_CODE,MH_TXN_DT:row.MH_TXN_DT,LSL_LOCN_CODE:row.LSL_LOCN_CODE,ML_BUILD:row.ML_BUILD,ML_FLOOR:row.ML_FLOOR,ML_FLAT:row.ML_FLAT,ML_UNIT:row.ML_UNIT,ML_PRODUCT_CODE:row.ML_PRODUCT_CODE,ML_COLOR_CODE:row.ML_COLOR_CODE,ML_WIDTH:row.ML_WIDTH,ML_HEIGHT:row.ML_HEIGHT,ML_QTY:row.ML_QTY,ML_MOUNT_TYPE:row.ML_MOUNT_TYPE,ML_MOUNT_ON:row.ML_MOUNT_ON,ML_OPERATE:row.ML_OPERATE,ML_CONTROL:row.ML_CONTROL,ML_OPENING:row.ML_OPENING,ML_PELMET:row.ML_PELMET,ML_PROJECTION:row.ML_PROJECTION,ML_FASICA:row.ML_FASICA,ML_REMARKS:row.ML_REMARKS,LSL_REF_SYS_ID:row.LSL_REF_SYS_ID,USER_ID:row.USER_ID,ML_FULL_WIDTH:row.ML_FULL_WIDTH,ML_FULL_HEIGHT:row.ML_FULL_HEIGHT,ML_LEFT_WALL:row.ML_LEFT_WALL,ML_RIGHT_WALL:row.ML_RIGHT_WALL,ML_CEILING_UP:row.ML_CEILING_UP,ML_FLOOR_DOWN:row.ML_FLOOR_DOWN,ML_WINDOW_DEPTH:row.ML_WINDOW_DEPTH,ML_WINDOW_OPENING:row.ML_WINDOW_OPENING,ML_HANDLE_POSITION:row.ML_HANDLE_POSITION,ML_HANDLE_SIZE:row.ML_HANDLE_SIZE,ML_POWER_DISTANCE:row.ML_POWER_DISTANCE,ML_GYPSUM_YN:row.ML_GYPSUM_YN,ML_GYPSUM_WIDTH:row.ML_GYPSUM_WIDTH,ML_GYPSUM_HEIGHT:row.ML_GYPSUM_HEIGHT,ML_GYPSUM_DEPTH:row.ML_GYPSUM_DEPTH,ML_BULD_TYPE:row.ML_BULD_TYPE,ML_ROOM_NO:row.ML_ROOM_NO,ML_WINDOW_NO:row.ML_WINDOW_NO,SYS_LINE_ID:row.SYS_LINE_ID};
									lineData.push(linesValue);
								}
								var length = lineData.length;
								alert("data->"+length);
								for (var i=0; i<length; i++){
									var linePushData = lineData[i];
									$.ajax({
										type: "POST",
									    url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_Local2Server",
									    data :  {"lineData":linePushData},
									    dataType:'json',
									    async: false,
										success: function (json){
											alert("line Id-->"+json.system_line_id);
											alert("msg-->"+json.return_line_message);
											localStorage.setItem("SYS_LINE_ID", json.system_line_id);
											alert("Img Values Start");
											var HeadImgId = headPush.SYS_ID;
											alert("H->"+HeadImgId);
											var HeadImgReId = localStorage.getItem("SYS_ID");
											alert("ReH->"+HeadImgReId);
											tx.executeSql('UPDATE LOGI_T_MEASURE_IMAGES SET SYS_ID =? WHERE SYS_ID =?', [HeadImgReId,HeadImgId], function (tx, results) {
												var Linelength = results.rows.length;
												alert("Head->"+Linelength);
											});
											alert("Sys Line");
											var LineImgId = linePushData.SYS_LINE_ID;
											alert("L->"+LineImgId);
											var LineImgReId = localStorage.getItem("SYS_LINE_ID");
											alert("ReL->"+LineImgReId);
											tx.executeSql('UPDATE LOGI_T_MEASURE_IMAGES SET SYS_LINE_ID =? WHERE SYS_LINE_ID =?', [LineImgReId,LineImgId], function (tx, results) {
												var Linelength = results.rows.length;
												alert("Line->"+Linelength);
											});
											alert("Img select query");
											var SYS_ID = localStorage.getItem("SYS_ID")
											alert("Head->"+SYS_ID);
											var SYS_LINE_ID = localStorage.getItem("SYS_LINE_ID");
											alert("Line->"+SYS_LINE_ID);
											tx.executeSql('SELECT * FROM LOGI_T_MEASURE_IMAGES WHERE SYS_ID = ? AND SYS_LINE_ID = ?', [SYS_ID,SYS_LINE_ID], function (tx, results) {
												var imageData =  [];
												var ImageLength = results.rows.length;
												alert("img->"+ImageLength);
												for (var i=0; i <ImageLength; i++){
													var row = results.rows.item(i);
													var imageValue = {USER_COMP_CODE:row.USER_COMP_CODE,SYS_LINE_ID:row.SYS_LINE_ID,SYS_ID:row.SYS_ID,Img_location:row.SERVER_PATH,USER_ID:row.USER_ID};
													imageData.push(imageValue);
												}
												alert("ID"+imageData[0].USER_COMP_CODE);
												var imgLen = imageData.length;
												alert("img len->"+imgLen);
												for( var i=0; i < imgLen; i++){
													var imagePushData = imageData[i];
													$.ajax({
														type: "POST",
													    url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionImage_Local2Server",
													    data :  {"imageData":imagePushData},
													    dataType:'json',
													    async: false,
														success: function (json) {
															alert("Line status-->"+json.error_message);
														}
													});
												}
											});
										}
									});
								}
							});
					    }
					});
			 	 }
			});
		}
		function errorCB(tx, err) {
		 	//alert("Error");
		 	//alert("Error processing SQL: "+err);
		}
	}
	
	/* Head Values Send to Server Concept Ends */
	
	
	
	
	
	/* Line Values Send to Server Concept Start */
	
	 function LineValueSend2Server(){
		 alert("Local Lines Values");
		 var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		 db.transaction(Server_Line, errorCB);
		 function Server_Line(tx){
			 var headSysVal = localStorage.getItem("SYS_ID");
			 tx.executeSql('SELECT * FROM LOGI_T_MEASURE_LINES ', [], function (tx, results) {
				 var lineData =  [];
				 var Linelength = results.rows.length;
				 alert("Linelength-->"+Linelength);
				 for (var i=0; i < Linelength; i++){
					 var row = results.rows.item(i);
					 alert("SYS_ID->"+row.SYS_ID);
					 var linesValue = {MH_SALE_REF_SYS_ID:row.MH_SALE_REF_SYS_ID,SYS_ID:row.SYS_ID,USER_COMP_CODE:row.USER_COMP_CODE,MH_TXN_DT:row.MH_TXN_DT,LSL_LOCN_CODE:row.LSL_LOCN_CODE,ML_BUILD:row.ML_BUILD,ML_FLOOR:row.ML_FLOOR,ML_FLAT:row.ML_FLAT,ML_UNIT:row.ML_UNIT,ML_PRODUCT_CODE:row.ML_PRODUCT_CODE,ML_COLOR_CODE:row.ML_COLOR_CODE,ML_WIDTH:row.ML_WIDTH,ML_HEIGHT:row.ML_HEIGHT,ML_QTY:row.ML_QTY,ML_MOUNT_TYPE:row.ML_MOUNT_TYPE,ML_MOUNT_ON:row.ML_MOUNT_ON,ML_OPERATE:row.ML_OPERATE,ML_CONTROL:row.ML_CONTROL,ML_OPENING:row.ML_OPENING,ML_PELMET:row.ML_PELMET,ML_PROJECTION:row.ML_PROJECTION,ML_FASICA:row.ML_FASICA,ML_REMARKS:row.ML_REMARKS,LSL_REF_SYS_ID:row.LSL_REF_SYS_ID,USER_ID:row.USER_ID,ML_FULL_WIDTH:row.ML_FULL_WIDTH,ML_FULL_HEIGHT:row.ML_FULL_HEIGHT,ML_LEFT_WALL:row.ML_LEFT_WALL,ML_RIGHT_WALL:row.ML_RIGHT_WALL,ML_CEILING_UP:row.ML_CEILING_UP,ML_FLOOR_DOWN:row.ML_FLOOR_DOWN,ML_WINDOW_DEPTH:row.ML_WINDOW_DEPTH,ML_WINDOW_OPENING:row.ML_WINDOW_OPENING,ML_HANDLE_POSITION:row.ML_HANDLE_POSITION,ML_HANDLE_SIZE:row.ML_HANDLE_SIZE,ML_POWER_DISTANCE:row.ML_POWER_DISTANCE,ML_GYPSUM_YN:row.ML_GYPSUM_YN,ML_GYPSUM_WIDTH:row.ML_GYPSUM_WIDTH,ML_GYPSUM_HEIGHT:row.ML_GYPSUM_HEIGHT,ML_GYPSUM_DEPTH:row.ML_GYPSUM_DEPTH,ML_BULD_TYPE:row.ML_BULD_TYPE,ML_ROOM_NO:row.ML_ROOM_NO,ML_WINDOW_NO:row.ML_WINDOW_NO,SYS_LINE_ID:row.SYS_LINE_ID};
					 lineData.push(linesValue);
				 }
				 var length = lineData.length;
				 alert("data->"+length);
				 for (var i=0; i<length; i++){
					 var linePushData = lineData[i];
					 $.ajax({
						 type: "POST",
						 url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_Local2Server",
						 data :  {"lineData":linePushData},
						 async : false,
						 dataType:'json',
						 success: function (json){
							 alert("line Id-->"+json.system_line_id);
							 alert("Line status-->"+json.return_line_status);
							 alert("msg-->"+json.return_line_message);
							 localStorage.setItem("SYS_LINE_ID", json.system_line_id);
							 alert("Update Query Start");
							 var LineImgId = linePushData.SYS_LINE_ID;
							 alert("L->"+LineImgId);
							 var LineImgReId = localStorage.getItem("SYS_LINE_ID");
							 alert("ReL->"+LineImgReId);
							 tx.executeSql('UPDATE LOGI_T_MEASURE_IMAGES SET SYS_LINE_ID =? WHERE SYS_LINE_ID =?', [LineImgReId,LineImgId], function (tx, results) {
								 alert("Updates Success");
							 });
							 var SYS_ID = localStorage.getItem("SYS_ID")
							 alert("SH->"+SYS_ID);
							 var SYS_LINE_ID = json.system_line_id;
							 alert("SL->"+SYS_LINE_ID);
							 tx.executeSql('SELECT * FROM LOGI_T_MEASURE_IMAGES WHERE SYS_ID = ? AND SYS_LINE_ID = ?', [SYS_ID,SYS_LINE_ID], function (tx, results) {
								 alert("Updates Success");
								 var imageData =  [];
								 var ImageLength = results.rows.length;
								 alert("img->"+ImageLength);
								 for (var i=0; i <ImageLength; i++){
									 var row = results.rows.item(i);
									 var imageValue = {USER_COMP_CODE:row.USER_COMP_CODE,SYS_LINE_ID:row.SYS_LINE_ID,SYS_ID:row.SYS_ID,Img_location:row.SERVER_PATH,USER_ID:row.USER_ID};
									 imageData.push(imageValue);
								 }
								 var imgLen = imageData.length;
								 alert("img len->"+imgLen);
								 for( var i=0; i < imgLen; i++){
									 var imagePushData = imageData[i];
									 $.ajax({
										 type: "POST",
										 url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionImage_Local2Server",
										 data :  {"imageData":imagePushData},
										 async : false,
										 dataType:'json',
										 success: function (json) {
											 alert("img status-->"+json.error_message);
										 }
									 });
								 }
							 });
						 }
					 });
				 }
			 });
			 
		 }
		 function errorCB(tx, err) {
			 //alert("Error");
			 //alert("Error processing SQL: "+err);
		}
	 }
	
	/* Line Values Send to Server Concept Ends */
	
	
	
	
	 
	 /*Image values send to server concept Start*/
	 
	 function local2ServerImage(){
		 var Imagelen = localStorage.getItem("Imageslength");
			//alert("len->"+Imagelen);
			if(localStorage.getItem("Imageslength") === null){
				//alert("Value Null");
			}else{
				//alert("Value Select");
				 var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
					db.transaction(LocalImg, errorCB);
					function LocalImg(tx) {	
						tx.executeSql('SELECT * FROM LOGI_T_MEASURE_IMAGES', [], function (tx, results) {
							var Imglength = results.rows.length;
							//alert("Imageslength-->"+Imglength);
							/*for(var i=0; i<Imglength; i++ ){
								var imageURI = results.rows.item(i).IMG_PATH;
								alert("Img->"+imageURI);
							 	var options = new FileUploadOptions();
							    options.fileKey = "file";
							    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
							    options.mimeType = "image/jpeg";
							    var params = new Object();
							    options.params = params;
							    options.chunkedMode = false;
							    var ft = new FileTransfer();
							    ft.upload(imageURI, "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_UploadImage", win, fail, options, false);
							}
							function win(r) {
								alert("Response = " + r.response);
							}
							function fail(error) {
								alert("error");
								alert("An error has occurred: Code = " + error.code);
								alert("upload error source " + error.source);
								alert("upload error target " + error.target);
							}*/
						});
					}
					function errorCB(tx, err) {
					 	//alert("Error");
					 	//alert("Error processing SQL: "+err);
					}
			}
	 }
	 
	 /*Image values send to server concept Ends*/
	 
	 
	


