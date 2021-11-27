sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("iitp.zui52008.controller.View1", {
			onInit: function () {

                let oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);

			},

            onClick : function(oEvent){
                let sPath = oEvent.getSource().getBindingContext().getPath();
                let oTable = this.byId("idConnTable");
                oTable.bindElement(sPath);

            },

            onPanel : function (oEvent){
                // let oCombo = this.getView().byId("idCombo");
                // let selectKey = oCombo.getSelectedKey();
                let sPath = oEvent.getSource().getBindingContext().getPath();
                let oPanel = this.getView().byId("idPanel");
                oPanel.bindElement(sPath);

            },

            onSelect : function(oEvent) {
                //let oCombo = this.getView().byId("idCombo");
                let sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                let oCombo = this.getView().byId("idConnTable");
                oCombo.bindElement(sPath);

            }
		});
	});


    