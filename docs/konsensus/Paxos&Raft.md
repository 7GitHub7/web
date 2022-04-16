

*Algorytmy konsensusu*


W tym artukule postram się przybliżyć co wspólnego ma Grecka wyspa z systememi rozproszonymi. \
Przedstawię zasadę działania popularnych algorytmów osiągania konsensu w systemach rozproszonych - Paxos I Raft.


Historia algorytmu Paxos sięga czasów antycznej Grecji. Transformacja rządu na system parlamentarny, który z założenie wymaga posiedzeń rządzących było nie lada wyzwaniem. W ówczesnych czasach priorytetem greka był handel, na który poświęcał większość swojego czasu. Aby parlament mógł funkcjonować poprawnie, musieli wypracować system, który pozwalał politykom na wchodzenie i wychodzenie w dowolnym czasie. W związku z tym, że pozostały szczątkowe informacje działania takiego algorytmu pozwoliło to zainspirować się nim w sytemach rozroszonych.




## PAXOS 

Użyty w implementacji na przykład:

* Apache ZooKeeper

* Systemy Google



W teorii algorytm jest prosty jednak implementacja nie jest taka łatwa na jaką się wydaję. Ciężko jest znaleźć zaimplementowany algorytm zgodny z oryginalnymi założeniemi.



W podstawowej wersji algorytmu mamy 4 główne role:

| Rola    | Opis |
|---------|--------|
| Client     | wysyła żądania do systemu   |
| Proposer     | przewodzi w głosowaniu   |
| Acceptor | głosuje  |
| Learner | powiela podjęte decyzje |




Przykładowy przebieg osiągania wpólnego statnu dla maszyn w systemie:



1. System otrzymuje żądanie od Clienta

1. Wybrany lider(Proposer) wysyła prośbę o obietnicę do każdego z członków. Prośba musi zawierać liczbę *n* która jest wartościa kontolną dla członków na podstawie której mogą stwierdzić czy dany lider jest aktualny.

1. Jeżeli wartość kontrolna się zgadza to każdy członek odsyła obietnicę(Promise) w której deklaruję, że jeżeli wyślesz mi propozycję wprowadzenia zmian w systemi oraz prośba będzie zawierała tą konkretną wartością *n* to wprowadze zaproponowane zmiany.

1. Jeżeli Proposer otrzymał więcej niż połowe pozytywnych odpwiedzi, wysyła wiadomość typu Accept która zawiera wartość n oraz wartośc/stan który członek ma zapisać.

1. Acceptor odsyła potwierdzenie

![](/img/paxos-images/basic.jpg)

Przykładowy przebieg osiągania wpólnego statnu dla maszyn w systemie




Prepare(n) – n za każdym razem musi być większa niż poprzednio

Proces składa się z dwóch etapów. Pierwszy odpowiada za otrzymanie przez Proposera odpoweidzi Promise od członków. Drugi to zapisanie dancyh przez członków.

Tak jak można zauważyć w algorytmie wsytępuję redundancja ale o tym za chwilę.

 

### Jak Paxos radzi sobie z awariami.

 

#### Acceptor ulega awarii


![](/img/paxos-images/acceptor.jpg)

Acceptor ulega awarii
                                                         
Ze względu na to, że algorytm potrzebuję większość pozytywnych odowiedzi, przypadek kiedy jeden Acceptor ulegnie awarii nic sie nie dzieje z całym systemem.

     
                                
#### Learner ulega awarii


![](/img/paxos-images/learner.jpg)

Learner ulega awarii
                                
Tak samo jak powyżej, system sprawnie radzi sobie z awarią Learnenra.

#### Proposer ulega awarii


![tr](/img/paxos-images/proposer.jpg)

Proposer ulega awarii
                              
                                
Ten przypadek jest dosyć złożony. W przypadku kiedy awarii ulega Proposer musi niezwłocznie zostać wybrany nowy. Procedura wybierania nowego Proposera jest bardzo podobna do poprzednich, polegamy na demokracji. Każdy członek ma losowy timer po którego upływie może zgłosić kandydaturę na Proposera(o ile obecny nie odpowiada)

Wychodząc naprzeciw redundancji występującej w podstawowej wersji algorytmu, wprowadzono MULTIPAXOS który wykonuję pierwszy etap tylko w momencie utraty lidera. W pozostałych przypadkach wykonywana jest tylko druga część algorytmu.


#### Links

[Wikipedia - Paxos](https://en.wikipedia.org/wiki/Paxos_(computer_science)/) 
