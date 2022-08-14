import '../public/style.css';

import { init, Sprite, GameLoop } from 'kontra';

const initialGame = () => {
    console.debug('init ...')
    let { canvas } = init('game');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    console.debug('... done')
    return canvas
}

const runGame = (canvas) => {
    let sprite = Sprite({
        x: 100,        // starting x,y position of the sprite
        y: 80,
        color: 'red',  // fill color of the sprite rectangle
        width: 20,     // width and height of the sprite rectangle
        height: 40,
        dx: 2          // move the sprite 2px to the right every frame
      });
      
      let loop = GameLoop({  // create the main game loop
        update: function() { // update the game state
          sprite.update();
      
          // wrap the sprites position when it reaches
          // the edge of the screen
          if (sprite.x > canvas.width) {
            sprite.x = -sprite.width;
          }
        },
        render: function() { // render the game state
          sprite.render();
        }
      });
      
      loop.start();    // start the game
}

window.addEventListener('resize', () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

const game = () => {
    console.log('running')
    const canvas = initialGame()
    runGame(canvas)
}

game()
