function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
  
      context.clearRect(40,40,60,60);
      context.strokeRect(30,30,50,50);
    }
  }