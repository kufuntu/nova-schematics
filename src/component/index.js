"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const schematics_2 = require("@angular-devkit/schematics");
const stringUtils = { dasherize: strings_1.dasherize, classify: strings_1.classify };
function page(options) {
    const templateSource = schematics_1.apply(schematics_1.url("./files"), [
        schematics_1.template(Object.assign({}, stringUtils, options)),
        schematics_1.move("src/app/pages/templates/")
    ]);
    return schematics_2.chain([schematics_1.branchAndMerge(schematics_2.chain([schematics_2.mergeWith(templateSource)]))]);
}
exports.page = page;
//# sourceMappingURL=index.js.map