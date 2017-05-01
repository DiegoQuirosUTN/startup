'use strict';

function EventEmitter(){
}

EventEmitter.prototype.on = function(event, func){
    this.eventList[event] = func;
}

EventEmitter.prototype.emit = function(event){
    if(event in this.eventList){
        this.eventList[event](event);
    }
}
        
EventEmitter.prototype.off = function(event){
    delete this.eventList[event];
}

function Movie(title, year, duration) {

    this.getTitle = function () {
        return title;
    };

    this.setTitle = function (newTitle) {
        title = newTitle;
    };

    this.getYear = function () {
        return year;
    };

    this.setYear = function (newYear) {
        year = newYear;
    };

    this.getDuration = function () {
        return duration;
    };

    this.setDuration = function (newDuration) {
        duration = newDuration;
    };

    this.eventList = new Map();

    this.cast = [];

    
}
    //Movie.prototype.eventList = new Map();
Movie.prototype = Object.create(EventEmitter.prototype);

Movie.prototype.addCast = function(actor){
    for(var i=0; i < arguments.length; i++){
        this.cast.push(arguments[i]);
    }
}

Movie.prototype.play = function(){
    this.emit("play");
}

Movie.prototype.pause = function(){
    this.emit("pause");
}

Movie.prototype.resume = function(){
    this.emit("resume");
}

Movie.prototype.constructor = Movie;

var terminator = new Movie("Terminator", 2000, 90);

var kungFuPanda = new Movie("Kung fu Panda", 2010, 88);

var rambo = new Movie("Rambo", 1998, 104);

function Logger(){
}
    
Logger.prototype.log = function(event){
    console.log("the " + event + " button has been pressed");
}

var logger = new Logger();

function Social(){
}

Social.prototype.share = function(friendName){
   console.log(`Shared ${this.getTitle()} with ${friendName}`);
}

Social.prototype.like = function(friendName){
   console.log(`${friendName} liked ${this.getTitle()}`);
}

Movie.prototype = Object.assign(Movie.prototype,Social.prototype);

function Actor(varName, varAge){
    this.name = varName;
    this.age = varAge;
}

var jackBlack = new Actor("Jack Black", 42);

var jhonnyDeep = new Actor("Jhonny Deep", 50);

var syvester = new Actor("Sylvester Stallone", 55);

var arnold = new Actor("Arnold Schuartzenegger", 54);


terminator.on("play", logger.log);