sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.menu.salidas.reserva.escanear.Escanear", {
		onInit: function(){
        },
        onNavBack: function () {
			return BaseController.prototype.onNavBack();
		},
		onCamera: function(){
			jQuery("__component0---Reserva--inputSalidasScanner-title").on(
				"keypress",
				function(event){
					MessageToast.show(evenet.keyCode);
				}
			);
		}
	})
});