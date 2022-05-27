const NewelencoApp = new Vue({
    el : "#container",
    data : {
        newElement:  "",
        elenco: [
             { text: "Dare da mangiare al gatto", done: true}, 
             { text: "Rispondere al presidente", done: false}, 
             { text: "Ritirare premio nobel", done: false}, 
             { text: "Comprare croccantini per il gatto", done: true}, 
             { text: "Ringraziare Brad Pitt per i fiori", done: true}, 
             { text: "Fare la spesa", done: false}, 
             { text: "Declinare offerta della N.a.s.a.", done: false}, 
             { text: "Comprare bottiglia di vino per la cena con Roger Waters e Anna", done: true},        
        ],
    }, 
    
    methods: {
        aggiungi () {
            if (this.newElement !== "")  {
                
                const newTasck = { text: this.newElement, done: false };
                this.elenco.push(newTasck);
                this.newElement = "";
            }
        },

        togliElemento (index) {
            this.elenco.splice(index,1); 
        },

        invertDone (index) {
            if (this.elenco[index].done === true) {
                this.elenco[index].done = false
            }   else {
                this.elenco[index].done = true
            }
        }

    }
});  