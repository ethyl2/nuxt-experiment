<template>
  <div class="container flex flex-col space-y-2">
    <h1 class="text-lg md:text-xl">Cistercian Monk Numerals</h1>
    <form @submit.prevent="breakdown">
      <input
        v-model="numberInput"
        class="text-black"
        type="number"
        min="0"
        max="9999"
        required
      />
      <button type="submit">Breakdown Number</button>
    </form>
    <p v-if="numberInput">{{ numberInput }}</p>
    <p v-if="numberBreakdown.thousands">
      Thousands: {{ numberBreakdown.thousands }}
    </p>
    <p v-if="numberBreakdown.hundreds">
      Hundreds: {{ numberBreakdown.hundreds }}
    </p>
    <p v-if="numberBreakdown.tens">Tens: {{ numberBreakdown.tens }}</p>
    <p v-if="numberBreakdown.ones">Ones: {{ numberBreakdown.ones }}</p>
    <button type="button" @click="clearAll">Clear</button>

    <canvas
      id="myCanvas"
      ref="myCanvas"
      width="100"
      height="125"
      class="bg-white"
    ></canvas>
    <button
      v-if="
        numberBreakdown.ones ||
        numberBreakdown.tens ||
        numberBreakdown.hundreds ||
        numberBreakdown.thousands
      "
      type="button"
      @click="drawZero"
    >
      Start by drawing zero
    </button>
    <button v-if="numberBreakdown.ones" type="button" @click="drawOnes">
      Draw digit in the ones position: {{ numberBreakdown.ones }}
    </button>
    <button v-if="numberBreakdown.tens" type="button" @click="drawTens">
      Draw the digit in the tens position: {{ numberBreakdown.tens }}
    </button>
    <button v-if="numberBreakdown.hundreds" type="button" @click="drawHundreds">
      Draw the digit in the hundreds position: {{ numberBreakdown.hundreds }}
    </button>
    <button
      v-if="numberBreakdown.thousands"
      type="button"
      @click="drawThousands"
    >
      Draw the digit in the thousands position: {{ numberBreakdown.thousands }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CistercianMonkNumerals',
  data() {
    return {
      numberInput: null,
      numberBreakdown: {
        thousands: null,
        hundreds: null,
        tens: null,
        ones: null,
      },
      ctx: null,
      mainX: 50,
      topY: 25,
      bottomY: 100,
    }
  },
  mounted() {
    this.ctx = this.$refs.myCanvas.getContext('2d')
  },
  methods: {
    breakdown() {
      this.numberBreakdown = {
        thousands: null,
        hundreds: null,
        tens: null,
        ones: null,
      }
      let num = parseInt(this.numberInput)
      this.numberBreakdown.thousands = parseInt(num / 1000)
      if (this.numberBreakdown.thousands > 0) {
        num %= 1000
      }
      this.numberBreakdown.hundreds = parseInt(num / 100)
      if (this.numberBreakdown.hundreds > 0) {
        num %= 100
      }
      this.numberBreakdown.tens = parseInt(num / 10)
      if (this.numberBreakdown.tens > 0) {
        num %= 10
      }
      this.numberBreakdown.ones = num
    },
    drawZero() {
      if (this.numberBreakdown) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.mainX, this.topY)
        this.ctx.lineTo(this.mainX, this.bottomY)
        this.ctx.stroke()
      }
    },
    drawOnes() {
      if (this.numberBreakdown.ones > 0) {
        this.ctx.beginPath()
        if (this.numberBreakdown.ones % 2 === 1) {
          this.ctx.moveTo(this.mainX, this.topY)
          if (this.numberBreakdown.ones === 3) {
            this.ctx.lineTo(this.mainX + 25, this.topY + 25)
          } else {
            this.ctx.lineTo(this.mainX + 25, this.topY)
            if (this.numberBreakdown.ones === 5) {
              this.ctx.lineTo(this.mainX, this.topY + 25)
            } else if ([7, 9].includes(this.numberBreakdown.ones)) {
              this.ctx.lineTo(this.mainX + 25, this.topY + 25)
              if (this.numberBreakdown.ones === 9) {
                this.ctx.lineTo(this.mainX, this.topY + 25)
              }
            }
          }
        } else if (this.numberBreakdown.ones !== 6) {
          this.ctx.moveTo(this.mainX, this.topY + 25)
          if (this.numberBreakdown.ones === 4) {
            this.ctx.lineTo(this.mainX + 25, this.topY)
          } else {
            this.ctx.lineTo(this.mainX + 25, this.topY + 25)
            if (this.numberBreakdown.ones === 8) {
              this.ctx.lineTo(this.mainX + 25, this.topY)
            }
          }
        } else {
          this.ctx.moveTo(this.mainX + 25, this.topY)
          this.ctx.lineTo(this.mainX + 25, this.topY + 25)
        }
        this.ctx.stroke()
      }
    },
    drawTens() {
      if (this.numberBreakdown.tens > 0) {
        this.ctx.beginPath()
        if (this.numberBreakdown.tens % 2 === 1) {
          this.ctx.moveTo(this.mainX, this.topY)
          if (this.numberBreakdown.tens === 3) {
            this.ctx.lineTo(this.mainX - 25, this.topY + 25)
          } else {
            this.ctx.lineTo(this.mainX - 25, this.topY)
            if (this.numberBreakdown.tens === 5) {
              this.ctx.lineTo(this.mainX, this.topY + 25)
            } else if ([7, 9].includes(this.numberBreakdown.tens)) {
              this.ctx.lineTo(this.mainX - 25, this.topY + 25)
              if (this.numberBreakdown.tens === 9) {
                this.ctx.lineTo(this.mainX, this.topY + 25)
              }
            }
          }
        } else if (this.numberBreakdown.tens !== 6) {
          this.ctx.moveTo(this.mainX, 50)
          if (this.numberBreakdown.tens === 4) {
            this.ctx.lineTo(this.mainX - 25, this.topY)
          } else {
            this.ctx.lineTo(this.mainX - 25, this.topY + 25)
            if (this.numberBreakdown.tens === 8) {
              this.ctx.lineTo(this.mainX - 25, this.topY)
            }
          }
        } else {
          this.ctx.moveTo(this.mainX - 25, this.topY)
          this.ctx.lineTo(this.mainX - 25, this.topY + 25)
        }
        this.ctx.stroke()
      }
    },
    drawHundreds() {
      if (this.numberBreakdown.hundreds > 0) {
        this.ctx.beginPath()
        if (this.numberBreakdown.hundreds % 2 === 1) {
          this.ctx.moveTo(this.mainX, this.bottomY)
          if (this.numberBreakdown.hundreds === 3) {
            this.ctx.lineTo(this.mainX + 25, this.bottomY - 25)
          } else {
            this.ctx.lineTo(this.mainX + 25, this.bottomY)
            if (this.numberBreakdown.hundreds === 5) {
              this.ctx.lineTo(this.mainX, this.bottomY - 25)
            } else if ([7, 9].includes(this.numberBreakdown.hundreds)) {
              this.ctx.lineTo(this.mainX + 25, this.bottomY - 25)
              if (this.numberBreakdown.hundreds === 9) {
                this.ctx.lineTo(this.mainX, this.bottomY - 25)
              }
            }
          }
        } else if (this.numberBreakdown.hundreds !== 6) {
          this.ctx.moveTo(this.mainX, this.bottomY - 25)
          if (this.numberBreakdown.hundreds === 4) {
            this.ctx.lineTo(this.mainX + 25, this.bottomY)
          } else {
            this.ctx.lineTo(this.mainX + 25, this.bottomY - 25)
            if (this.numberBreakdown.hundreds === 8) {
              this.ctx.lineTo(this.mainX + 25, this.bottomY)
            }
          }
        } else {
          this.ctx.moveTo(this.mainX + 25, this.bottomY)
          this.ctx.lineTo(this.mainX + 25, this.bottomY - 25)
        }
        this.ctx.stroke()
      }
    },
    drawThousands() {
      if (this.numberBreakdown.thousands > 0) {
        this.ctx.beginPath()
        if (this.numberBreakdown.thousands % 2 === 1) {
          this.ctx.moveTo(this.mainX, this.bottomY)
          if (this.numberBreakdown.thousands === 3) {
            this.ctx.lineTo(this.mainX - 25, this.bottomY - 25)
          } else {
            this.ctx.lineTo(this.mainX - 25, this.bottomY)
            if (this.numberBreakdown.thousands === 5) {
              this.ctx.lineTo(this.mainX, this.bottomY - 25)
            } else if ([7, 9].includes(this.numberBreakdown.thousands)) {
              this.ctx.lineTo(this.mainX - 25, this.bottomY - 25)
              if (this.numberBreakdown.thousands === 9) {
                this.ctx.lineTo(this.mainX, this.bottomY - 25)
              }
            }
          }
        } else if (this.numberBreakdown.thousands !== 6) {
          this.ctx.moveTo(this.mainX, this.bottomY - 25)
          if (this.numberBreakdown.thousands === 4) {
            this.ctx.lineTo(this.mainX - 25, this.bottomY)
          } else {
            this.ctx.lineTo(this.mainX - 25, this.bottomY - 25)
            if (this.numberBreakdown.thousands === 8) {
              this.ctx.lineTo(this.mainX - 25, this.bottomY)
            }
          }
        } else {
          this.ctx.moveTo(this.mainX - 25, this.bottomY)
          this.ctx.lineTo(this.mainX - 25, this.bottomY - 25)
        }
        this.ctx.stroke()
      }
    },
    clearAll() {
      this.numberBreakdown = {
        thousands: null,
        hundreds: null,
        tens: null,
        ones: null,
      }
      this.numberInput = null
      this.ctx.clearRect(0, 0, 100, 125)
    },
  },
}
</script>
