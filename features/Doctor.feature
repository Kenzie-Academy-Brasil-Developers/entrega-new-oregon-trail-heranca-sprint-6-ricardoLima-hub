# language: pt

Funcionalidade: Doutor
    Como um Doutor
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Doutor de nome "John"
        E o Doutor sempre começa a viagem saudável.

    Cenário: Curou um viajante doente
        Quando um Traveler estiver doente
        Então o Doutor o cura.
    
    Cenário: Não precisou curar o viajante
        Quando um Traveler estiver saudável
        Então não é necessário ser curado