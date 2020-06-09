# To jest przykładowy egzamin z WWW #

## Treść ##

Zmodyfikuj dostarczoną aplikację w espress. Jako odpowiedź będzie brana pod uwagę jedynie zawartość plików:

- app.js
- routes/index.js
- views/index.pug
- package.json

Po modyfikacjach, twoja aplikacja powinna:

- wyświetlać początkowo pustą tabelę wpisów na stronie głównej
- wykorzystywać sqlitową bazę danych przechowywaną w pamięci
- po wywołaniu POST add_line (dokładne parametry znajdziesz w grade.js) aplikacja powinna dodawać wpis do bazy danych 
- powinna wyświetlać wpisy z bazy danych w dwóch kolumnach, pierwsza to numer kolejny wpisu (indeksowane od 1) a druga to zawartość wpisu (pola msg), 
  przykład znajedziesz w index.pug

## Uwagi ##

- serwer powinno się uruchamiać za pomocą `npm start`
- po uruchomieniu `node grade.js`, jeśli serwer jest uruchomiony, powinieneś dostać ocenę 5

## Oddawanie ##

- zmodyfikowane pliki należy umieścić w pliku .zip na Moodle (TODO, szczegóły jeszcze nie ustalone)
