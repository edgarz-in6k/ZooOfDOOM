function Carnivores(){
  Animal.apply(this, arguments);
}

Carnivores.prototype = Object.create(Animal.prototype);
Carnivores.prototype.constructor = Carnivores;
Carnivores.prototype._kind = "Carnivores";

Carnivores.prototype.eat = function() {

}
