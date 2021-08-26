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

When('um Traveler solicitar {int} refeição ao Caçador', function (int) {
    cacador.giveFood(viajante, int)
});

When('o número de refeições do Caçador for igual a {int}', function (int) {
    cacador.amountFood = int
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

Then('a quantidade de refeições deve ser igual a {int}.', function (int) {
    assert.strictEqual(cacador.amountFood, int)
});

Then('o Caçador entrega {int} refeição para o Traveler.', function (int) {
    assert.strictEqual(cacador.giveFood(viajante, int))
});

// When('um Traveler solicitar {int} refeição ao Hunter', function (int) {

// });

// When('o número de refeições do Hunter for igual a {int}', function (int) {

// });