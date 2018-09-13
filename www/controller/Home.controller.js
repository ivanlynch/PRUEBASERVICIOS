sap.ui.define([
	"jquery.sap.global",
	"pae/logistica/controller/BaseController",
	'sap/ui/model/json/JSONModel',
	"sap/m/MessageToast"
], function (jQuery, BaseController, MessageToast, JSONModel, ODataModel) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.Home", {
		onInit: function(){
			var oModel = this.getView().getBindingContext("Orders");
			console.log(oModel);
		},
		onPressAvisos: function(event){
			var oComponent = this.getOwnerComponent();
			oComponent.getRouter().navTo("Avisos");
			MessageToast.show("Hola!2");
		},
		onPressButton: function(){e
			MessageToast.show("Hola!");
			this.getRouter().navTo("Avisos");
		},
		onPressCualquierCosa: function(){
			MessageToast.show("Estas apretando cualquier cosa");
			this.getRouter().navTo("CualquierCosa");
		}
	})
});