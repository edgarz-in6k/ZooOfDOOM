function Hedgehog(){
  Animal.apply(this, arguments);
}
Hedgehog.prototype = Object.create(Herbivorus.prototype);
Hedgehog.prototype.constructor = Hedgehog;
Hedgehog.prototype._type = "Hedgehog";

function Dragon(){
  Animal.apply(this, arguments);
}
Dragon.prototype = Object.create(Herbivorus.prototype);
Dragon.prototype.constructor = Dragon;
Dragon.prototype._type = "Dragon";

Dragon.prototype.eat = function() {

}
