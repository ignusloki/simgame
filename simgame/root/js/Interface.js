/**
 * Constructor for the interface object.
 * @returns {Interface}
 */
var Interface = function(stage) {
    var interface = new createjs.Bitmap("res/sprites/interface.png");
    var bounds = {
        top: new createjs.Rectangle(0, 1, 100, 10),
        top_side: new createjs.Rectangle(0, 12, 100, 10),
        corner: new createjs.Rectangle(0, 23, 105, 105),
        bot_side: new createjs.Rectangle(106, 28, 10, 100),
        bot: new createjs.Rectangle(117, 28, 10, 100)
    };
    // first, draw the edges
    interface.sourceRect = bounds.top;
    interface.setTransform(0, 0);
    stage.addChild(interface.clone());
    interface.sourceRect = bounds.corner;
    interface.setTransform(35, 100);
    stage.addChild(interface.clone());
};
/**
 * Adds a button to the interface.
 * @param {int} x - horizontal center location of the button.
 * @param {int} y - vertical center location of the button.
 * @param {Sprite} sheet - the Sprite object representing this button.
 * @param {Function} action - the 
 * @returns {undefined}
 */
Interface.prototype.addButton = function(x, y, sheet, action) {
    
};