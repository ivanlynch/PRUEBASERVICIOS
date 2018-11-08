sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast",
	"pae/logistica/js/Utils"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.menu.salidas.reserva.ingresar.ReservaDetalle", {
		onInit: function(){
			var oRouter = this.getRouter();
			oRouter.getRoute("ReservaDetalle").attachMatched(this._onRouteMatched, this);
			debugger;
		},
		_onRouteMatched: function(oEvent){

			var oArgs, oView, cCollection;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			cCollection = oView.getModel("reservas").getData();

			//En este metodo le pasamos el path del objeto y el modelo que queremos bindear
			oView.bindElement({
				path : "/" + ObtenerIndice(oArgs.ReservaID, cCollection) + "/",
				model: "reservas"
			});
		},
		_onBindingChange: function(oEvent){
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
        onNavBack: function () {
			return BaseController.prototype.onNavBack();
		}
	})
});