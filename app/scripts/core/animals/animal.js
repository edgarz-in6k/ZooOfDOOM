function Animal(name, timeIntervalVoice, timeIntervalAppetite, voice){
  this._name = name;
  this._kind;
  this._type;
  this._timeIntervalVoice = timeIntervalVoice;
  this._timeIntervalAppetite = timeIntervalAppetite;
  this._timeAppetiteCurrent = 0;
  this._voice = voice;
}

Animal.prototype.getName = function() {
  return this._name;
}
Animal.prototype.setName = function(name) {
  this._name = name;
}

Animal.prototype.getKind = function() {
  return this._kind;
}

Animal.prototype.getType = function() {
  return this._type;
}

Animal.prototype.getTimeIntervalVoice = function() {
  return this._timeIntervalVoice;
}
Animal.prototype.setTimeIntervalVoice = function(timeIntervalVoice) {
  this._timeIntervalVoice = timeIntervalVoice;
}

Animal.prototype.getTimeIntervalAppetite = function() {
  return this._timeIntervalAppetite;
}
Animal.prototype.setTimeIntervalAppetite = function(timeIntervalAppetite) {
  this._timeIntervalAppetite = timeIntervalAppetite;
}

Animal.prototype.getTimeAppetiteCurrent = function() {
  return this._timeAppetiteCurrent;
}
Animal.prototype.addTimeAppetiteCurrent = function() {
  this._timeAppetiteCurrent = this._timeAppetiteCurrent + 1;
}
Animal.prototype.food = function() {
  this._timeAppetiteCurrent = 0;
}
Animal.prototype.getStatusOfHunger = function() {
  return this.getTimeIntervalAppetite() - this.getTimeAppetiteCurrent();
}

Animal.prototype.getVoice = function() {
  return this._voice;
}
Animal.prototype.setVoice = function(voice) {
  this._voice = voice;
}
