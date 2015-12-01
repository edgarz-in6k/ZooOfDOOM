function Elephant(){
  Animal.apply(this, arguments);
}
Elephant.prototype = Object.create(Herbivorus.prototype);
Elephant.prototype.constructor = Elephant;
Elephant.prototype._type = "Elephant";

function Deer(){
  Animal.apply(this, arguments);
}
Deer.prototype = Object.create(Herbivorus.prototype);
Deer.prototype.constructor = Deer;
Deer.prototype._type = "Deer";
