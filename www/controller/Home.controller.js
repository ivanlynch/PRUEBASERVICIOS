sap.ui.define([
	"jquery.sap.global",
	"pae/logistica/controller/BaseController",
	'sap/ui/model/json/JSONModel',
	"sap/m/MessageToast"
], function (jQuery, BaseController, MessageToast, JSONModel) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.Home", {
		onInit: function(){
			var oModel = new sap.ui.model.odata.v4.ODataModel({
				groupId : "$direct",
				synchronizationMode : "None",
				serviceUrl : "https://sandbox.api.sap.com/sapb1/b1s/v2/"
			},
			true,
			"S0016198377",
			"@Lynch12");
			var mHeaders = {
				"APIKey" : "s9mEiQAd34aGhHLHC3XTq6y2UiYyhap7"
			}
			oModel.setHeaders(mHeaders);
			this.getView().setModel(oModel);
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