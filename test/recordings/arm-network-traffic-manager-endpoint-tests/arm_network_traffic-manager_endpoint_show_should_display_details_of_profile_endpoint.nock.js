// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"xplattmpendptdns5987.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '1f71086e-4fc1-46dd-843b-bc4b7a981898',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bbd482f2-05eb-4202-a701-6edf71be09c8',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141533Z:bbd482f2-05eb-4202-a701-6edf71be09c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"xplattmpendptdns5987.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '1f71086e-4fc1-46dd-843b-bc4b7a981898',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bbd482f2-05eb-4202-a701-6edf71be09c8',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141533Z:bbd482f2-05eb-4202-a701-6edf71be09c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:33 GMT',
  connection: 'close' });
 return result; }]];