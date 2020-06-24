# Zadania

## Zadanie z cz. 2

### Riches - Summary.jsx

Riches - twoim zadaniem będzie wykonanie komponent Summary w taki sposób by przekazywać
komponentom Józka i Tomka potrzebne informacje i wyświetlenie ich obok siebie

Dodatkowo musisz obsłużyć pobieranie danych dla Józka, tj. przygotować odpowiednie dane
Po zapisie danych w komponencie józka powinny aktualizować się dane w komponencie Tomka

komponent powinien obsłużyć ewentualne błędy na inputach

Dodatkowo przygotujesz menu które będzie w przyszłości pozwalało rozwijać podmenu na klik.
Włączenie jednego elementu powinno wyłączać inne submenu

### Tomek - User.jsx

Tomek, twoim zadaniem będzie dodać komponent Usera któy będzie przyjmował dane o userze

```js
const user = {
  name: 'userName',
  email: 'userEmail',
  role: 'userRole',
  avatar: 'userAvatar',
}
```
a następnie wyświetlał o nim informacje

Strona powinna składać się z: Nagłówka z informacją o userName i userRole
Avatarem pod spodem i obok niego jego adres email

Dodatkowo przygotujesz nowy layout który będzie widoczny jeśli user jest adminem i wyświetlać się będzie w menu Richesa

### Józek - Settings.jsx

Józek - twoim zadaniem będzie przygotowanie komponentów input text.
Input powinien zwracać informacje o swoim stanie, opcjonalnym błędzie, oraz o kodzie który go wyświetli

Potrzebne inputy:
- email - waliduje czy jest to poprawny email, jako błąd wyświetl tekst "Niepoprawny email"
- name - zwykły tekst, ale musi sprawdzać czy user podał imię i nazwisko
- avatar - link do zdjęcia, OPCJONALNIE możesz pokazać zdjęcie po wpisaniu linku
- role - zwykły tekst
- checkbox - czy jest adminem czy nie jest.