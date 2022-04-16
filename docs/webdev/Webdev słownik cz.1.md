
#### Autoryzacja vs uwierzytelnienie
Uwierzytelnianie - weryfikacja tożsamości uzytkownika np. za pomocą hasła

Autoryzacja - prawo do wykonania konkretnej operacji/dostępu do konkretnego pliku(następuje po uwierzytelnianiu)

#### Gdzie prowadzi adres 127.0.0.1?

Do naszego komputera. Informacje są wymieniane wewnątrz naszego komputera.

"Loopback" - tutaj nasze zapytania trafiaja, jest to witualnie urządzenie sieciowe.

127.0.0.2/3/4 - prowadzi do tego samego.

#### Czym różni sie szyfrowanie symetryczne od asymetrycznego?

Szyfrowanie symetryczne używa jdnego klucza do szyfrowania jaki deszyfrowania informacji.

Asymetryczne polega na tym, że mamy do dyspozycji dwa klucze(prywatny i publiczny). Jeden z nich służy do szyfrowania, drugi do odszyfowaywania.

Klucz publiczny wysylamy do drugiej osoby, dzięki czemu ta osoba jest w stanie zaszyfrować tym kluczem wiadomość i nam ją odsyła. Tylko posiadacz klucza prywatnego może ją odczytać(nawet odoba która zaszyfrowała nie może jej odczytać- jedynie ma dostęp do wiadomości przez to że wie co zaszyfrowała wpisała...).

Asymetryczny wykorzystywany np przy mailach.

#### Czym sie różni szyfrowanie a hashowanie?

Szyfrowanie - proces zmiany tekstu jawnego(który rozumiemy) w szyfrogram

Hashowanie - wyliczanie za pomocą funkcji skrótu ciągu znakó o stałej długości. Jest to proces nieodwracalny. 

Gdzie używamy hashowania? - w bazach danych przy hasłach, ponieważ mogą one wycieknąć. Do haseł dodawana jest sól, czyli unikalna wartość per użytkownik.

Standardem także jest celowe opóźnianie sprawdzanie poprawności hasha aby opóźnić próby odagnięcia ich za pomocą np. Brute force

bcrypt (algorytm)- do poczytania

Drugim przykładem użycia hash może być sprawdzania czy plik się zmienił.

#### Co to znaczy, że http jest bezstanowe?

Każde zaytanie jest jest rozpatrywane niezależnie od innych. Protokół  nie zachowuje żadnych informacji o poprzednich transakcjach.

Dlatego też używamy ciasteczek w przeglądarce.

#### Z jakich elementów składa się żądanie HTTP?

1. Metoda - GET,POST,PUT,DELETE...

2. Adres

3. Wersja protokołu - 1.0 - 3.0, https

4. Nagłówków - są rozdzielane znakiem CRLF, popularne nagłówki to cookies, user-agent(przeglądarka dodaję wersję o przeglądarce🙂 ), content-length - przeglądarka wie ile ma odebrać danych.

#### Podstawowe kody błędów 503, 404, 301 

503  - usługa niedostępna

404 -  strona nie istnieje 

301 - trwale przeniesiony

#### Czy rózni się /etc/passwd od /etc/shadow?

etc/passwd - nazwa, identyfikator, grupa podstawowa, katalog domowy, powłoka

etch/shadow - nazwa, hasło(hash), data zmiany hasła

chmod - można zmienić uprawnienia do pliku

ls - list files in folder

#### TCP/UDP?

TCP -  niezawodny, wyjiorzystuje three-way handshake(pytamy o coś,  dostajemy odpowiedz, potwierdzamy )

UDP - wysyłamy pakiety bez potwierdzenia zwrotnego - zystkujemy na szybkości ale tracimy na niezwodności

#### Rodzaje wstrzyknięć danych do zapytań(do dokończenia):

CSS injection - 

NoSQL injection - 

LDAP injection - 

Command injection - 

Server-Side injection - 

#### Zasada najmniejszego uprzywilejowania:

Każdy element systemu ma dostęp tylko do informacji które są mu rzeczywiscie potrzebne

#### XSS rodzaje

Reflected - kod jest zaszyty w linku przesłanym do kogoś

Stored - kod jest zapisany w bazie

DOM - użyto niebezpiecznych funkcji JS(innerHTML/eval)

InnerHTML może zawierać tagi htmla w związku ztym może wykonać kod JS, w odróznieniu do innerTXT gdzie mamy doczynienia zczystym tekstem

- XEE do doczytania

- Race condition - np. kod rabatowy w sklepie zostanie uznany kilka razy.(Intruder)

- Damn Vulnerable 

- CVE - common vulnerbilities and exposures - indetyfikator odpowiadający powrzechnie znanym podatnościom

- Certyfikat SSL - zawiera datę ważności(od do), numer seryjny, informacje o podmiocie, adres listy CRL, dane wystawcy

- Same origin policy - nie możemy wykonywać zapytań z róznych domen, jak jesteśmy zalogowani w banku to nie możemy jednocześnie być zaloganie na innej stronie z której można wysłac zapytania

SOP - ten sam protokół, domena i port

W takim wypadku używamy CORS

