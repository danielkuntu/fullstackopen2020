##### 0.4: Uusi muistiinpano:


```
note over selain:
Käyttäjä kirjoittaa muistiinpanon text -tyyppiseen formiin, jonka sisällölle annetaan note -niminen id. 
Form on määritelty lähettämään tekstikentän sisältö osoitteeseen /new_note HTTP POST -metodilla:

<form action="/new_note" method="POST">
      <input type="text" name="note"><br>
      <input type="submit" value="Save">
    </form>
end note:

selain->palvelin: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

note over palvelin:
Palvelin vastaanottaa muistiinpanon ja lisää sisällön notes -nimiseen taulukkoon.

Palvelin palauttaa 302-statuksen (re-direct) ja ohjaa lataamaan sivun /notes uudelleen
end note:

palvelin-->selain: HTTP REDIRECT

note over selain:
/notes sivun uudelleenohjaus, eli sivun päivittäminen HTTP GET -metodilla
end note:

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
palvelin-->selain: HTML-koodi

note over selain: 
HTML-koodi saa selaimen pyytämään palvelimelta main.css ja main.js:än
<link rel="stylesheet" type="text/css" href="/main.css">
<script type="text/javascript" src="main.js"></script>
end note:

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
palvelin-->selain: main.js

note over selain:
main.js-koodi saa selaimen pyytämään muistiinpano- <ul> listan sisällön HTTP GET -metodilla osoitteesta /data.json
end note:

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
palvelin-->selain: data.json

note over selain:
JSON-sisältö puretaan <ul>-listaan siten, että kukin muistiinpano tallennetaan omalle <li>-elementille.
Uusi muistiinpano on nyt appendattu muistiinpanolistaan ja päivitetty lista näkyy käyttäjälle.

end note:

```

