'use strict';
/*
 *   Boilerplate
 */


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

// End of boilerplate

var ESCAPE_MESSAGE = 'You escaped the room!'

/**
 * @function findElem
 * @param  {any[]} arr
 * @param  {function} callback
 * @return {any | void} {the first element, if exists in the array, to satisfy the callback}
 */
function findElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}


/**
 * Represents a Result of interacting with an object in the room
 * @constructor
 * @param {string} {description}
 * @param {string[]} [items]
 */
function Result(description, items){
    this.description = description;
    this.items = items || null;
}

/**
 * Represents a thing in the room
 * @constructor
 * @param  {string} name
 * @param  {string} description
 * @param  {string[]} items  
 * @param  {string[]} neededItems
 */
function RoomObject(name, description, items, neededItems, actions) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.neededItems = neededItems;
    this.actions = actions;
}


/**
 * Get the items in the RoomObject
 * @function getItems
 * @return {string[]}
 */
RoomObject.prototype.getItems = function () {
    var itemsRef = this.items;
    this.items = [];
    return itemsRef;
};

/**
 * Remove all needed items
 * @function removeNeededItem
 */
RoomObject.prototype.removeNeededItems = function () {
    this.neededItems = [];
};

/**
 * Check if an item is needed for this RoomObject
 * @function isItemNeeded
 * @param  {string} itemName
 * @return {boolean}
 */
RoomObject.prototype.isItemNeeded = function (item) {
    return this.neededItems.indexOf(item) !== -1
};

/**
 * Try to use an item on this RoomObject
 * @function useItem
 * @param  {string} item
 * @return {boolean}
 */
RoomObject.prototype.useItem = function(item) {
    var isNeeded = this.isItemNeeded(item)
    if (!isNeeded) {
        return new Result("Could not use " + item + " on " + this.name);
    } else {
        this.removeNeededItems();
        return new Result(" Used " + item + " -> " + this.name + '\n You found: ' + this.items );
    }
}

/**
 * Check if there are any items in this RoomObject
 * @function hasItems
 * @return {boolean}
 */
RoomObject.prototype.hasItems = function(){
    return this.items.length !== 0;
}

/**
 * Check if any items are needed to interact with this RoomObject
 * @function hasItems
 * @return {boolean}
 */
RoomObject.prototype.needsItems = function(){
    return this.neededItems.length !== 0;
}

/**
 * Try to interact with this RoomObject
 * @function interact
 * @return {Result}
 */
RoomObject.prototype.interact = function (action) {
     if(action === "inspect"){
        return new Result(this.description)
    }else if (this.actions.indexOf(action) === -1){
        return new Result("cannot " + action + " " + this.name)
    } else if (this.needsItems()) {
        return new Result(this.description)
    } else if (this.hasItems()) {
        return new Result("You " + action + " the " + this.name, this.getItems()) 
    } else if (this.name === "Door") {
        return new Result(ESCAPE_MESSAGE)
    } else {
        return new Result("didn't find anything useful")         
    }
}

/**
 * Represents a level in the game
 * @constructor
 * @param  {RoomObject[]} objects
 */
function Room(objects) {
    this.objects = objects;
}

/**
 * Try to retrieve a RoomObject contained in this Room 
 * @function getObject
 * @param  {string} objectName
 * @return {RoomObject | void}
 */
Room.prototype.getObject = function (objectName) {
    var name = objectName.toLowerCase()
    var object = findElem(this.objects, function (object) {
        return object.name.toLowerCase() === name
    })
    return object
}

/**
 * Player
 * @constructor
 * @param  {string[]} items 
 * @param  {Room} room  
 */
function Player(room) {
    this.items = [];
    this.currentRoom = room
}

/**
 * Try to get an item from the player's inventory
 * @param  {string} itemName
 * @return {string | void}
 */
Player.prototype.getItem = function (itemName) {
    var name = itemName.toLowerCase()
    var item = findElem(this.items, function (itemName) {
        return itemName.toLowerCase() === name
    })
    return item
}

/**
 * Add items to the player's inventory
 * @function
 * @param  {string[]} items
 */
Player.prototype.addItems = function (items) {
    this.items = this.items.concat(items)
}

/**
 * Try to interact with a RoomObject
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.interactWithObject = function (objectName, action) {
    var object = this.currentRoom.getObject(objectName)

    if (object === undefined) {
        return objectName + " not found in room"
    } else {
        var result = object.interact(action);
            if (result.items){
            this.addItems(result.items)
            return result.description
        }
        return result.description;
    }
}

/**
 * Try to use item on an RoomObject
 * @param  {string} itemName
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.useItem = function (itemName, objectName) {
    var item = this.getItem(itemName)
    var object = this.currentRoom.getObject(objectName)

    if (item === undefined) {
        return itemName + " not found in inventory"
    } else if (object === undefined) {
        return objectName + " not found"
    } else {
        var result = object.useItem(item);
        return result.description;
    }
}

/**
 * Game
 * @constructor
 * @param  {Room[]} rooms
 */
function Game(rooms) {
    this.currentRoomIndex = 0;
    this.rooms = rooms;
}

/**
 * Get the current room
 * @return {Room}
 */
Game.prototype.getCurrentRoom = function(){
    return this.rooms[this.currentRoomIndex]
}

/**
 * Set and return the next room
 * @return {Room}
 */
Game.prototype.getNextRoom = function(){
    this.currentRoomIndex++;
    return this.rooms[this.currentRoomIndex]
}

/**
 * @function getObjectNames
 * @param  {RoomObject[]} objects
 * @return {string}
 */
function getObjectNames(objects) {
    var objectNames = objects.map(function (object) {
        return object.name
    })
    return objectNames.join("\n")
}

/**
 * @function view
 * @param  {string} [message]
 * @return {string}
 */
function view(message) {
    message = message || ""
    var room = player.currentRoom
    var title =
        "--Escape the room-- \n" + 
        "1. [Actions:] [object]" + 
        "\n A. Inspect\n B. PickUp\n C. Open\n D. Search\n E. TurnOn\n\n " +
        "2. use [item] [object] \n" 

    var objects =
        "--You See-- \n" + getObjectNames(room.objects) + "\n";

    var items =
        "--Your Items-- \n" + player.items.join("\n") + "\n";

    var input =
        "--Your Input--";

    return title + objects + items + message + input;
}

function parseInput(words){
    
    if (words.length === 2){
        var action = words[0].toLowerCase()
        var objectName = words[1].toLowerCase();
        var message = player.interactWithObject(objectName, action)
        if (message === ESCAPE_MESSAGE){
            return "YOUR'E FREE!!!"
        }
        return message
    } else if (words[0] === "use" && words.length === 3) {
        var itemName = words[1].toLowerCase();
        var objectName = words[2].toLowerCase();
        var message = player.useItem(itemName, objectName)
        return message;
    } else {
        return "invalid command"
    }
     
}

/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
    clear()

    var words = input.split(' ')
    
    var message = "-- message -- \n" 
                  + parseInput(words)
                  + "\n"

    console.log(view(message))    
});


// Create an array of RoomObject objects

// new RoomObject('','',['"switch"'],[''],[''])
var objects = [
    new RoomObject("Door", "The Steel Door Has No Key Hole It Has A FingerPrint Scanner",[],["thumb"],["open",'inspect']),
    new RoomObject('BreakerBox','This Breaker Box seems like it\'s Connected To The Door.\n I need to find the Switch',"The Lights Are On!",['switch'],['Inspect','TurnOn']),
    new RoomObject("Cabinet","Wooden Cabinet Is Locked, Hmmm Maybe If I Can Find Something To Probe It Open]",['flashlight','closetkey'],['axe'],['open','inspect']),
    new RoomObject('Closet','The Closet Is Locked! Need A Key',['machete'],['closetkey'],['open','inspect']),
    new RoomObject('Axe','An Axe On The Wall [You Need Something Poweful To Get That Axe OFF That Glass Case]',['axe'],['gun'],["pickup",'inspect']),
    new RoomObject('Gun','A HandGun On The Floor? I Wonder Who\'s Gun Did It Belong To',['gun'],[],["pickup","inspect"]),
    new RoomObject('Hole','A Hole On The Wall? Its very Dark Inside',['switch'],['flashlight'],["search","inspect"]),
    new RoomObject('Deadbody','What A Foul Stench! This Person Seems Like He Was Dead For A While Now! I Need To Get Out Now! Maybe If I use His Fingerprints To Open The Door\n[You Will Need A Machete]',['thumb'],['machete'],['pickup','inspect'])
]

// Create an array of Room objects
var panicRoom = [
    new Room([
        objects[0],
        objects[1],
        objects[2],
        objects[3],
        objects[4],
        objects[5],
        objects[6],
        objects[7]
    ])
]

// Create a new Game
var game = new Game (panicRoom)
// Create a new Player
var player = new Player(game.getCurrentRoom())

clear()
console.log(view())