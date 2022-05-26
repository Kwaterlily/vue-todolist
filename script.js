const elenco = new Vue({
    el : "#container",
    data : {
        elenco: [
             { text: "Dare da mangiare al gatto", done: true}, 
             { text: "Rispondere al presidende", done: false}, 
             { text: "Ritirare premio nobel", done: false}, 
             { text: "Comprare croccantini per il gatto", done: true}, 
             { text: "Ringraziare Brad Pitt per i fiori", done: true}, 
             { text: "Fare la spesa", done: false}, 
             { text: "Declinare offertea della N.a.s.a.", done: false}, 
             { text: "Comprare bottiglia di vino per la cena con Roger Waters e Anna", done: true},        
    ]
 }
})












// var root = new  Vue({
//     el: '#container', 
//     data: {
//         messaggio: 'Ciao, come stai?',
//         imggatto:'https://www.gattodiario.com/wp-content/uploads/2019/06/migio-gatto-rosso-su-due-zampe-saluta-e-se-ne-va.jpg',
//         miaClasse: 'nonSiVede',
//     },
//     methods: {
//         risposta: function () {
//             console.log('bene, grazie ');
//         },
//         cambioClasse: function () {
//             if(this.miaClasse ==='nonSiVede') {
//                 this.miaClasse = 'siVede'
//             }   else {
//                     this.miaClasse = 'nonSiVede';
//                 }

//         }
//     },
// });