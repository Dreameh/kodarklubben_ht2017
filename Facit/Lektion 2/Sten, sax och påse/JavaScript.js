let Oavgjord = 0;
let Spelare1 = 0;
let Spelare2 = 0;

input.onButtonPressed(Button.A, () => {
  Spelare1 += 1;
  basic.showLeds(`
    . # # . .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
  `);
  basic.clearScreen();
  });

input.onButtonPressed(Button.B, () => {
  Spelare2 += 1;
  basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
  `);
  basic.clearScreen();
});

input.onButtonPressed(Button.AB, () => {
  Oavgjord += 1;
  basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
  `);
  basic.clearScreen();
});


input.onGesture(Gesture.Shake, () => {
  basic.showString("Wins:");
  basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
  `);
  basic.showNumber(Spelare1);
  basic.pause(1000);

  basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
  `);
  basic.showNumber(Spelare2);
  basic.pause(1000);

  basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
  `);
  basic.showNumber(Oavgjord);
  basic.pause(1000);
  basic.clearScreen();
});

Spelare1 = 0;
Spelare2 = 0;
Oavgjord = 0;