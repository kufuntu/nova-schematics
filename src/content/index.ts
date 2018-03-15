import {
  Rule,
  apply,
  move,
  template,
  url,
  branchAndMerge
} from "@angular-devkit/schematics";
import { dasherize, classify } from "@angular-devkit/core/src/utils/strings";
import { chain, mergeWith } from "@angular-devkit/schematics";

const stringUtils = { dasherize, classify };

export function content(options: any): Rule {
  const templateSource = apply(url("./files"), [
    template({
      ...stringUtils,
      ...options
    }),
    move("src/app/pages/templates_content/")
  ]);

  return chain([branchAndMerge(chain([mergeWith(templateSource)]))]);
}
