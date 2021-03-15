# Filters

Nella cartella del progetto, si può effettuare i seguenti comandi:

## Per lo sviluppo: `npm run dev` o `yarn dev`
Effettuando seguente comando, l'applicazione verrà compilato nella cartella './dist' del progetto.

## Per lo sviluppo con localhost: `npm run start` o `yarn start`
L'aplicazione si lancerà da solo in Browser selezionato in default, con seguente link: http://localhost:8080/.
Per ogni cambiamento effetuato, il browser verrà aggiornato automaticamente visualizzando il cambiamento effettuato.

## Per il production: `npm run prod` o `yarn prod`
Effettuando seguente comando, compressa e ottimizza l'applicazione dopo di che verrà compilato nella cartella './dist' del progetto.

## Cartella './dist'
L'applicazione compilato con modalità  'development' o 'production'

## Cartella './src'
Contiene le cartelle con dentro i moduli dello sviluppo:

./src
    ./react
        ./api - url per fornire i dati;
        ./components - componenti UI; 
        ./helpers - ulteriori funzioni e classi 
        App.jsx - React root file del'applicazione;
    ./sass
    index.html
    index.js - root file che collega tutti gli stili e gli script