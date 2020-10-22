#### 0.5: Single Page App:


```
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
palvelin-->selain: HTML-koodi

note over selain:
HTML-koodi käskee <link> -tagien sisällä hakemaan main.css:än ja <script> -tagien sisällä
hakemaan spa.js -tiedoston
end note:

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
palvelin-->selain: spa.js

note over selain:
js-koodissa määritellään funktiot muistiinpanolistan kokoamiseen ja sisällön hakemiseen JSON-tiedostosta
end note:

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
palvelin-->selain: data.json

note over selain:
Tapahtumakäsittelijä purkaa JSON-tiedoston erillisiksi muistiinpanoiksi ja lisää ne <ul>-listaan.
SPA-sivu on nyt avattu.
end note:

```
