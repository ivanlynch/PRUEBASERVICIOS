sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";
	var imageRoute;

	return Controller.extend("pae.logistica.controller.AvisoAdd", {
		onInit: function(){
			var data = {
				fechaActual: new Date()
			}
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(data);
			sap.ui.getCore().setModel(oModel);
		},
		onCamera: function(){

			document.addEventListener("deviceready", onDeviceReady, false);
			
			var pictureSource, destinationType;

			function onDeviceReady() {
				pictureSource = navigator.camera.PictureSourceType;
				destinationType = navigator.camera.DestinationType;
			}

			function TomarFoto() {
				navigator.camera.getPicture(onSuccess, onFail, {
					quality: 50,
					destinationType: destinationType.FILE_URI,
					saveToPhotoAlbum: true
				});
			}

			function onSuccess(imageData) {
				var smallImage = document.getElementById('smallImage');
				smallImage.src = "data:image/jpeg;base64," + imageData;
			}


			function onFail(){
				alert('Failed because: ' + message);
			}

			return TomarFoto();
		},
		onSelectRadioButtonGroup: function(oEvent){
			if(oEvent.getSource().getSelectedButton().getText() != "Confidencial"){
				sap.ui.getCore().byId("__component0---Home--formConfidencial").setVisible(false);
			}else{
				sap.ui.getCore().byId("__component0---Home--formConfidencial").setVisible(true);
			}
		},
		onGuardar: function(){
			MessageToast.show("Su imágen ha sido almacenada en la memoria del teléfono", {
				duration: 1500,
				autoClose: false
			});
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("App", true);
		}
	});
});