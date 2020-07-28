document.addEventListener('DOMContentLoaded', function () {
  var today = new Date()
  var hour = today.getHours();
  if (parseInt(hour) % 2 == 1){
    particleground(document.getElementById('particles'), {
      dotColor: '#a54242',
      lineColor:'#a54242'
  });
  }
  else{
    particleground(document.getElementById('particles'), {
      dotColor: '#5b6cbd',
      lineColor:'#5b6cbd'
  });
  }
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);