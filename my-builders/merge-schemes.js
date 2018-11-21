const fs = require('fs');
const _ = require('lodash');

// https://github.com/meltedspark/angular-builders/blob/32558a7d153cf2ddfba4f4f95b3c5e50c6feffca/merge-schemes.ts


const schemesToMerge = [
  {
    originalSchemaPath: '@angular-devkit/build-angular/src/browser/schema.json',
    schemaExtensionPaths: [ './my-browser-builder/schema.ext.json' ],
    newSchemaPath: './my-browser-builder/schema.json'
  }
];

for (const customSchema of schemesToMerge) {
  const originalSchema = require(customSchema.originalSchemaPath);
  const schemaExtensions = customSchema.schemaExtensionPaths.map(path => require(path));
  const newSchema = schemaExtensions.reduce((extendedSchema, currentExtension) => _.merge(extendedSchema, currentExtension), _.cloneDeep(originalSchema));
  console.info(customSchema.newSchemaPath);
  fs.writeFileSync(customSchema.newSchemaPath, JSON.stringify(newSchema, null, 2), 'utf-8');
}
