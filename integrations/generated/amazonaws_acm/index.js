'use strict';

let datafire = require('datafire');
let openapi = require('./openapi.json');

let aws = require('aws-sdk');
const INTEGRATION_ID = 'amazonaws_acm';
const SDK_ID = 'ACM';

let integ = module.exports = new datafire.Integration({
  id: INTEGRATION_ID,
  title: openapi.info.title,
  description: openapi.info.description,
  logo: openapi.info['x-logo'],
});
integ.security[INTEGRATION_ID]= {
  integration: INTEGRATION_ID,
  accessKeyId: "",
  secretAccessKey: "",
  region: "AWS region (if applicable)",
}

function maybeCamelCase(str) {
  return str.replace(/_(\w)/g, (match, char) => char.toUpperCase())
}

for (let path in openapi.paths) {
  for (let method in openapi.paths[path]) {
    if (method === 'parameters') continue;
    let op = openapi.paths[path][method];
    let actionID = op.operationId;
    let functionID = actionID.charAt(0).toLowerCase() + actionID.substring(1);
    let inputParam = (op.parameters || []).filter(p => p.in === 'body')[0] || {};
    let response = (op.responses || {})[200] || {};
    let inputSchema = {
      type: 'object',
      properties: {},
    };
    if (inputParam.schema) inputSchema.allOf = [inputParam.schema];
    (op.parameters || []).forEach(p => {
      if (p.name !== 'Action' && p.name !== 'Version' && p.name !== 'body' && !p.name.startsWith('X-')) {
        inputSchema.properties[maybeCamelCase(p.name)] = {type: p.type};
        if (p.required) {
          inputSchema.required = inputSchema.required || [];
          inputSchema.required.push(p.name);
        }
      }
    })

    function getSchema(schema) {
      if (!schema) return;
      return Object.assign({definitions: openapi.definitions}, schema);
    }
    integ.addAction(actionID, new datafire.Action({
      inputSchema: getSchema(inputSchema),
      outputSchema: getSchema(response.schema),
      handler: (input, context) => {
        let ec2 = new aws[SDK_ID](Object.assign({
          version: openapi.info.version,
        }, context.accounts[INTEGRATION_ID]));
        return ec2[functionID](input).promise()
          .then(data => {
            return JSON.parse(JSON.stringify(data));
          })
      }
    }));
  }
}


