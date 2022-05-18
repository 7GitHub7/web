

Jest jednym z algorytmów opartych na podziale. Wymaga z góry określonej liczby klastrów.


### Parametry - główne
__number_of_clusters__ - liczba klastrów musi być podana z góry ze względu na specyfikę działania algorytmu(opis poniżej)
#
__centroid_method__ - metoda rozmieszczania centroidów - wpływa na ilość iteracji
#
__max_iter__  - maksymalna liczba iteracji algorytmu
#
__distance_algorithm__  - [euclidean, manhattan]



### Słownik
__centroid__ - środek każdego clustra, jego pozycja będzie się zmieniać wraz z iteracjami 
#
__cluster__ - wszystkie próbki zaklasyfikowane jako jedna grupa. 
#

### Zasada działania
1. Wybieramy parametr __number_of_clusters__, __centroid_method__, __max_iter__
2. Wykorzystując metodę np.: łokcia lub inne: silhouette, gap statistic określamy liczbę clustrów.
3. Wybieramy metodę rozmieszczania centroidów - tutaj w przypadku sklearn lepsza jest kmeans++ jednak warto przetestować różne 
4. Wybieramy metodę obliczania odległości pomiędzy środkiem, a próbkami - w przypadku sklearn jest tylko euclidean dostępny - inne tylko w oparciu o własne implementacje 
5. Korzystając z dostępnych miar, sprawdzamy jakość clustrowania. 

### Przykad Iris

```jsx title="Elbow.py"
for i in range(1,11):
    kmeans11=KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans11.fit(x)
    Error.append(kmeans11.inertia_)
import matplotlib.pyplot as plt
plt.plot(range(1,11), Error)
plt.title('Metoda łokcia')
plt.xlabel('Liczba klastrów')
plt.ylabel('WCSS')
plt.show()

```
![](/img/data-science/elbow_kmeans.PNG)


Następnie używając bibliotek sklearn możemy obliczyć jakość klustrowania, używając wybranych wskaźników.
```jsx title="dbscan.py"
m = KMeans(n_clusters=i, init='k-means++', max_iter=j, n_init=10, random_state=0)
m.fit(iris_scaled)
clusters = m.labels_
silhouette = metrics.silhouette_score(iris_scaled, m.labels_)
davies_bouldin = metrics.davies_bouldin_score(iris_scaled, m.labels_)
calinski_harabasz = metrics.calinski_harabasz_score(iris_scaled, m.labels_)

```
![](/img/data-science/metrics_kmeans.PNG)

Na podstawie obliczonych metryk możemy wybrać dla jakich wejściowych parametrów (max_iter, n_clusters, metoda rozmieszczania klastrów) algorytm wykonał klastrowanie najlepiej.
  
### Jak określić jakość klastrowania
Dostępne sa różne metryki które pozwalają na sprawdzeniu jakości klastrowania. Dzielimy je na zewnętrzne i wewnętrzne

#### Silhouette Coefficient mówi o jakości skupień:
a - bliskość punktów w grupie
#
b - jak daleko jesteśmy od najbliższej grupy
Interpetacja jest taka, że im bliżej 1 tym lepiej

#### Davies-bouldin
#
Na podstawie podobieństwa pomiędzy grupami, im mniejszy tym lepiej
1. Liczymy srednie odległosci między punktami w grupie
2. Liczymy odlegości między grupami
3. Obliczmy podobieństwo pomiędzy grupami
4. Znjdujemy najbardziej podobne grupy dla każdego
5. Liczymy wpółczynnik davies-bouldin który jest średnią z podobieństw
Im mnijeszy wynik tym lepiej

#### Wskaźnik Calińskiego-Harabasza (inaczej kryterium współczynnika wariancji)
1. Index jest stosunkie sumy rozproszeń pomiędzy klastrami oraz rozproszeń wewnątrz klastrów
2. Rozproszenie zdefiniowane jest jako suma kwadratów odległości)
3. Jak czytać?
4. Im wyższy wynik tym klastry są gęstrze i lepiej rozdzielone od siebie


