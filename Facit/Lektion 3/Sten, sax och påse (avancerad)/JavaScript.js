let TotalaSpel = 0;
let Spelare1 = 0;
let Spelare2 = 0;

input.onButtonPressed(Button.A, () => {
  Spelare1 += 1;
  TotalaSpel += 1;
  basic.showLeds(`
    . # # . .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
  `);
  basic.clearScreen();
          
  if(Spelare1 == 3) {
    basic.showString("Spelare A vann!");
    Spelare1 = 0;
    Spelare2 = 0;
    TotalaSpel = 0;
  }
});

input.onButtonPressed(Button.B, () => {
  Spelare2 += 1;
  TotalaSpel += 1;
  basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . # .
    # # # . .
  `);
  basic.clearScreen();
          
  if(Spelare2 == 3) {
    basic.showString("Spelare B vann!");
    Spelare1 = 0;
    Spelare2 = 0;
    TotalaSpel = 0;
  }
});

input.onButtonPressed(Button.AB, () => {
  TotalaSpel += 1;
  basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
  `);
  basic.clearScreen();
});


input.onGesture(Gesture.Shake, () => {
  basic.showString("Spel spelade: ");
  basic.showNumber(TotalaSpel);
  basic.pause(500);
  basic.clearScreen();
});

TotalaSpel = 0;
Spelare1 = 0;
Spelare2 = 0;
