#### 0.6: Uusi muistiinpano:

```
note over selain:
Käyttäjä kirjoittaa muistiinpanon ja painaa Save.

spa.js:ssä tapahtumakäsittelijä huomaa, että note-muistiinpanoa ollaan lähettämässä.

Koodi rakentaa paketin, jossa on aikatieto ja muistiinpanon sisältö JSON-muodossa.

Muistiinpano päivitetään suoraan HTML-koodissa olevaan muistiinpanolistaan ja lähetetään palvelimelle. 
end note:

selain->palvelin: HTTP POST content(JSON) & date https://fullstack-exampleapp.herokuapp.com/new_note_spa
palvelin-->selain: Status 201
```

