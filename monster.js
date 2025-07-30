export function createMonster() {
  const monster = document.createElement('a-entity');

  // Hitbox (invisible target)
  const hitbox = document.createElement('a-box');
  hitbox.setAttribute('class', 'target');
  hitbox.setAttribute('position', '0 1.5 0');
  hitbox.setAttribute('width', '2');
  hitbox.setAttribute('height', '3');
  hitbox.setAttribute('depth', '1');
  hitbox.setAttribute('material', 'opacity: 0; transparent: true');
  monster.appendChild(hitbox);

  // Body
  const body = document.createElement('a-box');
  body.setAttribute('position', '0 1 0');
  body.setAttribute('depth', '1');
  body.setAttribute('height', '2');
  body.setAttribute('width', '1.5');
  body.setAttribute('color', '#4CAF50');
  monster.appendChild(body);

  // Eyes (white + pupils)
  [['-0.3 2 0.5', '#fff', 0.1], ['0.3 2 0.5', '#fff', 0.1],
   ['-0.3 2 0.6', '#000', 0.05], ['0.3 2 0.6', '#000', 0.05]]
    .forEach(([pos, color, radius]) => {
      const eye = document.createElement('a-sphere');
      eye.setAttribute('position', pos);
      eye.setAttribute('radius', radius);
      eye.setAttribute('color', color);
      monster.appendChild(eye);
    });

  // Horns
  ['-0.5 2.5 0', '0.5 2.5 0'].forEach(pos => {
    const horn = document.createElement('a-cone');
    horn.setAttribute('position', pos);
    horn.setAttribute('radius-bottom', '0.05');
    horn.setAttribute('radius-top', '0');
    horn.setAttribute('height', '0.3');
    horn.setAttribute('color', '#f44336');
    monster.appendChild(horn);
  });

  return monster;
}
