let makediv = document.getElementById("makediv");

makediv.ondragstart = function() {
    return false;
  };

makediv.onmousedown = function(event) {
    moveTo(event.pageX, event.pageY);

    function moveTo(cX, cY) {
        makediv.style.left = cX  + 'px';
        makediv.style.top = cY + 'px';
    }

    function onMouseMove(event) {
        moveTo(event.pageX, event.pageY);
      }

      // перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);

        // положить, удалить более ненужные обработчики событий
    makediv.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
         makediv.onmouseup = null;
  };
}

