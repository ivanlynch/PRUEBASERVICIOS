sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.Home", {
		onInit: function(){
			BaseController.prototype.prepareIDB();
		},
		onItemListPressed: function(oEvent){
			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext("invoice2");
			this.getRouter().navTo("EntregaEntrante", {
				OrderID: oCtx.getProperty("EEID")
			});
		}
	})
});