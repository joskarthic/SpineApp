$(document).ready(function(){
	alert("Off line");
});

/* Hide and show button start */	
OfflineButtonShow();
function OfflineButtonShow(){
	var measureId = localStorage.getItem("mesurementTransaction_id");
	var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	db.transaction(Live_Measure_Head, errorCB);
	function Live_Measure_Head(tx) {
		tx.executeSql('SELECT * FROM Live_Measure_Head where MH_REF_SYS_ID=? ', [measureId], function (tx, results) {
			var Headlength = results.rows.length;
			if(Headlength=='0'){
				//SelectLocalHeadValues12();
				$("#existEdit").addClass("hide");
			}else{
				//SelectLocalLinesValues12();
				$("#existEdit").removeClass("hide");
			}
			
		});
	}
	function errorCB(tx, err) {
	 	//alert("Error");
	 	//alert("Error processing SQL: "+err);
	} 
}
/* Hide and show button end*/


/* Check the measurement Head Values start*/
	
	function OfflineHeadCheck(){
		var measureId = localStorage.getItem("mesurementTransaction_id");
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		db.transaction(Live_Measure_Head, errorCB);
		function Live_Measure_Head(tx) {
			tx.executeSql('SELECT * FROM Live_Measure_Head where MH_REF_SYS_ID=? ', [measureId], function (tx, results) {
				var Headlength = results.rows.length;
				alert("Headlength-->"+Headlength);
				if(Headlength=='0'){
					var HeadSysId = localStorage.getItem("mesurementTransaction_id");
					var linesys = parseInt(HeadSysId);
					var LineSysId = linesys + 1 ;
					alert("Head"+HeadSysId);
					alert("Line"+LineSysId);
					localStorage.setItem("SYS_ID", HeadSysId);
					localStorage.setItem("LineId", LineSysId);
					localStorageHead();
				}else{
					alert("Status"+results.rows.item(0).MH_STATUS);
					var id = results.rows.item(0).MH_SYS_ID;
					alert("id->"+id);
					var LineSysId = id + 1;
					alert(LineSysId);
					localStorage.setItem("LineId", LineSysId);
					localStorage.setItem("SYS_ID", results.rows.item(0).MH_SYS_ID);
					localStorage.setItem("Status", results.rows.item(0).MH_STATUS);
					alert("All Ready Exit");
					
				}
				
			});
		}
		function errorCB(tx, err) {
		 	//alert("Error");
		 	//alert("Error processing SQL: "+err);
		} 
	}
	
	/* Check the measurement Head Values end*/
	
	/* Offline Measurement Head values start */
	
	function localStorageHead(){
		alert("local Storage Head");

		 var SYS_ID = localStorage.getItem("SYS_ID");
		 var SYS_LINE_ID = localStorage.getItem("LineId");
		 alert("H->"+SYS_ID);alert("L->"+SYS_LINE_ID);
		 var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		 var USER_ID = localStorage.getItem("user_id");
		 var MH_TXN_CODE = "MS";
		 /* get Current date */
		 var currentDate = moment();
		 var MH_TXN_DT = moment(currentDate).format('DD-MMM-YYYY');
		 /* get Current date end*/
		 var MH_CUST_AC_DESC =$("input[name=MH_CUST_AC_DESC]").val();
		 var MH_CONTACT_PERSON =$("input[name=MH_CONTACT_PERSON]").val();
		 var MH_ADD1 =$("input[name=MH_ADD1]").val();
		 var MH_CT_CODE =$("input[name=MH_CT_CODE]").val();
		 var MH_SALE_REF_TXN_CODE =$("input[name=MH_SALE_REF_TXN_CODE]").val();
	 	 var MH_SALE_REF_TXN_NO = $("input[name=MH_SALE_REF_TXN_NO]").val();
	 	 var MH_SALE_REF_SYS_ID = $("input[name=MH_SALE_REF_SYS_ID]").val();
	 	 var MH_SALE_REF_TXN_DT = $("input[name=LSL_REF_TXN_DT]").val();
	 	 var MH_REF_TXN_DT = $("input[name=LSH_TXN_DT]").val();
		 var LSH_DOC_REF =$("input[name=LSH_DOC_REF]").val();
		 var LSL_LOCN_CODE =$("input[name=LSL_LOCN_CODE]").val();
		 var LSL_SR_CODE =$("input[name=LSL_SR_CODE]").val();
		 var LSL_REF_SYS_ID =$("input[name=LSL_REF_SYS_ID]").val();
		 var LSL_REF_TXN_CODE =$("input[name=LSL_REF_TXN_CODE]").val();
		 var LSL_REF_TXN_NO =$("input[name=LSL_REF_TXN_NO]").val();
		 var LSL_REF_TXN_DT = $("input[name=LSL_REF_TXN_DT]").val();
		 var LSL_CONTACT_NO = $("input[name=LSL_CONTACT_NO]").val();
		 var LSL_CN_CODE = $("input[name=LSL_CN_CODE]").val();
		 var LSL_ST_CODE = $("input[name=LSL_ST_CODE]").val(); 
		 var LSL_POSTAL = $("input[name=LSL_POSTAL]").val();
		 var LSL_MOBILE = $("input[name=LSL_MOBILE]").val();
		 var LSL_PHONE = $("input[name=LSL_PHONE]").val();
		 var LSL_FAX = $("input[name=LSL_FAX]").val();
		 var LSL_EMAIL = $("input[name=LSL_EMAIL]").val();
		 var LSL_DESC = $("input[name=LSL_DESC]").val();
		 var LSL_JOB_STATUS = $("input[name=LSL_JOB_STATUS]").val(); 
		 var LSL_APPOINT_DT = $("input[name=LSL_APPOINT_DT]").val();
		 var LSL_CUST_AC_CODE = $("input[name=LSL_CUST_AC_CODE]").val();
		 var LSL_CT_AREA_CODE = $("input[name=LSL_CT_AREA_CODE]").val();
		 var LSL_ADD2 = $("input[name=LSL_ADD2]").val();
		 var LSL_ADD3 = $( 	"input[name=LSL_ADD3]").val();
		 var LSL_ADD4 = $("input[name=LSL_ADD4]").val();
		 var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		
		db.transaction(function(tx){
			tx.executeSql('DROP TABLE IF EXISTS LOGI_T_MEASURE_HEAD');
			tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_HEAD (ID INTEGER PRIMARY KEY AUTOINCREMENT,USER_COMP_CODE TEXT,MH_TXN_CODE TEXT,MH_TXN_DT TEXT,LSH_DOC_REF TEXT,LSL_LOCN_CODE TEXT,LSL_SR_CODE TEXT,LSL_REF_SYS_ID TEXT,LSL_REF_TXN_CODE TEXT,LSL_REF_TXN_NO TEXT,LSL_REF_TXN_DT TEXT,MH_SALE_REF_TXN_CODE TEXT,MH_SALE_REF_TXN_NO TEXT,MH_SALE_REF_SYS_ID TEXT,MH_SALE_REF_TXN_DT TEXT,LSL_CONTACT_NO TEXT,MH_CONTACT_PERSON TEXT,LSL_CUST_AC_CODE TEXT,MH_CUST_AC_DESC TEXT,MH_ADD1 TEXT,LSL_ADD2 TEXT,LSL_ADD3 TEXT,LSL_ADD4 TEXT,LSL_CN_CODE TEXT,LSL_ST_CODE TEXT,MH_CT_CODE TEXT,LSL_CT_AREA_CODE TEXT,LSL_POSTAL TEXT,LSL_MOBILE TEXT,LSL_PHONE TEXT,LSL_FAX TEXT,LSL_EMAIL TEXT,LSL_DESC TEXT,LSL_APPOINT_DT TEXT,USER_ID TEXT,MH_REF_TXN_DT TEXT,SYS_ID TEXT,SYS_LINE_ID TEXT) ');
			tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_HEAD (USER_COMP_CODE,MH_TXN_CODE,MH_TXN_DT,LSH_DOC_REF,LSL_LOCN_CODE,LSL_SR_CODE,LSL_REF_SYS_ID,LSL_REF_TXN_CODE,LSL_REF_TXN_NO,LSL_REF_TXN_DT,MH_SALE_REF_TXN_CODE,MH_SALE_REF_TXN_NO,MH_SALE_REF_SYS_ID,MH_SALE_REF_TXN_DT,LSL_CONTACT_NO,MH_CONTACT_PERSON,LSL_CUST_AC_CODE,MH_CUST_AC_DESC,MH_ADD1,LSL_ADD2,LSL_ADD3,LSL_ADD4,LSL_CN_CODE,LSL_ST_CODE,MH_CT_CODE,LSL_CT_AREA_CODE,LSL_POSTAL,LSL_MOBILE,LSL_PHONE,LSL_FAX,LSL_EMAIL,LSL_DESC,LSL_APPOINT_DT,USER_ID,MH_REF_TXN_DT,SYS_ID,SYS_LINE_ID) VALUES ("'+ USER_COMP_CODE +'","'+ MH_TXN_CODE +'","'+ MH_TXN_DT +'","'+ LSH_DOC_REF +'","'+ LSL_LOCN_CODE +'","'+ LSL_SR_CODE +'","'+ LSL_REF_SYS_ID +'","'+ LSL_REF_TXN_CODE +'","'+ LSL_REF_TXN_NO +'","'+ LSL_REF_TXN_DT +'","'+ MH_SALE_REF_TXN_CODE +'","'+ MH_SALE_REF_TXN_NO +'","'+ MH_SALE_REF_SYS_ID +'","'+ MH_SALE_REF_TXN_DT +'","'+ LSL_CONTACT_NO +'","'+ MH_CONTACT_PERSON +'","'+ LSL_CUST_AC_CODE +'","'+ MH_CUST_AC_DESC +'","'+ MH_ADD1 +'","'+ LSL_ADD2 +'","'+ LSL_ADD3 +'","'+ LSL_ADD4 +'","'+ LSL_CN_CODE +'","'+ LSL_ST_CODE +'","'+ MH_CT_CODE +'","'+ LSL_CT_AREA_CODE +'","'+ LSL_POSTAL +'","'+ LSL_MOBILE +'","'+ LSL_PHONE +'","'+ LSL_FAX +'","'+ LSL_EMAIL +'","'+ LSL_DESC +'","'+ LSL_APPOINT_DT +'","'+ USER_ID +'","'+ MH_REF_TXN_DT +'","'+ SYS_ID +'","'+ SYS_LINE_ID +'")', successID);
			SelectLocalHeadValues();
		});
		
		function successID(){
			return true;
		}
		
		
	}
	
	function SelectLocalHeadValues(){
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		db.transaction(Local_Measure_Head, errorCB);
		function Local_Measure_Head(tx) {
			tx.executeSql('SELECT * FROM LOGI_T_MEASURE_HEAD ', [], function (tx, results) {
				var LocalHeadlength = results.rows.length;
				localStorage.setItem("LocalHeadlength", LocalHeadlength);
				alert("Headlength-->"+LocalHeadlength);
			});
		}
		function errorCB(tx, err) {
		 	//alert("Error");
		 	//alert("Error processing SQL: "+err);
		}
	}
	
	/* Offline Measurement Head values end */
	
	/* Offline Measurement Line values start */
	
	function localStorageLines(){
		var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		var USER_ID = localStorage.getItem("user_id");
		var MH_TXN_CODE = "MS";
		 /* get Current date */
		 
		var currentDate = moment();
		var MH_TXN_DT = moment(currentDate).format('DD-MMM-YYYY');
		/* get Current date end*/
		 
		 var MH_CUST_AC_DESC =$("input[name=MH_CUST_AC_DESC]").val();
		 var MH_CONTACT_PERSON =$("input[name=MH_CONTACT_PERSON]").val();
		 var MH_ADD1 =$("input[name=MH_ADD1]").val();
		 var MH_CT_CODE =$("input[name=MH_CT_CODE]").val();
		 var MH_SALE_REF_TXN_CODE =$("input[name=MH_SALE_REF_TXN_CODE]").val();
	 	 var MH_SALE_REF_TXN_NO = $("input[name=MH_SALE_REF_TXN_NO]").val();
	 	 var MH_SALE_REF_SYS_ID = $("input[name=MH_SALE_REF_SYS_ID]").val();
	 	 var MH_SALE_REF_TXN_DT = $("input[name=LSL_REF_TXN_DT]").val();
		 var ML_BUILD = $("input[name=ML_BUILD]").val();
		 var ML_FLOOR = $("input[name=ML_FLOOR]").val();
		 var ML_FLAT = $("input[name=ML_FLAT]").val(); 
		 var ML_WIDTH = $("input[name=ML_WIDTH]").val();
		 var ML_HEIGHT = $("input[name=ML_HEIGHT]").val();
		 var ML_PROJECTION = $("input[name=ML_PROJECTION]").val();
		 var ML_FASICA = $("input[name=ML_FASICA]").val();
		 var ML_REMARKS = $("input[name=ML_REMARKS]").val();
		 var ML_UNIT = document.getElementById("ML_UNIT").value;
		 //var ML_PRODUCT_CODE = document.getElementById("ML_PRODUCT_CODE").value;
		 //var ML_COLOR_CODE = document.getElementById("ML_COLOR_CODE").value;
		 //var ML_QTY = $("input[name=ML_QTY]").val();
		 var ML_MOUNT_TYPE = document.getElementById("ML_MOUNT_TYPE").value;
		 var ML_MOUNT_ON = document.getElementById("ML_MOUNT_ON").value;
		 var ML_OPERATE = document.getElementById("ML_OPERATE").value;
		 var ML_CONTROL = document.getElementById("ML_CONTROL").value;
		 var ML_OPENING = document.getElementById("ML_OPENING").value;
		 var ML_PELMET = document.getElementById("ML_PELMET").value;
		 var LSH_DOC_REF =$("input[name=LSH_DOC_REF]").val();
		 var LSL_LOCN_CODE =$("input[name=LSL_LOCN_CODE]").val();
		 var LSL_SR_CODE =$("input[name=LSL_SR_CODE]").val();
		 var LSL_REF_SYS_ID =$("input[name=LSL_REF_SYS_ID]").val();
		 var LSL_REF_TXN_CODE =$("input[name=LSL_REF_TXN_CODE]").val();
		 var LSL_REF_TXN_NO =$("input[name=LSL_REF_TXN_NO]").val();
		 var LSL_REF_TXN_DT = $("input[name=LSL_REF_TXN_DT]").val();
		 var LSL_CONTACT_NO = $("input[name=LSL_CONTACT_NO]").val();
		 var LSL_CN_CODE = $("input[name=LSL_CN_CODE]").val();
		 var LSL_ST_CODE = $("input[name=LSL_ST_CODE]").val(); 
		 var LSL_POSTAL = $("input[name=LSL_POSTAL]").val();
		 var LSL_MOBILE = $("input[name=LSL_MOBILE]").val();
		 var LSL_PHONE = $("input[name=LSL_PHONE]").val();
		 var LSL_FAX = $("input[name=LSL_FAX]").val();
		 var LSL_EMAIL = $("input[name=LSL_EMAIL]").val();
		 var LSL_DESC = $("input[name=LSL_DESC]").val();
		 var LSL_JOB_STATUS = $("input[name=LSL_JOB_STATUS]").val(); 
		 var LSL_APPOINT_DT = $("input[name=LSL_APPOINT_DT]").val();
		 var LSL_CUST_AC_CODE = $("input[name=LSL_CUST_AC_CODE]").val();
		 var LSL_CT_AREA_CODE = $("input[name=LSL_CT_AREA_CODE]").val();
		 var LSL_ADD2 = $("input[name=LSL_ADD2]").val();
		 var LSL_ADD3 = $( 	"input[name=LSL_ADD3]").val();
		 var LSL_ADD4 = $("input[name=LSL_ADD4]").val();
		 var ML_FULL_WIDTH = $("input[name=ML_FULL_WIDTH]").val();
		 var ML_FULL_HEIGHT = $("input[name=ML_FULL_HEIGHT]").val();
		 var ML_LEFT_WALL = $("input[name=ML_LEFT_WALL]").val();
		 var ML_RIGHT_WALL = $("input[name=ML_RIGHT_WALL]").val();
		 var ML_CEILING_UP = $("input[name=ML_CEILING_UP]").val();
		 var ML_FLOOR_DOWN = $("input[name=ML_FLOOR_DOWN]").val();
		 var ML_WINDOW_DEPTH = $("input[name=ML_WINDOW_DEPTH]").val();
		 var ML_WINDOW_OPENING = document.getElementById("ML_WINDOW_OPENING").value;
		 var ML_HANDLE_POSITION = document.getElementById("ML_HANDLE_POSITION").value;
		 var ML_HANDLE_SIZE = $("input[name=ML_HANDLE_SIZE]").val();
		 var ML_POWER_DISTANCE = $("input[name=ML_POWER_DISTANCE]").val();
		 var ML_GYPSUM_YN = document.getElementById("ML_GYPSUM_YN").value;
		 var ML_GYPSUM_WIDTH = $("input[name=ML_GYPSUM_WIDTH]").val();
		 var ML_GYPSUM_HEIGHT = $("input[name=ML_GYPSUM_HEIGHT]").val();
		 var ML_GYPSUM_DEPTH = $("input[name=ML_GYPSUM_DEPTH]").val();
		 var ML_BULD_TYPE = document.getElementById("ML_BULD_TYPE").value;
		 var ML_ROOM_NO = document.getElementById("ML_ROOM_NO").value;
		 var ML_WINDOW_NO = document.getElementById("ML_WINDOW_NO").value;
		 var SYS_ID = localStorage.getItem("SYS_ID");
		 var SYS_LINE_ID = localStorage.getItem("LineId");
		 alert("SYS_ID->"+SYS_ID);
		 alert("SYS_LINE_ID->"+SYS_LINE_ID);
		 var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		 db.transaction(function(tx){
			 tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_LINES (ID INTEGER PRIMARY KEY AUTOINCREMENT,MH_SALE_REF_SYS_ID TEXT,SYS_ID TEXT,USER_COMP_CODE TEXT,MH_TXN_DT TEXT,LSL_LOCN_CODE TEXT,ML_BUILD TEXT,ML_FLOOR TEXT,ML_FLAT TEXT,ML_UNIT TEXT,ML_WIDTH TEXT,ML_HEIGHT TEXT,ML_MOUNT_TYPE TEXT,ML_MOUNT_ON TEXT,ML_OPERATE TEXT,ML_CONTROL TEXT,ML_OPENING TEXT,ML_PELMET TEXT,ML_PROJECTION TEXT,ML_FASICA TEXT,ML_REMARKS TEXT,LSL_REF_SYS_ID TEXT,USER_ID TEXT,ML_FULL_WIDTH TEXT,ML_FULL_HEIGHT TEXT,ML_LEFT_WALL TEXT,ML_RIGHT_WALL TEXT,ML_CEILING_UP TEXT,ML_FLOOR_DOWN TEXT,ML_WINDOW_DEPTH TEXT,ML_WINDOW_OPENING TEXT,ML_HANDLE_POSITION TEXT,ML_HANDLE_SIZE TEXT,ML_POWER_DISTANCE TEXT,ML_GYPSUM_YN TEXT,ML_GYPSUM_WIDTH TEXT,ML_GYPSUM_HEIGHT TEXT,ML_GYPSUM_DEPTH TEXT,ML_BULD_TYPE TEXT, ML_ROOM_NO TEXT, ML_WINDOW_NO TEXT, SYS_LINE_ID TEXT) ');
			 tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_LINES (MH_SALE_REF_SYS_ID,SYS_ID,USER_COMP_CODE,MH_TXN_DT,LSL_LOCN_CODE,ML_BUILD,ML_FLOOR,ML_FLAT,ML_UNIT,ML_WIDTH,ML_HEIGHT,ML_MOUNT_TYPE,ML_MOUNT_ON,ML_OPERATE,ML_CONTROL,ML_OPENING,ML_PELMET,ML_PROJECTION,ML_FASICA,ML_REMARKS,LSL_REF_SYS_ID,USER_ID,ML_FULL_WIDTH,ML_FULL_HEIGHT,ML_LEFT_WALL,ML_RIGHT_WALL,ML_CEILING_UP,ML_FLOOR_DOWN,ML_WINDOW_DEPTH,ML_WINDOW_OPENING,ML_HANDLE_POSITION,ML_HANDLE_SIZE,ML_POWER_DISTANCE,ML_GYPSUM_YN,ML_GYPSUM_WIDTH,ML_GYPSUM_HEIGHT,ML_GYPSUM_DEPTH,ML_BULD_TYPE,ML_ROOM_NO,ML_WINDOW_NO,SYS_LINE_ID) VALUES ("'+ MH_SALE_REF_SYS_ID +'","'+ SYS_ID +'","'+ USER_COMP_CODE +'","'+ MH_TXN_DT +'","'+ LSL_LOCN_CODE +'","'+ ML_BUILD +'","'+ ML_FLOOR +'","'+ ML_FLAT +'","'+ ML_UNIT +'","'+ ML_WIDTH +'","'+ ML_HEIGHT +'","'+ ML_MOUNT_TYPE +'","'+ ML_MOUNT_ON +'","'+ ML_OPERATE +'","'+ ML_CONTROL +'","'+ ML_OPENING +'","'+ ML_PELMET +'","'+ ML_PROJECTION +'","'+ ML_FASICA +'","'+ ML_REMARKS +'","'+ LSL_REF_SYS_ID +'","'+ USER_ID +'","'+ ML_FULL_WIDTH +'","'+ ML_FULL_HEIGHT +'","'+ ML_LEFT_WALL +'","'+ ML_RIGHT_WALL +'","'+ ML_CEILING_UP +'","'+ ML_FLOOR_DOWN +'","'+ ML_WINDOW_DEPTH +'","'+ ML_WINDOW_OPENING +'","'+ ML_HANDLE_POSITION +'","'+ ML_HANDLE_SIZE +'","'+ ML_POWER_DISTANCE +'","'+ ML_GYPSUM_YN +'","'+ ML_GYPSUM_WIDTH +'","'+ ML_GYPSUM_HEIGHT +'","'+ ML_GYPSUM_DEPTH +'","'+ ML_BULD_TYPE +'","'+ ML_ROOM_NO +'","'+ ML_WINDOW_NO +'","'+ SYS_LINE_ID +'")', successID);
			 SelectLocalLinesValues();
		 });
			function successID(){
				return true;
			}
						
	}
	
	function LocalLineValueCheck(){
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		db.transaction(LocalLineCheck, errorCB);
		function LocalLineCheck(tx) { 
			tx.executeSql('SELECT * FROM LOGI_T_MEASURE_LINES ORDER BY ID DESC LIMIT 1', [], function (tx, results) {
				var Linelength = results.rows.length;
				alert("Local len->"+Linelength);
				var Line = results.rows.item(0).SYS_LINE_ID;
				var id = parseInt(Line);
				var NewId = id + 1;
				localStorage.setItem("LineId", NewId);
				alert("Linelength-->"+Linelength);
				localStorageLines();
			});
		}
		function errorCB(tx, err) {
			localStorageLines();
			//alert("Error");
		 	//alert("Error processing SQL: "+err);
		}	
	}
	
	
	function SelectLocalLinesValues(){
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		db.transaction(Local_Measure_Line, errorCB);
		function Local_Measure_Line(tx) {
			tx.executeSql('SELECT * FROM LOGI_T_MEASURE_LINES ', [], function (tx, results) {
				var Linelength = results.rows.length;
				alert("Select Linelength-->"+Linelength);
				ajaxLocalImage();	
			});
		}
		function errorCB(tx, err) {
		 	//alert("Error");
		 	//alert("Error processing SQL: "+err);
		}
	}
	
	/* Offline Measurement Line values end */
	
	/* Offline Measurement Image values start*/
	
	function ajaxLocalImage(){
		var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		var SYS_LINE_ID = localStorage.getItem("LineId");
		var SYS_ID = localStorage.getItem("SYS_ID");
		var Img_location = localStorage.getItem("Img_location");
	    var ServerPath = "https://sedarspine.s3.amazonaws.com/LOGI/"+Img_location;
	    var ImgPath = localStorage.getItem("ImgPath");
		var USER_ID = localStorage.getItem("user_id");
		var IMG_ID = 1;
	    var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	    db.transaction(function(tx){
	    	tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_IMAGES(ID INTEGER PRIMARY KEY AUTOINCREMENT,IMG_ID INTEGER,USER_COMP_CODE TEXT,SYS_LINE_ID TEXT,SYS_ID TEXT,Img_location TEXT,IMG_PATH TEXT,SERVER_PATH TEXT,USER_ID TEXT)');
	    	tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_IMAGES (IMG_ID,USER_COMP_CODE,SYS_LINE_ID,SYS_ID,Img_location,IMG_PATH,SERVER_PATH,USER_ID) VALUES ("'+ IMG_ID +'","'+ USER_COMP_CODE +'","'+ SYS_LINE_ID +'","'+ SYS_ID +'","'+ Img_location +'","'+ ImgPath +'","'+ ServerPath +'","'+ USER_ID +'")', successID)
	    });
	    function successID(){
			return true;
		}
	    ajaxLocalImage1();
	}
	
	function ajaxLocalImage1(){
		var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		var SYS_LINE_ID = localStorage.getItem("LineId");
		var SYS_ID = localStorage.getItem("SYS_ID");
	    var Img_location = localStorage.getItem("Img_location1");
	    var ServerPath = "https://sedarspine.s3.amazonaws.com/LOGI/"+Img_location;
	    var ImgPath = localStorage.getItem("ImgPath1");
		var USER_ID = localStorage.getItem("user_id");
		var IMG_ID = 2;
	    var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	    db.transaction(function(tx){
	    	tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_IMAGES(ID INTEGER PRIMARY KEY AUTOINCREMENT,IMG_ID INTEGER,USER_COMP_CODE TEXT,SYS_LINE_ID TEXT,SYS_ID TEXT,Img_location TEXT,IMG_PATH TEXT,SERVER_PATH TEXT,USER_ID TEXT)');
	    	tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_IMAGES (IMG_ID,USER_COMP_CODE,SYS_LINE_ID,SYS_ID,Img_location,IMG_PATH,SERVER_PATH,USER_ID) VALUES ("'+ IMG_ID +'","'+ USER_COMP_CODE +'","'+ SYS_LINE_ID +'","'+ SYS_ID +'","'+ Img_location +'","'+ ImgPath +'","'+ ServerPath +'","'+ USER_ID +'")', successID)
	    });
	    function successID(){
			return true;
		}
	    ajaxLocalImage2();
	}
	
	function ajaxLocalImage2(){
		var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		var SYS_LINE_ID = localStorage.getItem("LineId");
		var SYS_ID = localStorage.getItem("SYS_ID");
	    var Img_location = localStorage.getItem("Img_location2");
	    var ServerPath = "https://sedarspine.s3.amazonaws.com/LOGI/"+Img_location;
	    var ImgPath = localStorage.getItem("ImgPath2");
		var USER_ID = localStorage.getItem("user_id");
		var IMG_ID = 3;
	    var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	    db.transaction(function(tx){
	    	tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_IMAGES(ID INTEGER PRIMARY KEY AUTOINCREMENT,IMG_ID INTEGER,USER_COMP_CODE TEXT,SYS_LINE_ID TEXT,SYS_ID TEXT,Img_location TEXT,IMG_PATH TEXT,SERVER_PATH TEXT,USER_ID TEXT)');
	    	tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_IMAGES (IMG_ID,USER_COMP_CODE,SYS_LINE_ID,SYS_ID,Img_location,IMG_PATH,SERVER_PATH,USER_ID) VALUES ("'+ IMG_ID +'","'+ USER_COMP_CODE +'","'+ SYS_LINE_ID +'","'+ SYS_ID +'","'+ Img_location +'","'+ ImgPath +'","'+ ServerPath +'","'+ USER_ID +'")', successID)
	    });
	    function successID(){
			return true;
		}
	    ajaxLocalImage3();
	}
	
	function ajaxLocalImage3(){
		var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		var SYS_LINE_ID = localStorage.getItem("LineId");
		var SYS_ID = localStorage.getItem("SYS_ID");
	    var Img_location = localStorage.getItem("Img_location3");
	    var ServerPath = "https://sedarspine.s3.amazonaws.com/LOGI/"+Img_location;
	    
	    var ImgPath = localStorage.getItem("ImgPath3");
		var USER_ID = localStorage.getItem("user_id");
		var IMG_ID = 4;
	    var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	    db.transaction(function(tx){
	    	tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_IMAGES(ID INTEGER PRIMARY KEY AUTOINCREMENT,IMG_ID INTEGER,USER_COMP_CODE TEXT,SYS_LINE_ID TEXT,SYS_ID TEXT,Img_location TEXT,IMG_PATH TEXT,SERVER_PATH TEXT,USER_ID TEXT)');
	    	tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_IMAGES (IMG_ID,USER_COMP_CODE,SYS_LINE_ID,SYS_ID,Img_location,IMG_PATH,SERVER_PATH,USER_ID) VALUES ("'+ IMG_ID +'","'+ USER_COMP_CODE +'","'+ SYS_LINE_ID +'","'+ SYS_ID +'","'+ Img_location +'","'+ ImgPath +'","'+ ServerPath +'","'+ USER_ID +'")', successID)
	    });
	    function successID(){
			return true;
		}
	    ajaxLocalImage4();
	}
	
	function ajaxLocalImage4(){
		var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		var SYS_LINE_ID = localStorage.getItem("LineId");
		var SYS_ID = localStorage.getItem("SYS_ID");
	    var Img_location = localStorage.getItem("Img_location4");
	    var ServerPath = "https://sedarspine.s3.amazonaws.com/LOGI/"+Img_location;
	    var ImgPath = localStorage.getItem("ImgPath4");
		var USER_ID = localStorage.getItem("user_id");
		var IMG_ID = 5;
	    var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	    db.transaction(function(tx){
	    	tx.executeSql('CREATE TABLE IF NOT EXISTS LOGI_T_MEASURE_IMAGES(ID INTEGER PRIMARY KEY AUTOINCREMENT,IMG_ID INTEGER,USER_COMP_CODE TEXT,SYS_LINE_ID TEXT,SYS_ID TEXT,Img_location TEXT,IMG_PATH TEXT,SERVER_PATH TEXT,USER_ID TEXT)');
	    	tx.executeSql('INSERT OR REPLACE INTO LOGI_T_MEASURE_IMAGES (IMG_ID,USER_COMP_CODE,SYS_LINE_ID,SYS_ID,Img_location,IMG_PATH,SERVER_PATH,USER_ID) VALUES ("'+ IMG_ID +'","'+ USER_COMP_CODE +'","'+ SYS_LINE_ID +'","'+ SYS_ID +'","'+ Img_location +'","'+ ImgPath +'","'+ ServerPath +'","'+ USER_ID +'")', successID)
	    });
	    function successID(){
			return true;
		}
	   selectImages(); 
	}
	
	/* Offline Measurement Image values ends*/
	
	function selectImages(){
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		db.transaction(LocalImages, errorCB);
		function LocalImages(tx) {	
			tx.executeSql('SELECT * FROM LOGI_T_MEASURE_IMAGES', [], function (tx, results) {
				var Imageslength = results.rows.length;
				localStorage.setItem("Imageslength", Imageslength);
				alert("Imageslength-->"+Imageslength);
				//review();
			});
		}
		function errorCB(tx, err) {
		 	//alert("Error");
		 	//alert("Error processing SQL: "+err);
		}
	}
	
	function review(){
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		var SYS_LINE_ID = localStorage.getItem("LineId");
		var SYS_ID = localStorage.getItem("SYS_ID");
		db.transaction(Local_Measure_Line, errorCB);
		function Local_Measure_Line(tx) {
			tx.executeSql('SELECT * FROM LOGI_T_MEASURE_IMAGES WHERE  SYS_ID = ? AND SYS_LINE_ID = ?', [SYS_ID,SYS_LINE_ID], function (tx, results) {
				var Linelength = results.rows.length;
				for (var i = 0; i < Linelength; i++){
				}
			});
		}
		function errorCB(tx, err) {
		 	//alert("Error");
		 	//alert("Error processing SQL: "+err);
		}
	}
	
