sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageBox"

], function (Controller, JSONModel, MessageBox) {
    "use strict";
    let _this,
        _v;
    return Controller.extend("mm.prod.order.cr.controller.Create", {
        /**
         * @override
         */
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("Create").attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function (oEvent) {
            let oModel = this.getView().getModel();

            oModel.metadataLoaded().then(function () {
                var oContext = oModel.createEntry("YC_ORDER_BAPI", null);
                this.getView().bindElement({path: oContext.getPath()});

            }.bind(this));


        },
        onSave: function () {
            _this = this;
            _v = this.getView();
            var oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle(),
                oModel = _v.getModel(),
                oSmartForm = _v.byId("idForm");
 

                oModel.submitChanges({
                    success: function () {
                        oModel.refresh();
                        _this.navList();
                    }.bind(this),
                    error: function (oError) {
                        if (oError.StatusCode === 400) {
                            oSmartForm.setShowMessages(true);
                            oSmartForm.setShowMessageOpenButton(true);
                        } else {
                            MessageBox.error(oResourceBundle.getText("error"));
                        

                    }
                }
            });


            
        },
        onCancel: function () {
            _v = this.getView();
            var oModel = _v.getModel();
            if (oModel.hasPendingChanges()) {
                oModel.resetChanges();
            }
            this.getOwnerComponent().getRouter().navTo("RouteList", null);
        },
        navList: function () {
            this.getOwnerComponent().getRouter().navTo("RouteList", null);
        }
    });
});
