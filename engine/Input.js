class Input {
    static keysDown = [];

    static keyDown(event) {
        if (Input.keysDown.includes(event.code)) return;
        Input.keysDown.push(event.code);
    }

    static keyUp(event) {
        Input.keysDown.splice(Input.keysDown.indexOf(event.code), 1);
    }
}