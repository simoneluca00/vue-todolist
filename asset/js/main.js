var app = new Vue(
    {
        el: '#root',

        data: {
            
            todos: [],

            newTask: '',
            id: 1,
        },

        methods: {
            // funzione per modificare al click il valore di DONE (toggle non funziona?)
            doneToDo: function(element) {
                // più sintetica per il toggle
                element.done = !element.done;

                // if( element.done == true ){
                //     element.done = false;
                // } else {
                //     element.done = true;
                // }
            },

            // funzione per aggiungere un nuovo elemento alla lista
            addItem: function(){

                // condizione per non far aggiungere stringhe vuote
                if (this.newTask.trim() != '') {
                    this.todos.push({
                        text: this.newTask,
                        done: false,
                        id: this.id,
                    });
                    
                    console.log(this.todos)  
                    
                    // ogni oggetto ha un proprio id che aumenta di 1 ogni volta che viene pushato un nuovo oggetto
                    this.id++;
                    // ogni volta che si aggiunge un elemento il campo input si resetta
                    this.newTask = '';
                }
                
            },

            // funzione per rimuovere un elemento dalla lista
            removeItem: function(toDoIndex){
                this.todos.splice(toDoIndex,1);
            },
        }
    }
)

