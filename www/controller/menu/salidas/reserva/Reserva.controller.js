sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.menu.salidas.reserva.Reserva", {
		onInit: function(){
        },
        onNavBack: function () {
			return BaseController.prototype.onNavBack();
		},
		onPressEscanear: function(){
			this.getRouter().navTo("Escanear");
		},
		onPressIngresar: function(){
			this.getRouter().navTo("Ingresar");
		},
		onPressListado: function(){
			this.getRouter().navTo("Listado");
		},
	})
});