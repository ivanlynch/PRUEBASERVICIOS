sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.menu.salidas.entrega.Entrega", {
		onInit: function(){
        },
        onNavBack: function () {
			return BaseController.prototype.onNavBack();
		}
	})
});