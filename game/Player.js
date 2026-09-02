class Player extends GameObject {
    static position = new Vector2(100, 500); //Player position
    static speed = 5; //Speed of player
    static sprintMultiplier = 1.5; //Sprint multiplier when player holds shift
    static jumpPower = 1.2; //Power of players jump
    static gravity = 10; //Power of gravity applied to player
    static accel = 0.1; //Player movement acceleration
    static grounded = false; //If player is on ground

    static jumping = false; //Is player currently jumping
    static jumpingTimer = 20; //Duration of jumping

    draw() {
        const ctx = Engine.ctx;

        ctx.beginPath();
        ctx.lineTo(0 + Player.position.x, 0 + Player.position.y);
        ctx.lineTo(0 + Player.position.x, -50 + Player.position.y);
        ctx.lineTo(50 + Player.position.x, -50 + Player.position.y);
        ctx.lineTo(50 + Player.position.x, 0 + Player.position.y);

        ctx.fillStyle = "red";
        ctx.fill();
    }

    update() {
        const sprint = Input.keysDown.includes("ShiftLeft") ? Player.sprintMultiplier : 1;

        if (Input.keysDown.includes('KeyA')) {
            if (Player.accel < 1) Player.accel += .1;
            Player.position.x -= (Player.speed * Player.accel * sprint);
        }
        else if (Input.keysDown.includes('KeyD')) {
            if (Player.accel < 1) Player.accel += .1;
            Player.position.x += (Player.speed * Player.accel * sprint);
        }
        else {
            if (Player.accel > 0.1) {
                Player.accel -= 0.1;
            } else if (Player.accel <= 0.1) {
                Player.accel = 0.1
            }
        }

        this.isGrounded()

        if ((Player.jumping || (Input.keysDown.includes('Space') && !Player.jumping && Player.grounded))) {
            Player.jumping = true;
            Player.jumpingTimer--;
            if (Player.jumpingTimer > 0) {
                this.jump(Player.jumpingTimer);
            } else {
                Player.jumping = false;
                Player.jumpingTimer = 20;
            }
        }

        this.physics();
    }

    jump(time) {
        Player.position.y -= Player.jumpPower * time;
    }

    //Basic Temp Physics
    physics() {
        const floor = 500;

        if (Player.position.y > floor) {
            Player.position.y = floor;
        } else if (Player.position.y < floor){
            Player.position.y += Player.gravity;
        }

        if (Player.position.x > window.innerWidth - 50) {
            Player.position.x = window.innerWidth - 50;
        } else if (Player.position.x < 0) {
            Player.position.x = 0;
        }
    }

    isGrounded() {
        Player.grounded = Player.position.y === 500;
    }

    isColliding(x, y) {

    }
}