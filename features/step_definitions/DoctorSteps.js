const { Given, When, Then } = require("@cucumber/cucumber");
const { AssertionError } = require("assert");
const assert = require("assert");
const { DH_NOT_SUITABLE_GENERATOR } = require("constants");
const Doctor = require("../../models/Doctor");

const { doutor, viajante } = require("./../../app");

Given('um Doutor de nome {string}', function (string) {
    doutor.name = string;
  });

Given('o Doutor sempre começa a viagem saudável.', function () {
    doutor.isHealthy = true;
});

When('um Traveler estiver doente', function () {
    doutor.heal(viajante)
  });

When('um Traveler estiver saudável', function () {
    doutor.heal(viajante)
  });

Then('o Doutor o cura.', function () {
    assert.strictEqual(viajante.isHealthy, "true")
});

Then('não é necessário ser curado', function () {
    assert.strictEqual(viajante.isHealthy, "true")
  });