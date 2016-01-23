$(document).ready(function(){
	onload();
});

<!-- fetch local data from sqlite db start -->

function onload(){
		var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
		/* Head Table values start */
		
	db.transaction(queryDB, errorCB);  
	function queryDB(tx) {
		tx.executeSql('SELECT * FROM LOGI_T_SCHEDULE_HEAD ', [], function (tx, results) {
			var logic_head = results.rows.length;
			var LSH_TXN_CODE = results.rows.item(0).LSH_TXN_CODE;
			var LSH_TXN_DT = results.rows.item(0).LSH_TXN_DT;
			var LSH_DOC_REF = results.rows.item(0).LSH_DOC_REF;
			/* Head values start */
			
			document.getElementById("LSH_TXN_CODE").setAttribute('value',LSH_TXN_CODE);
			document.getElementById("LSH_TXN_DT").setAttribute('value',LSH_TXN_DT);
			document.getElementById("LSH_DOC_REF").setAttribute('value',LSH_DOC_REF);
				
			/* Head values end */
			
			
		});
	}
	/* Head Table values end */

	/* Lines Table values start */
	db.transaction(LineDB, errorCB);
	function LineDB(tx) {
		var mesurementTransaction_id = localStorage.getItem("mesurementTransaction_id");
		tx.executeSql('SELECT * FROM LOGI_T_SCHEDULE_LINES WHERE LSL_SYS_ID = ? ', [mesurementTransaction_id], function (tx, results) {
			var fetch_len = results.rows.length;
			localStorage.setItem("lsl_sys_id", results.rows.item(0).LSL_SYS_ID);
			var lsl_sys_id = results.rows.item(0).LSL_SYS_ID;				
			var LSL_REF_TXN_CODE = results.rows.item(0).LSL_REF_TXN_CODE;
			var LSL_CT_AREA_CODE = results.rows.item(0).LSL_CT_AREA_CODE;
			var LSL_CT_CODE = results.rows.item(0).LSL_CT_CODE;
			var LSL_REF_TXN_NO = results.rows.item(0).LSL_REF_TXN_NO;
			var LSL_REF_TXN_DT = results.rows.item(0).LSL_REF_TXN_DT;
			var LSL_CUST_AC_DESC = results.rows.item(0).LSL_CUST_AC_DESC;
			var LSL_CONTACT_PERSON = results.rows.item(0).LSL_CONTACT_PERSON;
			var LSL_CONTACT_NO = results.rows.item(0).LSL_CONTACT_NO;
			var LSL_LOCN_CODE = results.rows.item(0).LSL_LOCN_CODE;
			var LSL_REQUESTED_BY = results.rows.item(0).LSL_REQUESTED_BY;
			var LSL_JOB_CODE = results.rows.item(0).LSL_JOB_CODE;
			var LSL_JOB_STATUS = results.rows.item(0).LSL_JOB_STATUS;
			var LSL_SYS_ID = results.rows.item(0).LSL_SYS_ID;
			var LSL_ADD1 = results.rows.item(0).LSL_ADD1;
			var LSL_ADD2 = results.rows.item(0).LSL_ADD2;
			var LSL_ADD3 = results.rows.item(0).LSL_ADD3;
			var LSL_ADD4 = results.rows.item(0).LSL_ADD4;
			var LSL_CN_CODE = results.rows.item(0).LSL_CN_CODE;
			var LSL_CUST_AC_CODE = results.rows.item(0).LSL_CUST_AC_CODE;
			var LSL_APPOINT_DT = results.rows.item(0).LSL_APPOINT_DT;
			var LSL_JOB_STATUS = results.rows.item(0).LSL_JOB_STATUS;
			var LSL_DESC = results.rows.item(0).LSL_DESC;
			var LSL_EMAIL = results.rows.item(0).LSL_EMAIL;
			var LSL_FAX = results.rows.item(0).LSL_FAX;
			var LSL_PHONE = results.rows.item(0).LSL_PHONE;
			var LSL_MOBILE = results.rows.item(0).LSL_MOBILE;
			var LSL_POSTAL = results.rows.item(0).LSL_POSTAL;
			var LSL_CONTACT_NO = results.rows.item(0).LSL_CONTACT_NO;
			var LSL_REF_SYS_ID = results.rows.item(0).LSL_REF_SYS_ID;
			var LSL_SR_CODE = results.rows.item(0).LSL_SR_CODE;
			var LSL_LOCN_CODE = results.rows.item(0).LSL_LOCN_CODE;
			var LSL_ST_CODE = results.rows.item(0).LSL_ST_CODE;
			
			var LSL_ADDRESS = LSL_ADD1 + "," + LSL_ADD2+","+LSL_ADD3+","+LSL_ADD4;
			var LSL_CITY = LSL_CT_AREA_CODE + "," + LSL_CT_CODE +","+LSL_CN_CODE;
			
			/* Confirm wizard Page fn Start */
			var CON_LSL_ADDRESS = LSL_ADD1 + "," + LSL_ADD2+","+LSL_ADD3+","+LSL_ADD4;
			var CON_LSL_CITY = LSL_CT_AREA_CODE + "," + LSL_CT_CODE +","+LSL_CN_CODE;
			var CON_LSL_CUST_AC_DESC = results.rows.item(0).LSL_CUST_AC_DESC;
			var CON_LSL_CONTACT_PERSON = results.rows.item(0).LSL_CONTACT_PERSON;
			var CON_LSL_REF_TXN_CODE = results.rows.item(0).LSL_REF_TXN_CODE;
			var CON_LSL_REF_TXN_NO = results.rows.item(0).LSL_REF_TXN_NO;
			
			/* Confirm wizard Page fn Ends */
			
			/* Line value display start */ 
			document.getElementById("lsl_sys_id").setAttribute('value',lsl_sys_id);
			 document.getElementById("MH_SALE_REF_SYS_ID").setAttribute('value',LSL_REF_SYS_ID);
			 document.getElementById("LSL_CUST_AC_DESC").setAttribute('value',LSL_CUST_AC_DESC);
			 document.getElementById("LSL_CONTACT_PERSON").setAttribute('value',LSL_CONTACT_PERSON);
			 document.getElementById("LSL_ADDRESS").setAttribute('value',LSL_ADDRESS);
			 document.getElementById("LSL_CITY").setAttribute('value',LSL_CITY);
			 document.getElementById("LSL_REF_TXN_CODE").setAttribute('value',LSL_REF_TXN_CODE);
			 document.getElementById("LSL_REF_TXN_NO").setAttribute('value',LSL_REF_TXN_NO);
			 document.getElementById("LSL_CN_CODE").setAttribute('value',LSL_CN_CODE);
			 document.getElementById("LSL_CUST_AC_CODE").setAttribute('value',LSL_CUST_AC_CODE);
			 document.getElementById("LSL_APPOINT_DT").setAttribute('value',LSL_APPOINT_DT);
			 document.getElementById("LSL_JOB_STATUS").setAttribute('value',LSL_JOB_STATUS);
			 document.getElementById("LSL_DESC").setAttribute('value',LSL_DESC);
			 document.getElementById("LSL_EMAIL").setAttribute('value',LSL_EMAIL);
			 document.getElementById("LSL_FAX").setAttribute('value',LSL_FAX);
			 document.getElementById("LSL_PHONE").setAttribute('value',LSL_PHONE);
			 document.getElementById("LSL_MOBILE").setAttribute('value',LSL_MOBILE);
			 document.getElementById("LSL_POSTAL").setAttribute('value',LSL_POSTAL);
			 document.getElementById("LSL_CONTACT_NO").setAttribute('value',LSL_CONTACT_NO);
			 document.getElementById("LSL_SR_CODE").setAttribute('value',LSL_SR_CODE);
			 document.getElementById("LSL_LOCN_CODE").setAttribute('value',LSL_LOCN_CODE);
			 document.getElementById("LSL_ADD2").setAttribute('value',LSL_ADD2);
			 document.getElementById("LSL_ADD3").setAttribute('value',LSL_ADD3);
			 document.getElementById("LSL_ADD4").setAttribute('value',LSL_ADD4);
			 
			 /* Confirm wizard page start */
			 
			 document.getElementById("CON_LSL_CUST_AC_DESC").setAttribute('value',LSL_CUST_AC_DESC);
			 document.getElementById("CON_LSL_CONTACT_PERSON").setAttribute('value',LSL_CONTACT_PERSON);
			 document.getElementById("CON_LSL_ADDRESS").setAttribute('value',LSL_ADDRESS);
			 document.getElementById("CON_LSL_CITY").setAttribute('value',LSL_CITY);
			 document.getElementById("CON_LSL_REF_TXN_CODE").setAttribute('value',LSL_REF_TXN_CODE);
			 document.getElementById("CON_LSL_REF_TXN_NO").setAttribute('value',LSL_REF_TXN_NO);
			 
			 /* Confirm wizard page end */
			 
		 /* hidden values start */ 
			 
			document.getElementById("LSL_LOCN_CODE").setAttribute('value',LSL_LOCN_CODE);
			document.getElementById("LSL_SR_CODE").setAttribute('value',LSL_SR_CODE);
			document.getElementById("LSL_REF_SYS_ID").setAttribute('value',LSL_SYS_ID);
			document.getElementById("LSL_REF_TXN_CODE_Hidevalue").setAttribute('value',LSL_REF_TXN_CODE);
			document.getElementById("LSL_REF_TXN_NO_Hidevalue").setAttribute('value',LSL_REF_TXN_NO);
			document.getElementById("LSL_REF_TXN_DT").setAttribute('value',LSL_REF_TXN_DT);
			document.getElementById("LSL_CONTACT_NO").setAttribute('value',LSL_CONTACT_NO);
			document.getElementById("LSL_CN_CODE").setAttribute('value',LSL_CN_CODE);
			document.getElementById("LSL_ST_CODE").setAttribute('value',LSL_ST_CODE);
			document.getElementById("LSL_POSTAL").setAttribute('value',LSL_POSTAL);
			document.getElementById("LSL_MOBILE").setAttribute('value',LSL_MOBILE);
			document.getElementById("LSL_PHONE").setAttribute('value',LSL_PHONE);
			document.getElementById("LSL_FAX").setAttribute('value',LSL_FAX);
			document.getElementById("LSL_EMAIL").setAttribute('value',LSL_EMAIL);
			document.getElementById("LSL_DESC").setAttribute('value',LSL_DESC);
			document.getElementById("LSL_JOB_STATUS").setAttribute('value',LSL_JOB_STATUS);
			document.getElementById("LSL_APPOINT_DT").setAttribute('value',LSL_APPOINT_DT);
			document.getElementById("LSL_CUST_AC_CODE").setAttribute('value',LSL_CUST_AC_CODE);
			document.getElementById("LSL_CT_AREA_CODE").setAttribute('value',LSL_CT_AREA_CODE);
			document.getElementById("LSL_ADD2").setAttribute('value',LSL_ADD2);
			document.getElementById("LSL_ADD3").setAttribute('value',LSL_ADD3);
			document.getElementById("LSL_ADD4").setAttribute('value',LSL_ADD4);
			 
			 /* hidden values end */
			 
			 	/* Line value display end */
			
				
			});
		
		
		}
	function errorCB(tx, err) {
	 	//alert("Error");
	 	//alert("Error processing SQL: "+err);
	 	} 
		
	DisplaySelect();
	}
 	
/* Lines Table values end */

/* Select Box values start */ 
 function DisplaySelect(){
	 var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	 
	 db.transaction(BuildType, errorCB);                        

	 function BuildType(tx) {
	 	tx.executeSql('SELECT * FROM BUILD_TYPE ', [], function (tx, results) {
	 		var BuildType_len = results.rows.length;
	 		$("#BuildType").ready(function () {
	 			for (var i = 0; i < BuildType_len; i++) {
	 				$('#ML_BULD_TYPE').append('<option value="'+results.rows.item(i).VSL_CODE+'">'+results.rows.item(i).VSL_DESC+'</option>');
	 			}
	 		  });
	 		});
	 }
	 
	 db.transaction(UnitType, errorCB);                        

	 function UnitType(tx) {
	 	tx.executeSql('SELECT * FROM UNIT_TYPE ', [], function (tx, results) {
	 		var UnitType_len = results.rows.length;
	 	//	alert("UnitType_len-"+UnitType_len);
	 		$("#UnitType").ready(function () {
	 			for (var i = 0; i < UnitType_len; i++) {
	 				$('#ML_UNIT').append('<option value="'+results.rows.item(i).VSL_CODE+'">'+results.rows.item(i).VSL_DESC+'</option>');
             	}
	 		});
	 	});
	 }
	 
	 
	 
	 db.transaction(Product, errorCB);                        

	 function Product(tx) {
	 	tx.executeSql('SELECT * FROM PRODUCT_TYPE ', [], function (tx, results) {
	 		var Product_len = results.rows.length;
	 		//alert("Product_len-"+Product_len);
	 		$("#ProductType").ready(function () {
		 		 for (var i = 0; i < Product_len; i++) {
	                $('#ML_PRODUCT_CODE').append('<option value="'+results.rows.item(i).IF_CODE+'">'+results.rows.item(i).IF_DESC+'</option>');
	             }
	             
		 		  });
	 		
	 	});
	 }
	 
	 db.transaction(ColorCode, errorCB);                        

	 function ColorCode(tx) {
	 	tx.executeSql('SELECT * FROM COLOR_CODE ', [], function (tx, results) {
	 		var ColorCode_len = results.rows.length;
	 	//	alert("ColorCode_len-"+ColorCode_len);
	 		$("#ColorCode").ready(function () {
		 		  for (var i = 0; i < ColorCode_len; i++) {
	                $('#ML_COLOR_CODE').append('<option value="'+results.rows.item(i).IC_CODE+'">'+results.rows.item(i).IC_DESC+'</option>');
	             }
	             
		 	});
	 	});
	 }
	 
	 db.transaction(MountType, errorCB);                        

	 function MountType(tx) {
	 	tx.executeSql('SELECT * FROM MOUNT_TYPE ', [], function (tx, results) {
	 		var MountType_len = results.rows.length;
	 	//	alert("MountType_len-"+MountType_len);
	 		$("#MountType").ready(function () {
	             for (var i = 0; i < MountType_len; i++) {
	                $('#ML_MOUNT_TYPE').append('<option value="'+results.rows.item(i).VSL_CODE+'">'+results.rows.item(i).VSL_DESC+'</option>');
	             }
	 		});
	 	});
	 }
	 
	 db.transaction(MountOn, errorCB);
	 function MountOn(tx) {
	 	tx.executeSql('SELECT * FROM MOUNT_ON ', [], function (tx, results) {
	 		var MountOn_len = results.rows.length;
	 		$("#MountOn").ready(function () {
	 			for (var i = 0; i < MountOn_len; i++) {
	 				$('#ML_MOUNT_ON').append('<option value="'+results.rows.item(i).VSL_CODE+'">'+results.rows.item(i).VSL_DESC+'</option>');
	             }
	 		});
	 	});
	 }
	 
	 db.transaction(WinOpen, errorCB);
	 function WinOpen(tx) {
	 	tx.executeSql('SELECT * FROM WINOPEN_TYPE ', [], function (tx, results) {
	 		var winopen_len = results.rows.length;
	 		$("#WinOpenType").ready(function () {
		 		for (var i = 0; i < winopen_len; i++) {
	                $('#ML_WINDOW_OPENING').append('<option value="'+results.rows.item(i).VSL_CODE+'">'+results.rows.item(i).VSL_DESC+'</option>');
	            }
		 	});
	 	});
	 }
	 
	 db.transaction(HandleType, errorCB);
	 function HandleType(tx) {
	 	tx.executeSql('SELECT * FROM HANDLE_TYPE ', [], function (tx, results) {
	 		var handle_len = results.rows.length;
	 		$("#HandlePositionType").ready(function () {
	 			for (var i = 0; i < handle_len; i++) {
	                $('#ML_HANDLE_POSITION').append('<option value="'+results.rows.item(i).VSL_CODE+'">'+results.rows.item(i).VSL_DESC+'</option>');
	            }
		 	});
	 	});
	 }

	 function errorCB(tx, err) {
	 	//alert("Error");
	 	//alert("Error processing SQL: "+err);
	 	} 
	 
 }
 /* Select Box values end */  
 
 <!-- fetch local data from sqlite db end -->