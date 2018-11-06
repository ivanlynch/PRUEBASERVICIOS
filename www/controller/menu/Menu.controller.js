sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.menu.Menu", {
		onInit: function(){
        },
        onPressRecepcion: function(){
			this.getRouter().navTo("Home");
        },
        onPressSalidas: function(){
            this.getRouter().navTo("Salidas");
        }
	})
});