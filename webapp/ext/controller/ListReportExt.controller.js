sap.ui.define([
    "sap/ui/model/Filter", 
    "sap/ui/model/FilterOperator",
    "sap/ui/comp/smartfilterbar/SmartFilterBar", 
    "sap/m/ComboBox"
], function (Filter, FilterOperator, SmartFilterBar, ComboBox) {
    "use strict";
    return {
        getCustomAppStateDataExtension: function (oCustomData) {
            //the content of the custom field will be stored in the app state, so that it can be restored later, for example after a back navigation.
            //The developer has to ensure that the content of the field is stored in the object that is passed to this method.
            if (oCustomData) {
                var oCustomField1 = this.oView.byId("cbPaisCustom");
                if (oCustomField1) {
                    oCustomData.PaisCustom = oCustomField1.getSelectedKey();
                }
            }
        },
        restoreCustomAppStateDataExtension: function (oCustomData) {
            //in order to restore the content of the custom field in the filter bar, for example after a back navigation,
            //an object with the content is handed over to this method. Now the developer has to ensure that the content of the custom filter is set to the control
            if (oCustomData) {
                if (oCustomData.PaisCustom) {
                    var oComboBox = this.oView.byId("cbPaisCustom");
                    oComboBox.setSelectedKey(
                        oCustomData.PaisCustom
                    );
                }
            }
        },
        onBeforeRebindTableExtension: function (oEvent) {
            var oBindingParams = oEvent.getParameter("bindingParams");
            var oCombo = this.byId("cbPaisCustom");
            if (oCombo && oCombo.getSelectedKey()) {
                oBindingParams.filters.push(
                    new Filter("ShipCountry", FilterOperator.EQ, oCombo.getSelectedKey())
                );
            }
        },
        onPressResumo: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onPressResumo: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});