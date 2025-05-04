class Majicparticle{
constructor(x,y){
    this.x=y;
    this.y=y;
    this.size=random(10,30);
    this.basecolor=color(
        random([
            "#e84e66","#67c69e",
            "#edf1f4","#80acc9",
            "#73a8b0","#1d203f",
            "#c9a30d" ])
    ),
    update() {
        this.x += this.speedx;
        this.y += this.speedy;
        this.opacity -= 10;
    }
}
}