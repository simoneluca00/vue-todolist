var app = new Vue(
    {
        el: '#root',

        data: {
            todos: [
                {
                    text:'wiskila',
                    done: false,
                },
                {
                    text:'nto wiskiske',
                    done: true,
                },
                {
                    text:'allelora',
                    done: false,
                },
            ]
        },

        methods: {
            // funzione per modificare al click il valore di DONE (toggle non funziona?)
            doneToDo: function(element) {
                if( element.done == true ){
                    element.done = false;
                } else {
                    element.done = true;
                }
            },

            removeItem: function(toDoIndex){
                this.todos.splice(toDoIndex,1);
            }
        }
    }
)
