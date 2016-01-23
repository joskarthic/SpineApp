var pictureSource; 
var destinationType; 

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}



function onPhotoFileSuccess(imageData) {
	
	console.log(JSON.stringify(imageData));

	  var smallImage = document.getElementById('imgProfile');

	  smallImage.style.display = 'block';

	  
	  smallImage.src = imageData;
	}


function onPhotoURISuccess(imageURI) {

    console.log(imageURI);

    var galleryImage = document.getElementById('imgProfile');
    galleryImage.style.display = 'block';
    
    galleryImage.src = imageURI;
}

/* upload and store sd card  */

function onPhotoDataSuccess(imageURI) {
	//alert("Path->"+imageURI);
	var imgProfile = document.getElementById('imgProfile');
	imgProfile.style.display = 'block';
	var path = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	localStorage.setItem("Img_location", path);
	imgProfile.src = imageURI;
//	upload();
	movePic(imageURI);
}

function onPhotoDataSuccess1(imageURI) {
	var img = document.getElementById('imgProfile1');
	img.style.display = 'block';
	var path1 = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	localStorage.setItem("Img_location1", path1);
	img.src = imageURI;
	//upload1();
	movePic1(imageURI);
}

function onPhotoDataSuccess2(imageURI) {
	var imgloc = document.getElementById('imgProfile2');
	imgloc.style.display = 'block';
	var path2 = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	localStorage.setItem("Img_location2", path2);
	imgloc.src = imageURI;
    movePic2(imageURI);
  //  upload2();
}

function onPhotoDataSuccess3(imageURI) {
	var imgpath1 = document.getElementById('imgProfile3');
	imgpath1.style.display = 'block';
	var path3 = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	localStorage.setItem("Img_location3", path3);
	imgpath1.src = imageURI;  
	movePic3(imageURI);
	//upload3();
}

function onPhotoDataSuccess4(imageURI) {
	var imgpath2 = document.getElementById('imgProfile4');
	imgpath2.style.display = 'block';
	var path4 = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	localStorage.setItem("Img_location4", path4);
    imgpath2.src = imageURI;
    movePic4(imageURI);
   // upload4();
   
}

function onFail(message) {
    alert('Failed because: ' + message);
}



/* Move pic path Start */

function movePic(file){ 
    
	window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError); 
} 


function resolveOnSuccess(entry){ 
    var d = new Date();
    var n = d.getTime();
    var newFileName = n + ".png";
    var myFolderApp = "SpineMeasurement";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
    	//alert("entered fileSys: " + fileSys.root.toURL());
    	localStorage.setItem("LocalDirectory", fileSys.root.toURL());
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                    	entry.moveTo(directory, newFileName,  successMove, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}


function successMove(entry) {
	var Path = entry.fullPath;
	var Directory = localStorage.getItem("LocalDirectory");
	//alert("dir->"+Directory);
	var fullPath = Directory+Path;
	//alert("fullPath->"+fullPath);
	localStorage.setItem("ImgPath", fullPath);
}

/* Move pic path end */

/* Move pic path 1 Start */

function movePic1(file){ 
    
	window.resolveLocalFileSystemURI(file, resolveOnSuccess1, resOnError); 
} 


function resolveOnSuccess1(entry){ 
    var d = new Date();
    var n = d.getTime();
    
    var newFileName = n + ".png";
    var myFolderApp = "SpineMeasurement";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
    	localStorage.setItem("LocalDirectory", fileSys.root.toURL());   
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove1, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}


function successMove1(entry) {
	var Path = entry.fullPath;
	var Directory = localStorage.getItem("LocalDirectory");
	//alert("dir->"+Directory);
	var fullPath = Directory+Path;
	//alert("fullPath->"+fullPath);
	localStorage.setItem("ImgPath1", fullPath);
}

/* Move pic path 1 end */

/* Move pic path 2 Start */

function movePic2(file){ 
    
	window.resolveLocalFileSystemURI(file, resolveOnSuccess2, resOnError); 
} 


function resolveOnSuccess2(entry){ 
    var d = new Date();
    var n = d.getTime();
    
    var newFileName = n + ".png";
    var myFolderApp = "SpineMeasurement";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
    	localStorage.setItem("LocalDirectory", fileSys.root.toURL());
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove2, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}


function successMove2(entry) {
	var Path = entry.fullPath;
	var Directory = localStorage.getItem("LocalDirectory");
	//alert("dir->"+Directory);
	var fullPath = Directory+Path;
	//alert("fullPath->"+fullPath);
	localStorage.setItem("ImgPath2", fullPath);
}

/* Move pic path 2 end */

/* Move pic path 3 Start */

function movePic3(file){ 
    
	window.resolveLocalFileSystemURI(file, resolveOnSuccess3, resOnError); 
} 


function resolveOnSuccess3(entry){ 
    var d = new Date();
    var n = d.getTime();
    
    var newFileName = n + ".png";
    var myFolderApp = "SpineMeasurement";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
    	localStorage.setItem("LocalDirectory", fileSys.root.toURL());
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove3, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}


function successMove3(entry) {
	var Path = entry.fullPath;
	var Directory = localStorage.getItem("LocalDirectory");
	//alert("dir->"+Directory);
	var fullPath = Directory+Path;
	//alert("fullPath->"+fullPath);
	localStorage.setItem("ImgPath3", fullPath);
}

/* Move pic path 3 end */

/* Move pic path 4 Start */

function movePic4(file){ 
    
	window.resolveLocalFileSystemURI(file, resolveOnSuccess4, resOnError); 
} 


function resolveOnSuccess4(entry){ 
    var d = new Date();
    var n = d.getTime();
    
    var newFileName = n + ".png";
    var myFolderApp = "SpineMeasurement";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
    	localStorage.setItem("LocalDirectory", fileSys.root.toURL());
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove4, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}


function successMove4(entry) {
	var Path = entry.fullPath;
	var Directory = localStorage.getItem("LocalDirectory");
	//alert("dir->"+Directory);
	var fullPath = Directory+Path;
	//alert("fullPath->"+fullPath);
	localStorage.setItem("ImgPath4", fullPath);
}

/* Move pic path 4 end */


function resOnError(error) {
    alert(error.code);
}

/* end */

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
		quality: 50, 
		targetWidth: 600,
		targetHeight: 600,
		destinationType: destinationType.FILE_URI 
	});

}

function capturePhoto1() {
    navigator.camera.getPicture(onPhotoDataSuccess1, onFail, {
		quality: 50, 
		targetWidth: 600,
		targetHeight: 600,
		destinationType: destinationType.FILE_URI 
	});

}

function capturePhoto2() {
    navigator.camera.getPicture(onPhotoDataSuccess2, onFail, {
		quality: 50, 
		targetWidth: 600,
		targetHeight: 600,
		destinationType: destinationType.FILE_URI 
	});

}

function capturePhoto3() {
    navigator.camera.getPicture(onPhotoDataSuccess3, onFail, {
		quality: 50, 
		targetWidth: 600,
		targetHeight: 600,
		destinationType: destinationType.FILE_URI 
	});

}

function capturePhoto4() {
    navigator.camera.getPicture(onPhotoDataSuccess4, onFail, {
		quality: 50, 
		targetWidth: 600,
		targetHeight: 600,
		destinationType: destinationType.FILE_URI 
	});

}


function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 30,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: source
    });
}

function onFail(message) {
    //alert('Failed because: ' + message);
}

/* Offline to send images from Online start */

function localDatasend(){
	var imageURI = localStorage.getItem("ImgPath");
 	var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    var params = new Object();
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    ft.upload(imageURI, "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_UploadImage", win, fail, options, false);
    localDatasend1();
}

function localDatasend1(){
	var imageURI = localStorage.getItem("ImgPath1");
 		var options = new FileUploadOptions();
 	    options.fileKey = "file";
 	    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 	    options.mimeType = "image/jpeg";
 	    var params = new Object();
 	    options.params = params;
 	    options.chunkedMode = false;
 	    var ft = new FileTransfer();
 	    ft.upload(imageURI, "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_UploadImage", win1, fail, options, false);
 	    localDatasend2();
}

function localDatasend2(){
	var imageURI = localStorage.getItem("ImgPath2");
 		alert(imageURI);
 		var options = new FileUploadOptions();
 	    options.fileKey = "file";
 	    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 	    options.mimeType = "image/jpeg";
 	    var params = new Object();
 	    options.params = params;
 	    options.chunkedMode = false;
 	    var ft = new FileTransfer();
 	    ft.upload(imageURI, "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_UploadImage", win2, fail, options, false);
 	    localDatasend3();
}

function localDatasend3(){
	var imageURI = localStorage.getItem("ImgPath3");
	if(imageURI != null){
 		alert(imageURI);
 		var options = new FileUploadOptions();
 	    options.fileKey = "file";
 	    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 	    options.mimeType = "image/jpeg";
 	    var params = new Object();
 	    options.params = params;
 	    options.chunkedMode = false;
 	    var ft = new FileTransfer();
 	    ft.upload(imageURI, "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_UploadImage", win3, fail, options, false);
 	    localDatasend4();
 	}
}

function localDatasend4(){
	var imageURI = localStorage.getItem("ImgPath4");
	if(imageURI != null){
 		alert(imageURI);
 		var options = new FileUploadOptions();
 	    options.fileKey = "file";
 	    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 	    options.mimeType = "image/jpeg";
 	    var params = new Object();
 	    options.params = params;
 	    options.chunkedMode = false;
 	    var ft = new FileTransfer();
 	    ft.upload(imageURI, "http://www.dev.sedarspine.com/en/spineLogisticsApp/MeasurementTransactionLines_UploadImage", win4, fail, options, false);
 	}
	
}

/* Offline to send images from Online end */

function win(r) {
   // alert("Response = " + r.response);
    localStorage.setItem("Path", r.response);
    localStorage.removeItem("ImgPath");
}

function win1(r) {
    //alert("Response = " + r.response);
    localStorage.setItem("Path1", r.response);
    localStorage.removeItem("ImgPath1");
}

function win2(r) {
    //alert("Response = " + r.response);
    localStorage.setItem("Path2", r.response);
    localStorage.removeItem("ImgPath2");
}
function win3(r) {
   // alert("Response = " + r.response);
    localStorage.setItem("Path3", r.response);
    localStorage.removeItem("ImgPath3");
}

function win4(r) {
    //alert("Response = " + r.response);
    localStorage.setItem("Path4", r.response);
    localStorage.removeItem("ImgPath4");
  //  pathstart();
}

function fail(error) {
	alert("error");
	alert("An error has occurred: Code = " + error.code);
	alert("upload error source " + error.source);
	alert("upload error target " + error.target);
}
function pathstart(){
	var Path = localStorage.getItem("Path");
	var Path1 = localStorage.getItem("Path1");
	var Path2 = localStorage.getItem("Path2");
	var Path3 = localStorage.getItem("Path3");
	var Path4 = localStorage.getItem("Path4");
	alert("Path-->"+Path);
	alert("Path1-->"+Path1);
	alert("Path2-->"+Path2);
	alert("Path3-->"+Path3);
	alert("Path4-->"+Path4);
}