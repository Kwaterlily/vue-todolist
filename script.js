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
        ],
    }, 
    methods: {
        aggiungi () {
            const newTasck = { text: "", done: false }; 
            this.elenco.push ("")
        },
    }
  