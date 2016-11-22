"use strict";
/**
 * Created by Thinking on 09/24/2016.
 */
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return "http://139.162.52.76:8080/api/v1"; },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
exports.AppSettings = AppSettings;
//# sourceMappingURL=appSettings.js.map