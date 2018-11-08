sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.EntregaEntrante", {
		onInit: function(){
			var oRouter = this.getRouter();
			oRouter.getRoute("EntregaEntrante").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent){

			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path : "/" + (oArgs.OrderID - 1)+ "/",
				model: "invoice2"
			});
		},
		_onBindingChange: function(oEvent){
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		onPressButton: function(oEvent){
	
		},
		onNavBack: function () {
			return BaseController.prototype.onNavBack();
		}
	});

});