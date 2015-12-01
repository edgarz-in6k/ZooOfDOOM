function Zoo(){
  var hedgehog1 = new Hedgehog("Terry", 8, 12, "thhhhrr");
  var hedgehog2 = new Hedgehog("George", 14, 12, "thhhhrr");
  var dragon = new Dragon("Gorynych", 7, 18, "HA HA HA");

  var elephant1 = new Elephant("Bob", 8, 12, "uuuuu");
  var elephant2 = new Elephant("Karl", 12, 12, "uuuuu");
  var deer1 = new Deer("Tyller", 4, 18, "eeeer");
  var deer2 = new Deer("Kudy", 5, 18, "eeeer");

  //var carnivoresList = [hedgehog1, hedgehog2, dragon];
  var carnivoresType = ["Hedgehog", "Dragon"];

  //var herbivorusList = [elephant1, elephant2, deer1, deer2];
  var herbivorusType  = ["Elephant", "Deer"];

  list = [hedgehog1, hedgehog2, dragon, elephant1, elephant2, deer1, deer2];
  //var types = ["Hedgehog", "Dragon", "Elephant", "Deer"];

  this.isCorpse = function(animal){
      if (animal.getTimeAppetiteCurrent() >= animal.getTimeIntervalAppetite())
        return true;
      return false;
  }

  this.foodAnimal = function(animal){
    animal.food();
  }

  this.addAnimal = function(name, type){
    switch (type) {
      case "Hedgehog":
        list.push(new Hedgehog(name, 8, 12, "thhhhrr"));
        break;
      case "Gorynych":
        list.push(new Dragon(name, 8, 12, "thhhhrr"));
        break;
      case "Elephant":
        list.push(new Elephant(name, 8, 12, "thhhhrr"));
        break;
      case "Deer":
        list.push(new Deer(name, 8, 12, "thhhhrr"));
        break;
      default:
        alert("ERROR addAnimal " + type);
    }
  }

  this.getCarnivoresType = function(){
    return carnivoresType;//types
  }

  this.getHerbivorusType = function(){
    return herbivorusType;//types
  }

  this.getCarnivoresList = function(){
    return list.filter(function(animal){
      return animal.getKind() == "Carnivores";
    });
  }

  this.getHerbivorusList = function(){
    return list.filter(function(animal){
      return animal.getKind() == "Herbivorus";
    });
  }

  this.removeAnimal = function(animal) {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === animal)//==
        list.splice(i, 1);
    }
  }
}
