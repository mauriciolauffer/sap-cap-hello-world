"use strict";

sap.ui.define(["sap/fe/core/AppComponent"], function (AppComponent) {
  return AppComponent.extend("bookshop.Component", {
    metadata: { manifest: "json" },
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
  });
});
