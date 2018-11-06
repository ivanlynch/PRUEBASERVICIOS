sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("pae.logistica.controller.BaseController", {
		onInit: function(){
			
		},
		writeDB: function(){

			var item = {
				NroOrden: 1,
				Titulo: "Probando",
				Fecha: "2018"
			};

			var tx = window.PAE_SESSION.OFFLINE_DB.transaction(["Orders"], 'readwrite');

			// Crea una almacén de objetos en la transacción
			var almacen = tx.objectStore("Orders");
			var agregar = almacen.add(item);

		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			console.log(window.probando);
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true);
			}
		}
	});

});
