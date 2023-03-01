"use strict";

var assert = require("assert");
var pincodeDirectory = require("./index.js");

assert.deepStrictEqual(pincodeDirectory.search("hinjawadi"), [
  {
    state: "MAHARASHTRA",
    city: "PUNE",
    district: "Mulshi",
    village: "Hinjavadi",
    office: "Infotech  Park (Hinjawadi) S.O",
    pincode: "411057",
  },
]);

assert.deepStrictEqual(pincodeDirectory.search("452009"), [
  {
    state: 'MADHYA PRADESH',
    city: 'INDORE',
    district: 'Indore',
    village: 'Indore',
    office: 'Sudama Nagar S.O',
    pincode: '452009'
  }
]);
