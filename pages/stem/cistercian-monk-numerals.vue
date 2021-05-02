<template>
  <div class="container flex flex-col space-y-2">
    <h1 class="text-lg md:text-xl">Cistercian Monk Numerals</h1>
    <h2>
      In the 13th century, Cistercian monks invented a nifty system to write any
      number from 0-9999 using a single symbol.
    </h2>
    <h3>Let's convert an Arabic number into a Cistercian one!</h3>
    <p v-if="!hasBreakdown">
      First, let's break down your number into ones, tens, hundreds, and
      thousands.
    </p>
    <div class="flex justify-between items-stretch">
      <form
        class="flex flex-col items-center justify-center"
        @submit.prevent="breakdown"
      >
        <label for="numberInput">Your number:</label>
        <input
          id="numberInput"
          v-model="numberInput"
          name="numberInput"
          class="text-black rounded text-lg pl-2"
          type="number"
          min="0"
          max="9999"
          required
          @input="handleInputChange"
        />
        <button
          v-if="!hasBreakdown"
          type="submit"
          class="border bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
        >
          Breakdown
        </button>
      </form>
      <div v-if="hasBreakdown" class="border rounded m-2 p-2">
        <p v-if="numberBreakdown.thousands">
          Thousands: {{ numberBreakdown.thousands }}
        </p>
        <p v-if="numberBreakdown.hundreds">
          Hundreds: {{ numberBreakdown.hundreds }}
        </p>
        <p v-if="numberBreakdown.tens">Tens: {{ numberBreakdown.tens }}</p>
        <p v-if="numberBreakdown.ones">Ones: {{ numberBreakdown.ones }}</p>
      </div>
    </div>

    <button
      v-if="step === 1"
      type="button"
      class="border bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
      @click="drawZero"
    >
      Click to draw zero
    </button>

    <button
      v-if="step === 2"
      type="button"
      class="border bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
      @click="drawOnes"
    >
      Click to draw digit in the ones' position: {{ numberBreakdown.ones }}
    </button>

    <button
      v-if="step === 3"
      type="button"
      class="border bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
      @click="drawTens"
    >
      Click to draw the digit in the tens' position: {{ numberBreakdown.tens }}
    </button>

    <button
      v-if="step === 4"
      type="button"
      class="border bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
      @click="drawHundreds"
    >
      Click to draw the digit in the hundreds' position:
      {{ numberBreakdown.hundreds }}
    </button>

    <button
      v-if="step === 5"
      type="button"
      class="border bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
      @click="drawThousands"
    >
      Click to draw the digit in the thousands' position:
      {{ numberBreakdown.thousands }}
    </button>

    <p v-if="step === 6">All finished!</p>

    <canvas
      id="myCanvas"
      ref="myCanvas"
      width="100"
      height="125"
      class="bg-white rounded"
    ></canvas>

    <a
      v-if="step === 6"
      ref="buttonForDownload"
      download="cistercian-monk-numeral.png"
      href=""
      class="border text-white bg-teal-700 p-1 m-2 rounded hover:bg-teal-600"
      @click="downloadImage"
      >Download Image</a
    >

    <button type="button" @click="clearAll">Clear</button>

    <a
      href="https://www.zmescience.com/science/cirstercian-numbers-90432432/"
      target="_blank"
    >
      <img
        src="/cistercian_numbers.jpg"
        alt="Cistercian numbers"
        class="mx-auto w-2/3"
      />
    </a>
    <a
      href="https://www.zmescience.com/science/cirstercian-numbers-90432432/"
      target="_blank"
      >image source</a
    >
    <a
      href="https://www.zmescience.com/science/cirstercian-numbers-90432432/"
      target="_blank"
      >More about Cistercian numerals</a
    >
    <a href="https://www.dcode.fr/cistercian-numbers" target="_blank"
      >Another converter</a
    >
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
      step: 0,
    }
  },
  computed: {
    hasBreakdown() {
      return (
        this.numberBreakdown.ones !== null ||
        this.numberBreakdown.tens !== null ||
        this.numberBreakdown.hundreds !== null ||
        this.numberBreakdown.thousands !== null
      )
    },
  },
  mounted() {
    this.ctx = this.$refs.myCanvas.getContext('2d')
    this.ctx.lineWidth = 2
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
      this.step = 1
    },
    drawZero() {
      if (this.numberBreakdown) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.mainX, this.topY)
        this.ctx.lineTo(this.mainX, this.bottomY)
        this.ctx.stroke()
        if (this.numberBreakdown.ones) {
          this.step = 2
        } else if (this.numberBreakdown.tens) {
          this.step = 3
        } else if (this.numberBreakdown.hundreds) {
          this.step = 4
        } else {
          this.step = 5
        }
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

        if (this.numberBreakdown.tens) {
          this.step = 3
        } else if (this.numberBreakdown.hundreds) {
          this.step = 4
        } else if (this.numberBreakdown.thousands) {
          this.step = 5
        } else {
          this.step = 6
        }
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

        if (this.numberBreakdown.hundreds) {
          this.step = 4
        } else if (this.numberBreakdown.thousands) {
          this.step = 5
        } else {
          this.step = 6
        }
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
        if (this.numberBreakdown.thousands) {
          this.step = 5
        } else {
          this.step = 6
        }
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
        this.step = 6
      }
    },
    handleInputChange() {
      this.numberBreakdown = {
        thousands: null,
        hundreds: null,
        tens: null,
        ones: null,
      }
      this.ctx.clearRect(0, 0, 100, 125)
      this.step = 0
    },
    clearAll() {
      this.handleInputChange()
      this.numberInput = null
    },
    downloadImage() {
      const c = this.$refs.myCanvas
      const button = this.$refs.buttonForDownload
      // get image URI from canvas object
      const imageUri = c.toDataURL('image/png')
      button.href = imageUri
    },
  },
  head() {
    return {
      title: 'Cistercian Monk Numerals',
    }
  },
}
</script>
