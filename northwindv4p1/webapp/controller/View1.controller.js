sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/surya/northwindv4p1/util/Service",
    "com/surya/northwindv4p1/model/models"
], (Controller, Service, models) => {
    "use strict";

    return Controller.extend("com.surya.northwindv4p1.controller.View1", {
        onInit() {
        },

        onTestV4() {
            // "Testing the git hub"
            var oModel = this.getView().getModel();

            var oModel = this.getOwnerComponent().getModel();
            var okFun = function (odata) {
                sap.ui.core.BusyIndicator.hide();
            }
            Service.getAppDetail.call(this, okFun);
            // com.surya.northwindv4p1.util.Service.getAppDetail.call(this);
            
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