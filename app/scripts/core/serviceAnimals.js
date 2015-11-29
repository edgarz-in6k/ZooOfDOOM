function Zoo(){
  var hedgehog1 = new Hedgehog("Terry", 8, 12, "thhhhrr");
  var hedgehog2 = new Hedgehog("George", 14, 12, "thhhhrr");
  var dragon = new Dragon("Gorynych", 7, 18, "HA HA HA");

  var carnivoresList = [hedgehog1, hedgehog2, dragon];
  var carnivoresType = ["Hedgehog", "Dragon"];

  var elephant1 = new Elephant("Bob", 8, 12, "uuuuu");
  var elephant2 = new Elephant("Karl", 12, 12, "uuuuu");
  var deer1 = new Deer("Tyller", 4, 18, "eeeer");
  var deer2 = new Deer("Kudy", 5, 18, "eeeer");

  var herbivorusList = [elephant1, elephant2, deer1, deer2];
  var herbivorusType  = ["Elephant", "Deer"];

  this.isCorpse = function(animal){
      if (animal.getTimeAppetiteCurrent() >= animal.getTimeIntervalAppetite())
        return true;
      return false;
  }

  this.foodAnimal = function(animal){
    animal.food();
  }

  this.addCarnivoresAnimal = function(name, type){
    switch (type) {
      case "Hedgehog":
        carnivoresList.push(new Hedgehog(name, 8, 12, "thhhhrr"));
        break;
      case "Gorynych":
        carnivoresList.push(new Dragon(name, 8, 12, "thhhhrr"));
        break;
      default:
        alert("ERROR addCarnivoresAnimal");
    }
  }

  this.addHerbivorusAnimal = function(name, type){
    switch (type) {
      case "Elephant":
        herbivorusList.push(new Elephant(name, 8, 12, "thhhhrr"));
        break;
      case "Deer":
        herbivorusList.push(new Deer(name, 8, 12, "thhhhrr"));
        break;
      default:
        alert("ERROR addHerbivorusAnimal");
    }
  }

  this.getCarnivoresType = function(){
    return carnivoresType;
  }

  this.getHerbivorusType = function(){
    return herbivorusType;
  }

  this.getCarnivoresList = function(){
    return carnivoresList;
  }

  this.getAnimalCarnivores = function(index){
    return carnivoresList[index];
  }

  this.getHerbivorusList = function(){
    return herbivorusList;
  }

  this.getAnimalHerbivorus = function(index){
    return herbivorusList[index];
  }

  this.addAllCarnivoresList = function(list){
    carnivoresList = list;
  }

  this.addAllHerbivorusList = function(list){
    herbivorusList = list;
  }

  this.removeAnimalCarnivores = function(animal){
    for (var i = 0; i < carnivoresList.length; i++) {
      if (carnivoresList[i] === animal)//==
        carnivoresList.splice(i, 1);
    }
  }

  this.removeAnimalHerbivorus = function(animal){
    for (var i = 0; i < herbivorusList.length; i++) {
      if (herbivorusList[i] === animal)//==
        herbivorusList.splice(i, 1);
    }
  }
}
