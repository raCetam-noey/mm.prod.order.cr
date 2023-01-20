sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("mm.prod.order.cr.controller.List", {
            onInit: function () {

            },

            navCreate: function() {
            this.getOwnerComponent().getRouter().navTo("Create", null);

            },

            navDetail: function(oEvent) {

                var oTable = oEvent.getSource();
                var oContext = oTable.getSelectedItem().getBindingContext();
                this.getOwnerComponent().getRouter().navTo("Detail", {
                    key: oContext.getPath().substr(1)
            } );
            }
        });
    });
