

---
### Memcached
Przechowywać dane możemy na wiele sposobów. Najbardziej popularną metodą są bazy danych. Utrzymanie danych jest proste i dane są uporzadkowane.

Wykonując zapytania do bazy która posiada znaczną ilość danych może się okazać, że czas otrzymania informacji zwrotnej nie będzie optymalny.

Rozwiązaniem tego problemu jest cachowanie danych.

**Plusy**:

- Szybki dostęp do danych

- Redukcja zapytań do bazy danych

- Odciążenie bazy danych w przypadku kiedy mamy system rozproszony

 

**Minusy**:

- memcache jest strukturą klucz:wartość więc szybkość dostępu do danych maleje wraz ze wzrostem ilości danych(tutaj możemy użyć algorytmu LRU, który będzie dbał o to aby w memcached były tylko te kóre są najczęściej wykorzystywane)

 

### Gdzie powinień sie znajdować cache?

* na tym samym serwerze co aplikacja 
  * szybki dostęp
  * dane są zsynchronizowe

* cache globalny 
  * dostęp jest wolniejszy
  * łatwe skalowanie
  * posiadając dwie instancję musimy synchronizować cache

 

## Użycie memcached w języku Python na przykładzie zapisywania ankiet.

 

### Serwer

Pierwszym krokiem jest pobranie memcached i zainstalowanie lokalnie na naszym komputerze. Po uruchomieniu, serwer będzie nasłuchiwał na wybranym porcie.

 

### Client


Tworzymy obiekt za pomocą którego będziemy mogli kominikować sie z cachem.
```
client = Client('localhost')
```
{{< note >}}
Należy pobrać bibliotkę pymemcache oraz ją zaimportować: from pymemcache.client.base import Client 
{{< /note >}}

 

Wybrane metody:

**client.get(key)** - pobieramy wartość z pod klucza 'key'

**client.set('key','value')** - dodajemy dane(klucz, wartość) do struktury 

**client.gets('key')**-  działa tak samo jak get() ale dodatkowo zwraca CAS

**CAS(check and set)** -  wartość stosowana w celu zapobiegania nadpisywania wartości spod jakiegoś klucza. Przykłdem może być próba zapisania wartości przez dwóch użytkwoników do tego samego klucza.

Projekt z użyciem memcashed można znaleźć pod następującym linkiem:

[Github](https://github.com/7GitHub7/Python_Learning/tree/master/Lecture2)

 
