
var db = window.openDatabase("Spine", "1.0", "Spine Demo", 100000);
 db.transaction(queryDB, errorCB);                        

function queryDB(tx) {
	tx.executeSql('SELECT * FROM APPS_USER ', [], function (tx, results) {
		var app_user_count = results.rows.length;
		localStorage.setItem("app_user_count", app_user_count);
		
		for (var i=0; i<app_user_count; i++){
			
			
			document.getElementById("USER_COMP_CODE").innerHTML = results.rows.item(i).USER_COMP_CODE;
			document.getElementById("USER_ID").innerHTML = results.rows.item(i).USER_ID;
			document.getElementById("USER_DESC").innerHTML = results.rows.item(i).USER_DESC;
			document.getElementById("USER_PERS_CODE").innerHTML = results.rows.item(i).USER_PERS_CODE;
			document.getElementById("USER_LOCN_CODE").innerHTML = results.rows.item(i).USER_LOCN_CODE;
			
			
		}
		
	});
}
function errorCB(tx, err) {
//	alert("Error");
//	alert("Error processing SQL: "+err);
	} 
