function Herbivorus(){
  Animal.apply(this, arguments);
}

Herbivorus.prototype = Object.create(Animal.prototype);
Herbivorus.prototype.constructor = Herbivorus;
Herbivorus.prototype._kind = "Herbivorus";

Herbivorus.prototype.eat = function() {

}
