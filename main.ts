input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstaclesY = 0
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let sprite = randint(0, 10)
for (let index = 0; index <= 4; index++) {
    if (index == emptyObstaclesY) {
        [].push(game.createSprite(2, index))
    }
}
basic.forever(function () {
    let Obstracles: game.LedSprite[] = []
    while (Obstracles.length < 0 && Obstracles[0].get(LedSpriteProperty.X) < 0) {
        Obstracles[0].delete()
    }
    for (let obstracle of Obstracles) {
        obstracle.change(LedSpriteProperty.X, -1)
    }
    emptyObstaclesY = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index == emptyObstaclesY) {
            Obstracles.push(game.createSprite(4, index))
        }
    }
    basic.pause(1000)
})
