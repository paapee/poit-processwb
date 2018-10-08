sap.ui.controller("test_helloworld.main", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf test_helloworld.main
	 */
	
	
	onInit : function() {

		var ITF1 = new sap.m.IconTabFilter({
			key : "Tab1",
			icon : "sap-icon://hr-approval",
			iconColor : "Neutral",
			text : "Pre-payroll processing",
			design : "Vertical",
			showAll : false,
			textDirection : "Inherit",
			enabled : true,
			visible : true,
			iconDensityAware : false,
		});
		
		this.byId("IconTabMain").addItem(ITF1);
		
		var ITF2 = new sap.m.IconTabFilter({
			key : "Tab2",
			icon : "sap-icon://hr-approval",
			iconColor : "Neutral",
			text : "Pre-payroll processing",
			design : "Vertical",
			showAll : false,
			textDirection : "Inherit",
			enabled : true,
			visible : true,
			iconDensityAware : false,
		});
		
		this.byId("IconTabMain").addItem(ITF2);

	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
 * (NOT before the first rendering! onInit() is used for that one!).
 * @memberOf test_helloworld.main
 */
//	onBeforeRendering: function() {
//
//	},
/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 * This hook is the same one that SAPUI5 controls get after being rendered.
 * @memberOf test_helloworld.main
 */
//	onAfterRendering: function() {
//
//	},
/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 * @memberOf test_helloworld.main
 */
//	onExit: function() {
//
//	}
});