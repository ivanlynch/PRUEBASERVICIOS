sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("pae.logistica.controller.BaseController", {

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true);
			}
		},
		prepareIDB: function(){

			//Checkeamos que el navegador soporte IndexedDB
			if(window.indexedDB == null){

				console.error("IndexedDB is not supported in this browser");
				return null;

			}else{

				//Revisa y crea el almacen de objetos
				var request = window.indexedDB.open("OFFLINE_DB", 1);

				request.onerror = function(event){
					console.log("No funca");
				}
	
				request.onsuccess = function(event){
					window.db = request.result;
				};
			}

			
		},

		writeToIDB: function(data){
			//Crea la transaccion
			var oTransaction = window.oController.myDB.transaction(["COMMENTS"], "readwrite");

			//Obtiene el almacen de objetos requerido para esta transaccion
			var oDataStore = oTransaction.objectStore("COMMENTS");

			//Inserta la informacion
			oDataStore.add("data", {keyPath: "id", autoIncrement: true});
		}
	});

});
