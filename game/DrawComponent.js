class DrawComponent extends Component {
    draw(ctx) {
        ctx.save();

        ctx.beginPath();
        ctx.lineTo(0, 500);
        ctx.lineTo(window.innerWidth, 500);
        ctx.lineTo(window.innerWidth, 600);
        ctx.lineTo(0, 600);

        ctx.fillStyle = "black";
        ctx.fill();

        ctx.restore()
    }
}