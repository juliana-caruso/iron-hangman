const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");
    
  clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    step = 0;
  }
  
  Draw = (part) => {
      switch (part) {
        case 'gallows' :
          context.strokeStyle = '#000';
          context.lineWidth = 5; 
          context.beginPath();
          context.moveTo(175, 225);
          context.lineTo(5, 225);
          context.moveTo(40, 225);
          context.lineTo(25, 5);
          context.lineTo(100, 5);
          context.lineTo(100, 25);
          context.stroke();
          break;
  
        case 'head':
          context.lineWidth = 5;
          context.beginPath();
          context.arc(100, 50, 25, 0, Math.PI*2, true);
          context.closePath();
          context.stroke();
          break;
        
        case 'body':
          context.beginPath();
          context.moveTo(100, 75);
          context.lineTo(100, 140);
          context.stroke();
          break;
  
        case 'righArm':
          context.beginPath();
          context.moveTo(100, 85);
          context.lineTo(60, 100);
          context.stroke();
          break;
  
        case 'leftArm':
          context.beginPath();
          context.moveTo(100, 85);
          context.lineTo(140, 100);
          context.stroke();
          break;
  
        case 'rightLeg':
          context.beginPath();
          context.moveTo(100, 140);
          context.lineTo(80, 190);
          context.stroke();
          break;
  
        case 'feet':
            context.beginPath();
            context.moveTo(82, 190);
            context.lineTo(70, 185);
            context.stroke();
            context.moveTo(122, 190);
            context.lineTo(135, 185);
            context.stroke();
        break;
  
        case 'leftLeg':
          context.beginPath();
          context.moveTo(100, 140);
          context.lineTo(125, 190);
          context.stroke();
        break;
  
      } 
  }
    
    const draws = [
       'gallows', 
       'head', 
       'body', 
       'rightArm', 
       'leftArm',
       'rightLeg',
       'leftLeg',
       'feet',
    ]
    
    let step = 0;
    