

Jest jednym z algorytmów gęstościowych. Dopóki bedzię wystarczająca liczba punktów wokół klastra to będzie on się powiększał.

### Parametry
__epsilon__ - maksymalna odległość od punkty jaka będzie rozszerzała kluster
#
__min_samples__ = minimalna liczba punktów wokół badanego punkty potrzebna do uznania punktu za core point 

### Słownik
__core point__ - punkt który może rozszerzać grupę oraz spełnia kryteria epsilon oraz min_samples. 
#
__non core point__ - punkty które spełniają epsilon oraz mają w zasięgu conajmniej jeden core point. Nie mogą rozszerzać klastra. 
#
__outliers__ - punkty które nie spełniły żednego z warunków 

### Zasada działania
1. Wybieramy parametry epsilon i liczbę min_samples
2. Liczbę epsilon można określić za pomocą metody łokcia i algorytmu Knn - ta metoda jest w stanie określić w przyblizeniu wartości epsilon.
3. Określamy liczbę min_samples - tutaj nalepiej wykonać kilka testów z różną liczbą.
4. Na początku oznaczamy core points na podstawie podanych kryteriów.
5. Następnie przyporządkowujemy core ponints do klustrów.
6. Kolejnym krokiem jest oznacznie non core points oraz outlieres

### Zalety algorytmu
- nie trzeba znać liczby klastrów
- znadują outlieres
- działa na róznych kszałtach
  
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

### Przykad Iris

```jsx title="Elbow.py"
iris_scaled = StandardScaler().fit_transform(iris_numpy)
neigh = NearestNeighbors(n_neighbors=2)
nbrs = neigh.fit(iris_scaled)
distances, indices = nbrs.kneighbors(iris_scaled)
distances = -np.sort(-distances, axis=0)
distances = distances[:,1]
plt.plot(distances)

```
![](/img/data-science/elbow_dbscan.PNG)

Następnie używając bibliotek sklearn możemy obliczyć jakość klustrowania, używając wybranych wskaźników.
```jsx title="dbscan.py"
m = DBSCAN(eps=i, min_samples=min_sample)
m.fit(iris_scaled)
clusters = m.labels_
silhouette = metrics.silhouette_score(iris_scaled, m.labels_)
davies_bouldin = metrics.davies_bouldin_score(iris_scaled, m.labels_)
calinski_harabasz = metrics.calinski_harabasz_score(iris_scaled, m.labels_)

```
![](/img/data-science/metrics_dbscan.PNG)

Na podstawie obliczonych metryk możemy wybrać dla jakich wejściowych parametrów (eps i min_samples) algorytm wykonał klastrowanie najlepiej.