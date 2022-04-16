---
sidebar_position: 1
---

# String
# Tworzenie stringa przez "" lub konstruktor

Stworzyć stringa możemy poprzez użycie cudzysłowia lub konstruktora. 
Umieszczenie ciągu znaków w cudzysłowie spowoduje utworzenie jednej zmienej w pamięcie gdzie kolejne przypisania tego samego stringa do innych zmiennych będzie przepisywało tylko wskaźnik na ten napis.
Wykorzystanie konstruktora stworzy za każdym razem nowy obiekt w pamięci. 
Przykład: 
```js
String x = "x";
String y = "y";
1.System.out.println(x == y); 
2.System.out.println(x.equals(y));
```
Numer jeden zwórici true ponieważ zmienne wskazują na ten sam string.
Numer dwa także zwróci true.

# Niemutowalność
Oznacza to, że wartość stringa w pamieci nie zmienia się. 
Jeśli zmieniamy wartość stringa to w pamięci jest tworzony nowy string.