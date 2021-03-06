/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __ = require('underscore');
var constants = require('./constants');
var util = require('util');
var utils = require('../../../util/utils');
var resourceUtils = require('../resource/resourceUtils');

function covertToAzureFormat(recordSet) {
  var parameters = {
    recordSet: {
      name: recordSet.name,
      location: constants.dnsZone.defLocation,
      properties: {
        ttl: recordSet.ttl
      }
    }
  };

  switch (recordSet.type) {
    case 'SOA' :
      parameters.recordSet.properties.soaRecord = recordSet.records[0];
      break;
    case 'A' :
      parameters.recordSet.properties.aRecords = recordSet.records;
      break;
    case 'AAAA' :
      parameters.recordSet.properties.aaaaRecords = recordSet.records;
      break;
    case 'NS' :
      parameters.recordSet.properties.nsRecords = recordSet.records;
      break;
    case 'MX' :
      parameters.recordSet.properties.mxRecords = recordSet.records;
      break;
    case 'CNAME':
      parameters.recordSet.properties.cnameRecord = recordSet.records[0];
      break;
    case 'TXT' :
      parameters.recordSet.properties.txtRecords = recordSet.records;
      break;
    case 'SRV' :
      parameters.recordSet.properties.srvRecords = recordSet.records;
      break;
    case 'PTR' :
      parameters.recordSet.properties.ptrRecords = recordSet.records;
      break;
  }
  return parameters;
}

function getShortType(id) {
  var resourceInfo = resourceUtils.getResourceInformation(id);
  return resourceInfo.resourceType.split('/')[2];
}

/**
 * This method is used as workaround to delete a xxxRecords objects if empty
 */
function removeEmptyRecords(recordSet) {
  if (!recordSet.properties) return;
  var fields = ['aRecords', 'aaaaRecords', 'nsRecords', 'mxRecords', 'srvRecords', 'txtRecords', 'soaRecord', 'ptrRecords'];
  for (var i = 0; i < fields.length; i++) {
    if (__.isEmpty(recordSet.properties[fields[i]])) {
      delete recordSet.properties[fields[i]];
    }
  }
}

function mergeSOA(rs1, rs2) {
  // сохраняем host
  var host = rs2.recordSet.properties.soaRecord.host;
  rs2.recordSet.properties.soaRecord = rs1.recordSet.properties.soaRecord;
  rs2.recordSet.properties.soaRecord.host = host;
  rs2.recordSet.properties.ttl = rs1.recordSet.properties.ttl;
}

function mergeNS(rs1, rs2) {
  if (rs2.recordSet.name === '@') {
    rs2.recordSet.properties.ttl = rs1.recordSet.properties.ttl;
  } else {
    var nsRecords = rs1.recordSet.properties.nsRecords;
    for (var i = 0; i < nsRecords.length; i++) {
      if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.nsRecords, {nsdname: nsRecords[i].nsdname})) {
        rs2.recordSet.properties.nsRecords.push(nsRecords[i]);
      }
    }
  }
}

function mergeCNAME(rs1, rs2, output) {
  output.warn(util.format('Can\'t merge record set "%s" of type CNAME with existing one, skipped', rs2.recordSet.name));
}

function mergeA(rs1, rs2) {
  var aRecords = rs1.recordSet.properties.aRecords;
  for (var i = 0; i < aRecords.length; i++) {
    if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.aRecords, {ipv4Address: aRecords[i].ipv4Address})) {
      rs2.recordSet.properties.aRecords.push(aRecords[i]);
    }
  }
}

function mergeAAAA(rs1, rs2) {
  var aaaaRecords = rs1.recordSet.properties.aaaaRecords;
  for (var i = 0; i < aaaaRecords.length; i++) {
    if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.aaaaRecords, {ipv6Address: aaaaRecords[i].ipv6Address})) {
      rs2.recordSet.properties.aaaaRecords.push(aaaaRecords[i]);
    }
  }
}

function mergeMX(rs1, rs2) {
  var mxRecords = rs1.recordSet.properties.mxRecords;
  for (var i = 0; i < mxRecords.length; i++) {
    if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.mxRecords, {exchange: mxRecords[i].exchange})) {
      rs2.recordSet.properties.mxRecords.push(mxRecords[i]);
    }
  }
}

function mergeTXT(rs1, rs2) {
  var txtRecords = rs1.recordSet.properties.txtRecords;
  for (var i = 0; i < txtRecords.length; i++) {
    if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.txtRecords, {value: txtRecords[i].value})) {
      rs2.recordSet.properties.txtRecords.push(txtRecords[i]);
    }
  }
}

function mergeSRV(rs1, rs2) {
  var srvRecords = rs1.recordSet.properties.srvRecords;
  for (var i = 0; i < srvRecords.length; i++) {
    if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.srvRecords, {target: srvRecords[i].target})) {
      rs2.recordSet.properties.srvRecords.push(srvRecords[i]);
    }
  }
}

function mergePTR(rs1, rs2) {
  var ptrRecords = rs1.recordSet.properties.ptrRecords;
  for (var i = 0; i < ptrRecords.length; i++) {
    if (!utils.findFirstCaseIgnore(rs2.recordSet.properties.ptrRecords, {ptrdname: ptrRecords[i].ptrdname})) {
      rs2.recordSet.properties.ptrRecords.push(ptrRecords[i]);
    }
  }
}

function merge(rs1, rs2, type, options, output) {
  var self = this;
  if (options.debug) {
    console.log('\nExisting Record Set:  %j \n', rs2);
    console.log('\nNew Record Set:  %j \n', rs1);
  }

  switch (type) {
    case 'SOA' :
      mergeSOA(rs1, rs2);
      break;
    case 'NS' :
      mergeNS(rs1, rs2);
      break;
    case 'CNAME' :
      mergeCNAME(rs1, rs2, output);
      break;
    case 'A' :
      mergeA(rs1, rs2);
      break;
    case 'AAAA' :
      mergeAAAA(rs1, rs2);
      break;
    case 'MX' :
      mergeMX(rs1, rs2);
      break;
    case 'TXT' :
      mergeTXT(rs1, rs2);
      break;
    case 'SRV' :
      mergeSRV(rs1, rs2);
      break;
    case 'PTR' :
      mergePTR(rs1, rs2);
      break;
  }

  // to override existing set after merge
  rs2.ifNoneMatch = undefined;
  self.removeEmptyRecords(rs2.recordSet);

  if (options.debug) {
    console.log('\nAfter merge:  %j \n', rs2);
  }
  return rs2;
}

module.exports = {
  merge: merge,
  removeEmptyRecords: removeEmptyRecords,
  covertToAzureFormat: covertToAzureFormat,
  getShortType: getShortType
};