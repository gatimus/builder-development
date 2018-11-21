"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_angular_1 = require("@angular-devkit/build-angular");
class MyBrowserBuilder extends build_angular_1.BrowserBuilder {
    constructor(context) {
        super(context);
    }
    run(builderConfig) {
        // do custom
        return super.run(builderConfig);
    }
}
exports.MyBrowserBuilder = MyBrowserBuilder;
exports.default = MyBrowserBuilder;
