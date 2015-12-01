angular.module("zooApp", [])
.factory("factoryZoo", function(){
  return {
    zoo: new Zoo()
  };
})
.factory("factoryChat", function(){
  return {
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
.directive("animalLive", ["factoryZoo", "factoryChat", "$interval", function(factoryZoo, factoryChat, $interval) {
  return {
    link: function(scope) {
        scope.zoo = factoryZoo.zoo;
        scope.chat = factoryChat.chat;

        scope.killAnimal = function(animal) {
          var message = animal.getName() + MessageAnimal.KILL;
          scope.chat.addMessage(message);

          scope.zoo.removeAnimal(animal);
        };

        scope.food = function(animal){
          var message = animal.getName() + MessageAnimal.FOOD;
          scope.chat.addMessage(message);

          scope.zoo.foodAnimal(animal);
        }

        scope.timer = $interval(function(){
          for (animal of scope.zoo.getCarnivoresList()) {
            animal.addTimeAppetiteCurrent();
            if (scope.zoo.isCorpse(animal)){
              var message = animal.getName() + MessageAnimal.DIED_STARVATION;
              scope.chat.addMessage(message);

              scope.zoo.removeAnimal(animal);
            }
          }
          for (animal of scope.zoo.getHerbivorusList()) {
            animal.addTimeAppetiteCurrent();
            if (scope.zoo.isCorpse(animal)){
              var message = animal.getName() + MessageAnimal.DIED_STARVATION;
              scope.chat.addMessage(message);

              scope.zoo.removeAnimal(animal);
            }
          }
        }, 1000);

      },
    templateUrl: 'views/animalLive.html'
  }
}])
.directive("administrationZoo", ["factoryZoo", "factoryChat", function(factoryZoo, factoryChat) {
  return {
    link: function(scope) {
      scope.zoo = factoryZoo.zoo;
      scope.chat = factoryChat.chat;

        scope.types = [];
        scope.kind = "";
        scope.type = "";
        scope.nameAnimal = "";

        scope.choose = function() {
            if (scope.kind === "Carnivores"){
              scope.types = scope.zoo.getCarnivoresType();
            }
            else if (scope.kind === "Herbivorus"){
              scope.types = scope.zoo.getHerbivorusType();
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
          scope.zoo.addAnimal(scope.nameAnimal, scope.type);
          scope.chat.addMessage(scope.nameAnimal + MessageAnimal.BIRTH);
        };
      },
    templateUrl: 'views/administrationZoo.html'
  }
}])
.directive("animalChat", ["factoryZoo", "factoryChat", function(factoryZoo, factoryChat) {
  return {
    link: function(scope) {
      scope.zoo = factoryZoo.zoo;
      scope.chat = factoryChat.chat;
    },
    templateUrl: 'views/chat.html'
  };
}]);
