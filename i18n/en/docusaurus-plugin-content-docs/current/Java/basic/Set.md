---
sidebar_position: 1
---

# Set

Set jest interfejsem który implementują klasy takie jak:
1. HashSet
2. TreeSet

```js
Set<Integer> hashSet = new HashSet<>();
hashSet.add(7);
hashSet.add(3);
hashSet.add(3);
hashSet.add(5);

```
W przykładowym hashSet znajdą sie tylko trzy liczby:5,3,7

# Cechy
-brak zachowania kolejności wstawiania
-wszystkie elementy są unikalne
-wartości przed dodaniem do struktury są hashowane pewnym algorytmem w wyniku czego powstaje hash.
 W przypadku dwóch taich samych hashy index będzie taki sam więc tylko jedna z wartości będzie dodana do struktury. 

```js
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(7);
treeSet.add(3);
treeSet.add(3);
treeSet.add(5);

```
W przykładowym treeSet znajdą sie tylko trzy liczby w posortowanej kolejności: 3,5,7

# Cechy
-kolejność jest posortowana od najmniejszej do największej
-wszystkie elementy są unikalne

Obie metody zawierają 