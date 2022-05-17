---
sidebar_position: 1
---

Saga jest wzorcem projektowym używanym przy wielu usługach. Główną rolą Sagi jest kompensacja zdarzeń - kiedy ramach uruchomienia wielu zadań procesu biznesowego, jedno ulegnie awarii to jesteśmy w stanie cofnąć wcześniejsze zmianny dokonane w ramach tego procesu.  
Istneiją dwa podejścia podczas koordynacji sagi:
#  
- Choreography - domenowe eventy trigerują kolejne usługi
- Orchestration  - koordynator dba o wykonywanie zadań przez usługi

Powiązane wzorce - Process Manager