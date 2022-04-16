---
sidebar_position: 1
---

# Equals and HashCode




Przykład funckji equals:

@Override
public boolean equals(Object o) {
    if (o == this)
        return true;
    if (!(o instanceof Voucher))
        return false;
    Voucher other = (Voucher) o;
    boolean valueEquals = (this.value == null && other.value == null)
        || (this.value != null && this.value.equals(other.value));
    boolean storeEquals = (this.store == null && other.store == null)
        || (this.store != null && this.store.equals(other.store));
    return valueEquals && storeEquals;
}

1. Sprawdzamy czy wskaźniki wskazują na ten sam obiekt - jeśli tak zwracamy true
2. Sprawdzamy czy obiekt jest właściewgo typu - jeśli nie to zwracamy false
3. sprawdzamy czy wartości są równe i zwracamy true/false


Object identity określa, czy zmienne wskazują na ten sam obiekt.  

HashCode przechowuje obliczoną wartość hasha dla obiektu. Hash jest to wyniku pewego algorytmy wykonanego na wybranych polach klasy np: mamy klasę pies, a w niej atrybuty takie jak imie oraz wiek. Ustalamy, że będziemy mnożyć wiek oraz imię przez 31 i na końcu zsumujemy te wyniki. Tak powstała liczba może być użyta jako unikalny identyfikator obiektu policzony na wielu polach jednej klasy. Używany jest w przypadku kiedy dodajemy obiekty do hashMapy w której obiekty są grupowane po hashCode. Niepoprawna implementacja hashCode dla funckji może znaczącą spowolnić wyszukiwanie w strukturze.
Według badań nad wydajnością, najoptymalniejszą metodą obliczania hasha jest mnożenie wyniku przez liczby pierwsze. 31 jest liczbą pierwszą co powodują mniejszą liczbę kolizji.