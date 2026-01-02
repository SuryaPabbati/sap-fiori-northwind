jQuery.sap.declare("northwindv4p2.util.Service");
jQuery.sap.require("northwindv4p2.model.models");

northwindv4p2.util.Service = {
    getAppDetail: function (){
        sap.ui.core.BusyIndicator.show(0);
    }
}