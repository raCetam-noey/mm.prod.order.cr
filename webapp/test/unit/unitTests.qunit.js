/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mm.prod.order.cr/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
