class SlingShot{
    constructor (body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.05,
            length:1.0
        }
        this.bodyA = body;
        this.pointB = anchor;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display (){
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}