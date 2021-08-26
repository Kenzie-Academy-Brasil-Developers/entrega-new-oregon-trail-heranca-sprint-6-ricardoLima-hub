# language: pt

Funcionalidade: Caçador
    Como um Caçador
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Caçador de nome "Mike"
        E o Caçador sempre começa a viagem com 2 refeição
        E o Caçador sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Caçador sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7.

    Cenário: Comeu e seguiu saudável
        Quando o Caçador parar para comer 1 vezes
        Então o Caçador ficará com 0 refeições
        E o Caçador não ficará doente.

    Cenário: Comeu e ficou doente
        Quando o Caçador parar para comer 2 vezes
        Então o Caçador ficará com 0 refeições
        E o Caçador ficará doente.

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Caçador sair para caçar 2 vezes
        E o Caçador parar para comer 2 vezes
        Então o Caçador ficará com 8 refeições
        E o Caçador não ficará doente.

    Cenário: Tranfere comida para um Traveler
        Quando um Traveler solicitar 1 refeição ao Caçador
        E o número de refeições do Caçador for igual a 2
        Então o Caçador entrega 1 refeição para o Traveler.