sap.ui.define([
	"pae/logistica/controller/BaseController",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"pae/logistica/js/Utils"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("pae.logistica.controller.menu.salidas.reserva.Reserva", {
		onInit: function(){
        },
        onNavBack: function () {
			return BaseController.prototype.onNavBack();
		},
		onPressEscanear: function(){
			var that = this;
			var reservas = this.getView().getModel("reservas").getData();
			var dialog = new sap.m.Dialog({
				title: 'Escanear Reserva',
				type: 'Message',
				content: [
					new sap.m.Label({
						text: 'Acerque su lector al codigo QR',
						textAlign: sap.ui.core.TextAlign.Center
					}),
				],
				
				afterOpen: function(){
					$(document).on('keydown', function(e){
						e.preventDefault();
						MessageToast.show(e.keyCode);
					});
				},

				endButton: new sap.m.Button({
					text: 'Cancelar',
					press: function(){
						dialog.destroy();
					}
				})
			});

			dialog.open();
		},
		onPressIngresar: function(){
			var that = this;
			var reservas = this.getView().getModel("reservas").getData();
			var dialog = new sap.m.Dialog({
				title: 'Ingresar Reserva',
				type: 'Message',
				content: [
					new sap.m.Label({
						text: 'Ingresar numero de reserva :'
					}),
					new sap.m.Input( "inputreservas", {
						placeholder: 'Ingresar Numero...'
					})
				],
				beginButton: new sap.m.Button({
					text: 'Confirmar',
					press: function(){
						var sText = sap.ui.getCore().getControl("inputreservas").getValue();

						if(ObtenerIndice(parseInt(sText), reservas) != -1){
							that.getRouter().navTo("ReservaDetalle", {
								ReservaID: sText
							});
							
							dialog.close();
						}else{
							new sap.m.MessageBox.error("La reserva " + sText + " no existe o no esta disponible");
						}
					}
				}),
				endButton: new sap.m.Button({
					text: 'Cancelar',
					press: function(){
						dialog.destroy();
					}
				}),
				afterClose: function(){
					dialog.destroy();
				}
			});

			dialog.open();
		},
		onPressListado: function(){
			this.getRouter().navTo("Listado");
		},
	})
});