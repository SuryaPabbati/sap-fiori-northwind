sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/surya/northwindv4p2/util/Service"
], (Controller, Service) => {
    "use strict";

    return Controller.extend("sap.surya.northwindv4p2.controller.View1", {
        onInit() {
        },

        onTestV4() {

            var oModel = this.getView().getModel();

            var oModel = this.getOwnerComponent().getModel();
            northwindv4p2.util.Service.getAppDetail.call(this);
            sap.ui.core.BusyIndicator.show();
            oModel.read("/Categories", {
            filters: [],
            success: function (oDATA){
                sap.ui.core.BusyIndicator.hide();
            },
            error: function (response) {
                sap.ui.core.BusyIndicator.hide();
                var sMsg = response.responseText;
                var sError = "Error call service!!";
                if (sMsg !== undefined) {
                    try {
                        var oMessage = JSON.parse(sMsg);
                        if (oMessage && oMessage.error && oMessage.error.message) {
                            sError = oMessage.error.message.value;
                        } else {
                            sError = "Error " + oMessage.statusCode + "Connection Failed for " + oMessage.requestUri;
                        }
                    } catch (e) {
                        sError = sMsg;
                    }
                }
                var oError = {
                    msg: sError
                };
                sap.m.MessageToast.show(oError.msg);
            }.bind(this)
        })
        }
    });
});