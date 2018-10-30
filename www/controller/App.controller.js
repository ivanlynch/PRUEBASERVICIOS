sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.App", {
		onInit: function(){

			var objeto = [{
				"nombre": "Ivan",
				"apellido": "Lynch",
				"edad": 21
			}];

			BaseController.prototype.prepareIDB();
			BaseController.prototype.writeToIDB(objeto[0]);
		},
		onLogin: function(){
			MessageToast.show("Logeando");
			this.getRouter().navTo("Home");
		}
	});

});