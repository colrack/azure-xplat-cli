// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /><DefaultServiceVersion>2013-08-15</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bcb01ff8-0001-0026-66ab-9e0db3000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '25588852-0001-0012-0cab-9ea21b000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ec8ccb11-0002-003a-33ab-9ed5a4000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '64b58ba9-0002-0025-56ab-9e0eb4000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4de9a567-0003-0011-1bab-9ea11c000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e818ea54-0003-0039-37ab-9ed6a3000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8e0d2917-001a-004d-1dab-9e50e5000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5d53d25b-001a-0010-3eab-9ea0e1000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:22 GMT' });
 return result; }]];