sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.CualquierCosa", {
		onInit: function(){
            console.log("Estoy aca");
		}
	});

});