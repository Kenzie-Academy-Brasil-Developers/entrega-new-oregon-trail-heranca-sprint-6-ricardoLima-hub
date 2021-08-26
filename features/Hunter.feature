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
        Então o Caçador ficará com 7 refeições

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

    Cenário: Não possui comida para transferir ao Traveler
        Quando o Caçador tiver 0 refeições
        E o Caçador entregar 1 refeição para um Traveler
        Então o Caçador ficará com 0 refeições
        E o Traveler terá 1 refeições.

    Cenário: Transfere comida para um Traveler
        Quando o Caçador sair para caçar 1 vezes
        E o Caçador entregar 1 refeição para um Traveler
        Então o Caçador ficará com 6 refeições
        E o Traveler terá 2 refeições.