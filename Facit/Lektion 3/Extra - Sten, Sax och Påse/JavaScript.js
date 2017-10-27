let vapen = 0;

input.onGesture(Gesture.Shake, () => {
  vapen = Math.random(3);
  if(vapen == 0) {
    basic.showLeds(`
      # # # # #
      # . . . #
      # . . . #
      # . . . #
      # # # # #
    `);
  } else if(vapen == 1) {
    basic.showLeds(`
      . . . . .
      . # # # .
      . # # # .
      . # # # .
      . . . . .
    `);
  } else {
    basic.showLeds(`
      # # . . #
      # # . # .
      . . # . .
      # # . # .
      # # . . #
    `);
  }
});