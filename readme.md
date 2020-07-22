# Zadania


## Zadanie rozwojowe

Od tej pory każdy tworzy swoją aplikację która będzie miała na celu stworzenie w pełni działającego panelu użytkownika. Do stworzenia aplikacji będziesz wykorzystywać zdobytą wiedzę ze spotkań, a następnie około 1-1.5 godziny zostanie na kodowanie pod okiem mentora. Wygląd aplikacji, funkcje dodatkowe i sam schemat działania aplikacji jest twoją inwencją twórczą. W przypadku problemów, lub braku pomysłu, możesz spytać mentora :)

### Założenie aplikacji:
Piszemy wszystkie funkcje sami, nie korzystamy z rozwiązań gotowych (np. formularzy, etc.). Dozwolone dowolne paczki UI, np Material UI

### Opis zadania:
Tworzymy apliakcję która pozwoli userowi pisać teksty na bloga. Teksty będą zapisywane (można mockupować bramki, local storage etc) w bazie, dostep do nich będzie z poziomu aplikacji. wpisy na bloga będą posiadały shorthandy które będą transpilowane na bieżąco i wyświetlały przypisane do nich wartości. 

Przykładowy schemat shorthandu:
``` js
{{image src="/path/image.png"}}
{{line height="3"}}
```

### Założenia panelu użytkownika:
- Strona dashboard - wyświetla kompleksowe informacje o userze, jego dane personalne, jego wpisy, jego media
- Strona settingsy - uzupełnianie danych, avatary, hasła, tematy etc.
- Strona wpis - pozwala tworzyć wpis na bloga z wykorzystaniem shorthandu, powinna wyświetlać wynik wpisywania na bieżąco

### Sekcje Stałe:

- Aside z menu pozwalającym przełączać się między stronami





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