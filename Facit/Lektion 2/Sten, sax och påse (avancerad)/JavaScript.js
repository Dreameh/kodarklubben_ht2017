let TotalaSpel = 0;
let Oavgjord = 0;
let Spelare2 = 0;
let Spelare1 = 0;

input.onButtonPressed(Button.A, () => {
  Spelare1 += 1;
  TotalaSpel += 1;
  basic.showLeds(`
    . # # . .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
  `);
  basic.clearScreen();

  if(Spelare1 == 3) {
    basic.showString("Spelare 1 vann!");
    Spelare1 = 0;
    Spelare2 = 0;
    TotalaSpel = 0;
  }
});

input.onButtonPressed(Button.B, () => {
  Spelare2 += 1;
  TotalaSpel += 1;
  basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
  `);
  basic.clearScreen();

  if(Spelare2 == 3) {
    basic.showString("Spelare 2 vann!");
    Spelare1 = 0;
    Spelare2 = 0;
    TotalaSpel = 0;
  }
});

input.onButtonPressed(Button.AB, () => {
  Oavgjord += 1;
  TotalaSpel += 1;
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
  basic.showString("Spel spelade: ");
  basic.showNumber(TotalaSpel);
  basic.pause(500);
  basic.clearScreen();
});

Spelare1 = 0;
Spelare2 = 0;
Oavgjord = 0;
TotalaSpel = 0;
