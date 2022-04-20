//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        // cerco il div su cui lavorare
        el:'#app',
        

        // creo un data da dove prendere l'input 

        data: {
            messaggio:'Ciao Aurel',

            // aggiungo immagine tramite link 
            img: 'https://miro.medium.com/max/6416/1*7OCwu--TWqVluPMsZdzWKw.png'
        },


    },
);



