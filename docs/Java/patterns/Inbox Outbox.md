---
sidebar_position: 1
---

W tym artykule postaram się wyjaśnić w jaki sposób można zapewnić gwarancję wysyłania i odbierania wiadomości.
Kluczowym słowem powiązanym z danym zagadnieniem jest idempotencja - jest to gwarancja na to, że nie zależnie od ilości wykonań takiej samej czynności, wynik był taki sam.
Tutaj można sobie wyobrazić sytuację bankową w której otrzymaliśmy dwa zdarzenia o przelewie. Jeśli zdarzenie przetworzymy dwukrotnie to docelowe konto wzbogaci się dwukrotnie o wartość przelewu. Drugim przykładem będzie ta sama sytuacja lecz informacja o przelewie nigdy nie zostanie wysłana - konto użytkownika zostanie obciążone lecz pieniądze nie zostaną nigdy dostarczone.

#### Rodzaje:
- At-most once - zdarzenie wysyłane jest jeden raz, nie zależnie od efektu. 
- At-least once - zdarzenie będzie wysyłane aż do momentu dostarczenie do adresata. Minusem jest to, że zdarzenie może być dostarczone kilkukrotnie.
- Exactly- once - zdarzenie wysłane jedno zdarzenie będzie obsłużone dokładnie jeden raz.

### Outbox Pattern
Wzorzec który gwarantuje, że zdarzenie będzie wysłane co najmniej jeden raz. Można to zrealizować np.: poprzez dodawanie informacji o zmianach jako zdarzenie do osobnej tabeli. Takie zdarzenie będzie tworzone domyślnie z parametrem jako nie wysłane, a w tle aplikacji dodatkowy proces będzie próbował wysyłać "nie wysłane" zdarzenie - jeśli operacja sie powiedzie to oznaczy go jako wysłane. Tutaj warto wspomnieć, że zamiast sprawdzać które nie zostały wysłane, to można wprowadzić offset tej która została wysłana poprawnie jako ostatnia - tak jak działa Kafka. 

### Inbox Pattern
Wzorzec który gwarantuje, że zdarzenie będzie przetworzone jeden raz. Podobnie jak w OutBox tylko odwracamy sytuację do odbierania wiadomości.
Przychodzące zdarzenia zapisujemy w osobnej tabeli, a następnie synchronizujemy je zgodnie z logiką w systemie.


Dodatek:
Gwarancję dostarczalności Exactly- once można także osiągnąć poprzez sprawdzanie unikalnych id zdarzeń - jeśli wszystkie zdarzenia przychodzące są przechowywane w tabeli to możemy weryfikować czy już wcześniej nie otrzymaliśmy takiej samej wiadomości. Minusem rozwiązania jest to, że jest kosztowne.