


| Rzeczywiste |Rzeczywiste |
|:----------:|:----------|
| True positive | False positive |
| False negative | False positive |

Kolumny określaja rzeczywistość, wiersze predykcję.
Poniżej macierz dla predykcji przy wykorzystaniu algorytmy kNN na zbiorze Iris 

![](/img/heatmap_kNN.PNG)

Chcąc przeanalizować taki wykres musimy wybrać etykietę którą będziemy porównywać z pozostałymi.
Wybierzmy etykietę 0.

Cały zbiór testowy zawiera 38 danych (Suma wartości w macierzy) 

Na począteku widzimy, że 0 zostało zaklasyfikowane 9 razy jako etykieta 0 i 2 razy jako etykieta 1.
Nie mamy także FP, ponieważ żadna etykieta nie została błędnie zinterpretowana jako 0.

Po pierwszym kroku wiemy, że:
TP = 9
FP = 0
FN = 2

Aby obliczyć TN wystarczy od całości odjąć pozotałe co daje TN = 27



## Czułość (sensitivity, recall)

Określa ile TP jest w calym zbiorze Positive (również FN).
TPR = TP/P = TP/TP+FN

Minusem jest to, że nie bierzę pod uwage FP
Nie bierzę pod uwagę TN.
Wynik powinien dążyć do 1.



## Dokładność (accuracy)

ACC = (TP + TN) / P+N

Określa jakość klasyfikacji. Wskazuje procent poprawnych predykcji w skali wszystkich próbek. Im wynik bliższy 1 tym lepiej.

## Precyzja (precision)

PPV = TP / TP + FP

Mówi ile było rzeczywiście pozytywncyh wśród wszystkich zaklasyfikowanych pozytywnie.
Nie bierzę pod uwagę TN.

## Specyficzność (specificity)

TNR = TN / N


Sprawdza ile było pozytywnych  wśród wszystkich negatywnych.

## Krzywa ROC (Receiver Operating Characteristic)

Wyznaczenie progu odcięcia

 

## Krzywa uczenia się
TBD



[Więcej informacji na ten temat](https://www.statystyczny.pl/macierz-bledow-raport-dokladnosc-czulosc-precyzja/).
[Lub tutaj ](https://www.youtube.com/watch?v=1uYvFbPml_A).