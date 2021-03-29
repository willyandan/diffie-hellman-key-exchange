"use strict";
exports.__esModule = true;
var big_integer_1 = require("big-integer");
var Client = /** @class */ (function () {
    function Client(generatorNumber, modulos, secret) {
        this.generatorNumber = generatorNumber;
        this.modulos = modulos;
        this.secret = secret;
    }
    Client.prototype.generatePublicNumber = function () {
        return this.generatorNumber.mod(this.modulos).pow(this.secret);
    };
    return Client;
}());
var g = big_integer_1["default"]("18870723460033950310276411012127113437271355187480880040366554096471360012399629809263421105361147954315074169845776421924155665059046350524972037967125488845353335552788435262122621538966788539928182236225809089372514104695209197930460654471664957562649169173261362435427196389700723698658434759278515274113169934074152997364103797130792605024018515002520691478213093851339496305666029");
var clientA = new Client(g, big_integer_1["default"]("913684931975439749136673178550525732532949"), big_integer_1["default"]("15418516479531130547310722819615908324126662"));
console.log(clientA.generatePublicNumber());
