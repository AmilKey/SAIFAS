Todos.TodosIndexRoute =  Ember.Route.extend({

    model: function () {
        return this.modelFor('todos');
    },

    renderTemplate: function(){
        this.render('js/templates/IndexTemplate', {into: 'todos'});
    }
});