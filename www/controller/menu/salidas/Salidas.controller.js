sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.Salidas", {
		onInit: function(){
			BaseController.prototype.writeDB();
        },
        onNavBack: function () {
			return BaseController.prototype.onNavBack();
		},
		onPressReserva: function(){
			this.getRouter().navTo("Reserva");
		},
		onPressEntrega: function(){
			this.getRouter().navTo("Entrega");
		},
		onPressSinReferencia: function(){
			this.getRouter().navTo("SinReferencia");
		}
	})
});