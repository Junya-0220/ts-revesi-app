const STONE = 0
const PAPER = 1
const SCISSORS = 2

interface HandGenerator {
    generate(): number
  }

class RandomHandGenerator implements HandGenerator {
    generate(): number {
      return Math.floor(Math.random() * 3)
    }
  
    genareteArray(): number[] {
      // たくさん手を生成する関数
      return []
    }
  }
class Janken {
  play(handGenerator: HandGenerator) {
    const computerHand = handGenerator.generate()

    console.log(`computerHand = ${computerHand}`)

    // 勝敗判定などが続く...
  }
}

class StoneHandGenerator implements HandGenerator{
    generate(): number {
        return STONE
    }
}

const janken = new Janken()
const generator = new RandomHandGenerator()
janken.play(generator)

const generator2 = new StoneHandGenerator()
janken.play(generator2)

