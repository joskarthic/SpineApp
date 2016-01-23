/*alert("Query selection");
function getJobByDate(){
	var date = document.getElementById("LSH_TXN_DT").value;
	var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100 * 1024 * 1024);
	db.transaction(queryDB, errorCB); 
	alert("success");
}


function queryDB(tx) {
	alert("queryDB");
	alert(date);
//	tx.executeSql('SELECT LSH_SYS_ID, LSH_TXN_CODE, LSH_TXN_NO, LSH_VEHICLE_CODE FROM LOGI_T_SCHEDULE_HEAD WHERE LSH_TXN_DT =? collate NOCASE', [date], function (tx, results) {
	tx.executeSql('SELECT LSH_SYS_ID, LSH_TXN_CODE, LSH_TXN_NO, LSH_VEHICLE_CODE FROM LOGI_T_SCHEDULE_HEAD WHERE LSH_TXN_DT = '06-JUL-2015' AND IFNULL(LSH_APPROVE_YN,'N') = 'Y' AND EXISTS (SELECT 'X' FROM LOGI_M_TEAM,LOGI_M_TEAM_EMP WHERE LT_CODE = LSH_TEAM_CODE AND LT_CODE = LGE_TEAM_CODE AND IFNULL(LT_ACTIVE_YN,'N') = 'Y' AND LSH_TXN_DT BETWEEN LT_FROM_DT AND LT_UPTO_DT AND IFNULL(LGE_ACTIVE_YN,'N') = 'Y' AND LSH_TXN_DT BETWEEN LGE_FROM_DT AND LGE_UPTO_DT AND LGE_CODE = (SELECT USER_PERS_CODE FROM APPS_USER WHERE USER_ID = 'bharani')) AND EXISTS (SELECT 'Y' FROM LOGI_T_SCHEDULE_LINES WHERE LSL_LSH_SYS_ID = LSH_SYS_ID) UNION ALL SELECT LSH_SYS_ID, LSH_TXN_CODE, LSH_TXN_NO ,LSH_VEHICLE_CODE FROM LOGI_T_SCHEDULE_HEAD WHERE LSH_TXN_DT = '06-JUL-2015' AND IFNULL(LSH_APPROVE_YN,'N') = 'Y' AND NOT EXISTS(SELECT 'X' FROM LOGI_M_TEAM_EMP WHERE LSH_TXN_DT BETWEEN LGE_FROM_DT AND LGE_UPTO_DT AND IFNULL(LGE_ACTIVE_YN,'N') = 'Y'AND LGE_CODE = (SELECT USER_PERS_CODE FROM APPS_USER WHERE USER_ID = 'bharani'))  AND EXISTS (SELECT 'Y' FROM LOGI_T_SCHEDULE_LINES WHERE LSL_LSH_SYS_ID = LSH_SYS_ID)', [], function (tx, results) {	
		alert("query end");
		var length = results.rows.length;
		alert(length);
		alert("success");
		
	});
} 

function errorCB(tx, err) {
	//alert("Error");
	//alert("Error processing SQL: "+err);
	} */