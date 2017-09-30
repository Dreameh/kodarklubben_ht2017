# Basic

### show number
```javascript
basic.showNumber(0);
```

　

### show number
__`*`__ = På, __`.`__ = Av
```javascript
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
`);
```

　

### show icon
`IconNames.Heart`, `IconNames.SmallHeart`, `IconNames.Yes`, `IconNames.No`, `IconNames.Happy`, `IconNames.Sad`, `IconNames.Confused`, `IconNames.Angry`, `IconNames.Asleep`, `IconNames.Surprised`, `IconNames.Silly`, `IconNames.Fabulous`, `IconNames.Meh`, `IconNames.TShirt`, `IconNames.RollerSkate`, `IconNames.Duck`, `IconNames.House`, `IconNames.Tortoise`, `IconNames.Butterfly`, `IconNames.StickFigure`, `IconNames.Ghost`, `IconNames.Sword`, `IconNames.Giraffe`, `IconNames.Skull`, `IconNames.Umbrella`, `IconNames.Snake`, `IconNames.Rabbit`, `IconNames.Cow`, `IconNames.QuarterNote`, `IconNames.EightNote`, `IconNames.Pitchfork`, `IconNames.Target`, `IconNames.Triangle`, `IconNames.LeftTriangle`, `IconNames.ChessBoard`, `IconNames.Diamond`, `IconNames.SmallDiamond`, `IconNames.Square`, `IconNames.SmallSquare`, `IconNames.Scissors`
```javascript
basic.showIcon(IconNames.Heart);
```

　

### show string
```javascript
basic.showString("Hello!");
```

　

### on start
bara att börja skriva något i JavaScript så blir det insatt i `on start`

　

### forever
```javascript
basic.forever(() => {

});
```

　

### pause (ms)
```javascript
basic.pause(100);
```

　

### clear screen
```javascript
basic.clearScreen();
```

　

### show arrow
`ArrowNames.North`, `ArrowNames.South`, `ArrowNames.West`, `ArrowNames.East`
```javascript
basic.showArrow(ArrowNames.North);
```