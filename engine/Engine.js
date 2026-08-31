class Engine {
    static canvas;
    static ctx;

    static start() {
        Engine.canvas = document.getElementById("canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        addEventListener("keydown", Input.keyDown)
        addEventListener("keyup", Input.keyUp)

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        Engine.update();
        Engine.draw();
        requestAnimationFrame(Engine.gameLoop)
    }

    static draw() {
        Engine.canvas.width = window.innerWidth;
        Engine.canvas.height = window.innerHeight;
        draw(Engine.ctx);
    }

    static update() {
        update();
    }
}