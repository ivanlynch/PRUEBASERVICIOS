sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.App", {
		onInit: function(){

		},
		onLogin: function(){
			/*
			var triggered = false;
			var UserID = this.getView().byId("UserID").getValue();
			var Password = this.getView().byId("Password").getValue();
			if(!triggered){
				triggered = true;
				if((UserID != "Admin") && (Password != "1234")){
					MessageToast.show("Usuario Incorrecto");
				}else{
					MessageToast.show("Validando Usuario", {
						duration: 1500,
						autoClose: false,
						onClose: function(){
							MessageToast.show("Usuario Correcto", {
								duration: 1500,
								autoClose: false
							});
							oRouter.navTo("Home");
						}
					});
				}
			}else {
				triggered = false;
			}
			*/
			MessageToast.show("Logeando");
			this.getRouter().navTo("Home");
		}
	});

});