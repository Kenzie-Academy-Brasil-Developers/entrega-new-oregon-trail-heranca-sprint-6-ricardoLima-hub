const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador, viajante } = require("./../../app");

Given('um Caçador de nome {string}', function (string) {
    cacador.name = string
});

Given('o Caçador sempre começa a viagem com {int} refeição', function (int) {
    cacador.amountFood = int
});

Given('o Caçador sempre começa a viagem saudável.', function () {
    cacador.isHealthy = true
});

When('o Caçador sair para caçar {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        cacador.hunt()
    }
});

When('o Caçador parar para comer {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        cacador.eat()
    }
});

When('o número de refeições do Caçador for igual a {int}', function (int) {
    cacador.amountFood = int
});

When('o Caçador entregar {int} refeição para um Traveler', function (int) {
    cacador.giveFood(viajante, int)
    });

Then('o Caçador ficará com {int} refeições', function (int) {
    assert.strictEqual(cacador.amountFood, int)
 });

Then('o Caçador não ficará doente.', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('o Caçador ficará doente.', function () {
    assert.strictEqual(cacador.isHealthy, false)
  });

Then('o Traveler terá {int} refeições.', function (int) {
    assert.strictEqual(viajante.amountFood, int)
});

// When('um Traveler solicitar {int} refeição ao Hunter', function (int) {

// });

// When('o número de refeições do Hunter for igual a {int}', function (int) {

// });