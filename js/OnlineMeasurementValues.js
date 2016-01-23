$(document).ready(function(){
	//alert("online Measure pages");
});
	

/* Hide and show button start */
OnlineButtonShow();
function OnlineButtonShow(){
	 var measureId = localStorage.getItem("mesurementTransaction_id");
	 $.ajax({ 
	    type: "POST",
	    url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/measureId_Ajax",
	    data :  {measureId:measureId},
	    dataType:'json',
		success: function (json) {
			if(json.status == "Success"){
				$("#existEdit").removeClass("hide");
			}else{
				$("#existEdit").addClass("hide");
			}
	    }
	}); 
}
/* Hide and show button end*/


	function OnlineHeadCheck(){
		alert("Online Check");
		 var measureId = localStorage.getItem("mesurementTransaction_id");
		 $.ajax({ 
		    type: "POST",
		    url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/measureId_Ajax",
		    data :  {measureId:measureId},
		    dataType:'json',
			success: function (json) {
				if(json.status == "Success"){
					//alert("success");
					$("#existEdit").removeClass("hide");
					localStorage.setItem("SYS_ID", json.MH_SYS_ID);	
				}else{
					//alert("Not Success");
					$("#existEdit").addClass("hide");
					onlineStorageHead();
				}
		    }
		});  
	}
	
	/* Measurement Head values start */
	
	function onlineStorageHead(){
		//alert("Online Head");
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
		 alert(LSL_SR_CODE);
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
		 
		 //var LSL_SR_CODE = null;
		
		 $.ajax({
			type: "POST",
		    url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransaction_Ajax",
		    data :  {USER_COMP_CODE:USER_COMP_CODE,MH_TXN_CODE:MH_TXN_CODE,MH_TXN_DT:MH_TXN_DT ,LSH_DOC_REF:LSH_DOC_REF,LSL_LOCN_CODE:LSL_LOCN_CODE,LSL_SR_CODE:LSL_SR_CODE,LSL_REF_SYS_ID:LSL_REF_SYS_ID,LSL_REF_TXN_CODE:LSL_REF_TXN_CODE,LSL_REF_TXN_NO:LSL_REF_TXN_NO,LSL_REF_TXN_DT:LSL_REF_TXN_DT,MH_SALE_REF_TXN_CODE:MH_SALE_REF_TXN_CODE,MH_SALE_REF_TXN_NO:MH_SALE_REF_TXN_NO,MH_SALE_REF_SYS_ID:MH_SALE_REF_SYS_ID,MH_SALE_REF_TXN_DT:MH_SALE_REF_TXN_DT,LSL_CONTACT_NO:LSL_CONTACT_NO,MH_CONTACT_PERSON:MH_CONTACT_PERSON,LSL_CUST_AC_CODE:LSL_CUST_AC_CODE,MH_CUST_AC_DESC:MH_CUST_AC_DESC,MH_ADD1:MH_ADD1,LSL_ADD2:LSL_ADD2,LSL_ADD3:LSL_ADD3,LSL_ADD4:LSL_ADD4,LSL_CN_CODE:LSL_CN_CODE,LSL_ST_CODE:LSL_ST_CODE,MH_CT_CODE:MH_CT_CODE,LSL_CT_AREA_CODE:LSL_CT_AREA_CODE,LSL_POSTAL:LSL_POSTAL,LSL_MOBILE:LSL_MOBILE,LSL_PHONE:LSL_PHONE,LSL_FAX:LSL_FAX,LSL_EMAIL:LSL_EMAIL,LSL_DESC:LSL_DESC,LSL_APPOINT_DT:LSL_APPOINT_DT,USER_ID:USER_ID,MH_REF_TXN_DT:MH_REF_TXN_DT},
		    dataType:'json',
			success: function (json) {
				
				//alert("sysId-->"+json.system_id);
				//alert("msg-->"+json.error_message);
				localStorage.setItem("SYS_ID", json.system_id);
			    localStorage.setItem("TXN_NO", json.txn_no);
				
		    },error: function (xhr, ajaxOptions, thrownError) {
	    			alert("Error");
	    		} 
		  });
			
		}
	
	/* Measurement Head values ends*/
	
	/* Measurement Line values start*/
	
	function onlineStorageLines(){
		//alert("line data");
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
			 //alert("ajax Lines");
			 var SYS_ID = localStorage.getItem("SYS_ID");
			 var TXN_NO = localStorage.getItem("TXN_NO");
				
			 $.ajax({
				type: "POST",
				url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransaction_AjaxLines",
				data :  {MH_SALE_REF_SYS_ID:MH_SALE_REF_SYS_ID,SYS_ID:SYS_ID,USER_COMP_CODE:USER_COMP_CODE,MH_TXN_DT:MH_TXN_DT,LSL_LOCN_CODE:LSL_LOCN_CODE,ML_BUILD:ML_BUILD,ML_FLOOR:ML_FLOOR,ML_FLAT:ML_FLAT,ML_UNIT:ML_UNIT,ML_WIDTH:ML_WIDTH,ML_HEIGHT:ML_HEIGHT,ML_MOUNT_TYPE:ML_MOUNT_TYPE,ML_MOUNT_ON:ML_MOUNT_ON,ML_OPERATE:ML_OPERATE,ML_CONTROL:ML_CONTROL,ML_OPENING:ML_OPENING,ML_PELMET:ML_PELMET,ML_PROJECTION:ML_PROJECTION,ML_FASICA:ML_FASICA,ML_REMARKS:ML_REMARKS,LSL_REF_SYS_ID:LSL_REF_SYS_ID,USER_ID:USER_ID,ML_FULL_WIDTH:ML_FULL_WIDTH,ML_FULL_HEIGHT:ML_FULL_HEIGHT,ML_LEFT_WALL:ML_LEFT_WALL,ML_RIGHT_WALL:ML_RIGHT_WALL,ML_CEILING_UP:ML_CEILING_UP,ML_FLOOR_DOWN:ML_FLOOR_DOWN,ML_WINDOW_DEPTH:ML_WINDOW_DEPTH,ML_WINDOW_OPENING:ML_WINDOW_OPENING,ML_HANDLE_POSITION:ML_HANDLE_POSITION,ML_HANDLE_SIZE:ML_HANDLE_SIZE,ML_POWER_DISTANCE:ML_POWER_DISTANCE,ML_GYPSUM_YN:ML_GYPSUM_YN,ML_GYPSUM_WIDTH:ML_GYPSUM_WIDTH,ML_GYPSUM_HEIGHT:ML_GYPSUM_HEIGHT,ML_GYPSUM_DEPTH:ML_GYPSUM_DEPTH,ML_BULD_TYPE:ML_BULD_TYPE,ML_ROOM_NO:ML_ROOM_NO,ML_WINDOW_NO:ML_WINDOW_NO},
				 dataType:"json",
				success:function (json) {
					//alert(json.system_line_id);
					//alert(json.return_line_status);
					//alert(json.return_line_message);
					localStorage.setItem("SYS_LINE_ID", json.system_line_id);
					ajaxImage();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					alert(xhr);alert(ajaxOptions);alert(thrownError);
			    	
			    } 
			}); 
		}
	
	/* Measurement Line values ends*/
	
	/* Measurement Image values start*/
	
	function ajaxImage() {
		//alert("Img Upload Start");
	      var SYS_LINE_ID = localStorage.getItem("SYS_LINE_ID");
	      var SYS_ID = localStorage.getItem("SYS_ID");
	      var Img_location = localStorage.getItem("Path");
	      var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		  var USER_ID = localStorage.getItem("user_id");
	      $.ajax({
	        type: "POST",
	        url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_AjaxImage",
	        data :  {USER_COMP_CODE:USER_COMP_CODE,SYS_LINE_ID:SYS_LINE_ID,SYS_ID:SYS_ID,Img_location:Img_location,USER_ID:USER_ID},
	        dataType:"json",
	        success:function (json) {	
	        	/*alert("Succes->"+json);
	          	alert("stat->"+json.return_status);
	          	alert("msg->"+json.error_message);*/
	        	ajaxImage1();
	          	
	        },
			error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr);alert(ajaxOptions);alert(thrownError);
		    	
		    } 
	      });
	      
	    }
	
	function ajaxImage1() {
		//alert("ajaxImage1");
	      var SYS_LINE_ID = localStorage.getItem("SYS_LINE_ID");
	      var SYS_ID = localStorage.getItem("SYS_ID");
	      var Img_location = localStorage.getItem("Path1");
	      var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		  var USER_ID = localStorage.getItem("user_id");
		  $.ajax({
	        type: "POST",
	        url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_AjaxImage",
	        data :  {USER_COMP_CODE:USER_COMP_CODE,SYS_LINE_ID:SYS_LINE_ID,SYS_ID:SYS_ID,Img_location:Img_location,USER_ID:USER_ID},
	        dataType:"json",
	        success:function (json) {	
	        	/*alert("Succes->"+json);
	          	alert("stat->"+json.return_status);
	          	alert("msg->"+json.error_message);*/
	          	ajaxImage2();
	        }
	      });
	      
	    }
	
	function ajaxImage2() {
	    //alert("img 2 ");  
		var SYS_LINE_ID = localStorage.getItem("SYS_LINE_ID");
	      var SYS_ID = localStorage.getItem("SYS_ID");
	      var Img_location = localStorage.getItem("Path2");
	      var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		  var USER_ID = localStorage.getItem("user_id");
		  $.ajax({
	        type: "POST",
	        url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_AjaxImage",
	        data :  {USER_COMP_CODE:USER_COMP_CODE,SYS_LINE_ID:SYS_LINE_ID,SYS_ID:SYS_ID,Img_location:Img_location,USER_ID:USER_ID},
	        dataType:"json",
	        success:function (json) {
	        	/*alert("Succes->"+json);
	          	alert("stat->"+json.return_status);
	          	alert("msg->"+json.error_message);*/
	          	ajaxImage3();
	        }
	      });
	      
	    }
	
	function ajaxImage3() {
		//alert("img 3");
	      var SYS_LINE_ID = localStorage.getItem("SYS_LINE_ID");
	      var SYS_ID = localStorage.getItem("SYS_ID");
	      var Img_location = localStorage.getItem("Path3");
	      var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		  var USER_ID = localStorage.getItem("user_id");
		  $.ajax({
	        type: "POST",
	        url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_AjaxImage",
	        data :  {USER_COMP_CODE:USER_COMP_CODE,SYS_LINE_ID:SYS_LINE_ID,SYS_ID:SYS_ID,Img_location:Img_location,USER_ID:USER_ID},
	        dataType:"json",
	        success:function (json) {
	        	/*alert("Succes->"+json);
	          	alert("stat->"+json.return_status);
	          	alert("msg->"+json.error_message);*/
	          	ajaxImage4();
	        }
	      });
	      
	    }
	
	function ajaxImage4() {
		//alert("img 4");
	      var SYS_LINE_ID = localStorage.getItem("SYS_LINE_ID");
	      var SYS_ID = localStorage.getItem("SYS_ID");
	      var Img_location = localStorage.getItem("Path4");
	      var USER_COMP_CODE = localStorage.getItem("USER_COMP_CODE");
		  var USER_ID = localStorage.getItem("user_id");
		  $.ajax({
	        type: "POST",
	        url: "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_AjaxImage",
	        data :  {USER_COMP_CODE:USER_COMP_CODE,SYS_LINE_ID:SYS_LINE_ID,SYS_ID:SYS_ID,Img_location:Img_location,USER_ID:USER_ID},
	        dataType:"json",
	        success:function (json) {
	        	/*alert("Succes->"+json);
	          	alert("stat->"+json.return_status);
	          	alert("msg->"+json.error_message);*/
	        	review_complete();
	        }
	      });
	    }
	
	/* Measurement Image values ends*/
	
	/* Review pages start */
	
	/*function review_complete(sys_id,sys_head_id,lsl_sys_id){
		$.ajax
		({
		    url: 'http://www.dev.sedarspine.com/en/LogiCtr/Fetch_MeasurementTransaction',
		    type: 'POST',
		    data: 'sys_id='+sys_id +'&sys_head_id='+sys_head_id+'&lsl_sys_id='+lsl_sys_id,
		    success: function (resp)
		    {
			var Status = $('#MH_STATUS').val();
			if(Status == 'Approved')
			{
			    $('input,select,button').attr('disabled',true);
			    $('.test').attr('disabled',true);
			}
			$("#confirmation_page").html(resp);
		    }
		});
	};*/
	
	/* Review pages end*/
	
