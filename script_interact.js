interact('.post-it').
  draggable({
    onmove: dragMoveListener
  })
  .resizable({
    edges: { left: false, right: true, bottom: true, top: false }
  })
  .on('resizemove', resizeMoveListener);

function interactListener(event,event_name)
{
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0),
      y = (parseFloat(target.getAttribute('data-y')) || 0);

  if (event_name === 'DRAG_EVENT')
  {
    x += event.dx;
    y += event.dy;
  }
  else if (event_name === 'RESIZE_EVENT')
  {
    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';
  }

  // translate the element
  target.style.webkitTransform = target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the position attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

function dragMoveListener(event) { interactListener(event,'DRAG_EVENT'); }
function resizeMoveListener(event) { interactListener(event,'RESIZE_EVENT'); }
