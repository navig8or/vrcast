AFRAME.registerComponent("rotate-player", {
  
  update: function() {
   
  var y=this.el.getAttribute('rotation').y;
  //var playerAffector=this.el

    //this.el.addEventListener("abuttondown", function(evt1) { 
      //AFRAME.log(this.el);
      this.el.addEventListener("axismove", function(evt1) {
        AFRAME.log(evt1.detail.axis);
      if (evt1.detail.axis[0]>0.7){
      //playerAffector.setAttribute("rotation", { x: 0, y: y-=10, z: 0 });
      //}
      this.setAttribute("rotation", { x: 0, y: y-=10, z: 0 });
      if(y==360){
        y=0;}
      }
    });
    
    this.el.addEventListener("bbuttondown", function(evt2) {
           this.setAttribute("rotation", { x: 0, y: y+=10, z: 0 });
      if(y==-360){
        y=0;
      }

    });
  }
});
