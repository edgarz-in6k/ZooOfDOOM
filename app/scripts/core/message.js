var MessageAnimal = new (function() {
  this.KILL = function(){
    return ": No! You kill me!";//died of starvation
  }();
  this.DIED_STARVATION = function(){
    return ": Died of starvation";
  }();
  this.BIRTH = function(){
    return ": We have a new animal!";
  }();
  this.FOOD = function(){
    return ": Mmm... Food! I eat";
  }();

  this.DEATH = function(){
    return "We died animal!";
  }();
  this.ME_EATEN = function(){
    return "Help! Me eaten!";
  }();
  this.HUNGRY = function(){
    return "I'm hungry...";
  }();
  this.GORGED = function(){
    return "I'm full:)";
  }();
});
