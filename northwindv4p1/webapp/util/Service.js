// jQuery.sap.declare("com/surya/northwindv4p1.util.Service");
// jQuery.sap.require("com/surya/northwindv4p1.model.models");

// northwindv4p1.util.Service = {
//     getAppDetail: function (){
//         sap.ui.core.BusyIndicator.show(0);
//     }

sap.ui.define([
    "sap/ui/core/BusyIndicator"
], function (BusyIndicator) {
    "use strict";

    return {
        // This is the method you want to call
        getAppDetail: function ( okCb, oController ) {
            var that = this;
            var ok = typeof (okCb) === "function" ? okCb.bind(that) : function (oData) {
            sap.ui.core.BusyIndicator.hide();
            };
            
            // BusyIndicator.show(0);
            var oModel = this.getOwnerComponent().getModel();
            oModel.read("/Products", {
                success: ok,
                error: ok
                }
            )
            
            console.log("Service method called successfully!");
        }
    };
});


