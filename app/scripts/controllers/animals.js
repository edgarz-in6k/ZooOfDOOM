angular.module("zooApp", [])
.factory("factory", function(){
  return {
    serviceAnimals: new Zoo(),
    chat: new function() {
            var messages = ["|", "|", "|", "|", "|"];
            this.getChat = function(){
              return messages;
            }
            this.addMessage = function(message){
              messages.splice(0,0,message);
              messages = messages.slice(0,5);
            }
          }
  };
})
.directive("animalLive", ["factory", "$interval", function(factory, $interval) {
  return {
    link: function(scope) {
        scope.serviceAnimals = factory.serviceAnimals;
        scope.chat = factory.chat;

        scope.killAnimalCarnivores = function(animal) {//to Zoo
          var message = animal.getName() + MessageAnimal.KILL;
          scope.chat.addMessage(message);

          scope.deadAnimalCarnivores(animal);
        };
        scope.killAnimalHerbivorus = function(animal) {//to Zoo
          var message = animal.getName() + ": No! You kill me!";
          scope.chat.addMessage(message);

          scope.serviceAnimals.removeAnimalHerbivorus(animal);
        };

        scope.deadAnimalCarnivores = function(animal) {//to Zoo
          scope.serviceAnimals.removeAnimalCarnivores(animal);
        }

        scope.deadAnimalHerbivorus = function(animal) {//to Zoo
          scope.serviceAnimals.removeAnimalHerbivorus(animal);
        }

        scope.food = function(animal){
          var message = animal.getName() + MessageAnimal.FOOD;
          scope.chat.addMessage(message);

          scope.serviceAnimals.foodAnimal(animal);
        }

        scope.timer = $interval(function(){
          for (animal of scope.serviceAnimals.getCarnivoresList()) {
            animal.addTimeAppetiteCurrent();
            if (scope.serviceAnimals.isCorpse(animal)){
              var message = animal.getName() + MessageAnimal.DIED_STARVATION;
              scope.chat.addMessage(message);
              scope.deadAnimalCarnivores(animal);
            }
          }
          for (animal of scope.serviceAnimals.getHerbivorusList()) {
            animal.addTimeAppetiteCurrent();
            if (scope.serviceAnimals.isCorpse(animal)){
              var message = animal.getName() + MessageAnimal.DIED_STARVATION;
              scope.chat.addMessage(message);
              scope.deadAnimalCarnivores(animal);
              scope.deadAnimalHerbivorus(animal);
            }
          }
        }, 1000);

      },
    templateUrl: 'views/animalLive.html'
  }
}])
.directive("administrationZoo", ["factory", function(factory) {
  return {
    link: function(scope) {
        scope.serviceAnimals = factory.serviceAnimals;
        scope.chat = factory.chat;

        scope.types = [];
        scope.kind = "";
        scope.type = "";
        scope.nameAnimal = "";

        scope.choose = function() {
            if (scope.kind === "Carnivores"){
              scope.types = scope.serviceAnimals.getCarnivoresType();
            }
            else if (scope.kind === "Herbivorus"){
              scope.types = scope.serviceAnimals.getHerbivorusType();
            }
        };

        scope.add = function() {
          if (scope.nameAnimal == ""){
            alert("Input please name animal!");
            return;
          }
          if (scope.kind == ""){
            alert("Input please kind animal!");
            return;
          }
          if (scope.type == []){
            alert("Input please type animal!");
            return;
          }
          if (scope.kind == "Carnivores") {
            scope.serviceAnimals.addCarnivoresAnimal(scope.nameAnimal, scope.type)
          }
          else if (scope.kind == "Herbivorus") {
            scope.serviceAnimals.addHerbivorusAnimal(scope.nameAnimal, scope.type)
          }
          var message = scope.nameAnimal + MessageAnimal.BIRTH;
          scope.chat.addMessage(message);
        };
      },
    templateUrl: 'views/administrationZoo.html'
  }
}])
.directive("animalChat", ["factory", function(factory) {
  return {
    link: function(scope) {
      scope.serviceAnimals = factory.serviceAnimals;
      scope.chat = factory.chat;
    },
    templateUrl: 'views/chat.html'
  };
}]);
