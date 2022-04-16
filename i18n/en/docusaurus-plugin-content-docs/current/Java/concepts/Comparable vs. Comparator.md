---
sidebar_position: 1
---

# Comparable vs. Comparator


Wykorzystywane kiedy chcemy posortować obiekty.
Comperable jest interfejsem który jest wymagany aby określić w jaki sposób klasy mogą być ze sobą porównane.
Zawiera on metodę compareTo w której określamy po jakich atrybutach oraz w jaki sposób obiekty mają być ze sobą porównane.
W wyniku prównania zwracany jest int. Element może być większy 1, równy 0 lub mniejszy -1.

Comparator może być przekazany do metody sortującej jako parametr.
Implementujemy go w osobnej klasie. Jako parametry przyjmuje obiekty klasy którą będzie porównywał.

Możemy sortować listy, arrays

|Comperable | Comparator|
|:----------|:----------|
| dostarcza metodę compareTo() | dostarcza metodę compare() |
| java.lang package | java.util package |
| musi być w tej samej klasie | implementowane poza klasą |
|klasa musi implementować interfejs Comperable | klasa nie musi implementować interfejsu |
