class Engine {
    static canvas;
    static ctx;

    static currentScene;

    static start() {
        Engine.canvas = document.getElementById("canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        addEventListener("keydown", Input.keyDown);
        addEventListener("keyup", Input.keyUp);

        this.currentScene.start();

        requestAnimationFrame(Engine.gameLoop);
    }

    static gameLoop() {
        Engine.update();
        Engine.draw();
        requestAnimationFrame(Engine.gameLoop);
    }

    static draw() {
        Engine.canvas.width = window.innerWidth;
        Engine.canvas.height = window.innerHeight;
        this.currentScene.draw(Engine.ctx);
    }

    static update() {
        Engine.currentScene.update();
    }
}