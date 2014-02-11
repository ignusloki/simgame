var main = function() {
    var stage = new createjs.Stage("cnv");
    var interface = new Interface(stage);
    stage.width = stage.canvas.width;
    stage.height = stage.canvas.height;
    stage.addChild(new createjs.Sprite(
        new createjs.SpriteSheet(assets["bouncycube"]), "bounce"));
    stage.addChild(new createjs.Sprite(
        new createjs.SpriteSheet(assets["bouncycube"]), "bounce"));
    stage.addChild(new createjs.Sprite(
        new createjs.SpriteSheet(assets["chair"]), "static"));
stage.children[1].x -= 36;
stage.children[1].y += 18
    createjs.Ticker.addEventListener("tick", function(ev) {
        update(ev.delta);
        render();
        stage.update(ev);
    });
};

function update(dt) {
    
}

function render() {
    
}