<template>
  <div class="container flex-col px-4 md:px-0">
    <h1 v-if="!presentSong" class="text-2xl py-4">
      Create a Custom 12 Days of Harry Potter Christmas Song
    </h1>
    <div v-if="currentDayIndex < days.length" class="w-full">
      <form
        class="flex flex-col space-y-2 w-5/6 mx-auto md:w-1/2"
        @submit.prevent="submitStep"
      >
        <label for="day"
          >Choose the {{ days[currentDayIndex].which }} gift:</label
        >
        <select
          v-model="chosenOptions[currentDayIndex]"
          class="text-black w-full mx-auto rounded p-1"
          name="day"
          required
        >
          <option value="-" class="text-black" disabled>Choose:</option>
          <option
            v-for="option in days[currentDayIndex].options"
            :key="option"
            :value="option"
            class="text-black"
          >
            {{ option }}
          </option>
        </select>
        <button
          type="submit"
          class="px-2 py-1 bg-black rounded hover:bg-gray-900 font-bold w-full mx-auto"
          style="max-width: 200px"
        >
          Submit
        </button>
      </form>
    </div>
    <div v-if="!presentSong && currentDayIndex === days.length" class="w-full">
      <form
        class="flex flex-col space-y-2 w-5/6 mx-auto md:w-1/2"
        @submit.prevent="submitGiver"
      >
        <label for="giver">Choose the giver:</label>
        <select
          v-model="chosenGiver"
          class="text-black w-full mx-auto rounded p-1"
          name="giver"
          required
        >
          <option value="-" class="text-black" disabled>Choose:</option>
          <option
            v-for="option in givers"
            :key="option"
            :value="option"
            class="text-black"
          >
            {{ option }}
          </option>
        </select>
        <button
          type="submit"
          class="px-2 py-1 bg-black rounded hover:bg-gray-900 font-bold w-full mx-auto"
          style="max-width: 200px"
        >
          Submit
        </button>
      </form>
    </div>
    <div v-if="presentSong">
      <h2 class="text-2xl py-2">The 12 Days of a Harry Potter Christmas</h2>
      <div
        v-for="(day, index) in days"
        :key="day.which"
        class="p-2 mx-auto my-4 bg-gray-800 rounded md:w-1/2"
      >
        <p>
          On the
          <span class="text-green-500 font-bold">{{ day.which }}</span> day of
          Christmas, {{ chosenGiver }} gave to me:
        </p>
        <p class="text-orange-500 text-lg font-bold">
          {{ chosenOptions[index] }}{{ index === 0 ? '.' : ',' }}
        </p>
        <p v-if="index > 0">{{ getRestOfVerse(index) }}</p>
      </div>
    </div>
    <img
      src="/song_images/potion.png"
      alt="Christmasy potion"
      class="mx-auto pt-8 pb-4 w-1/2 md:w-1/4"
    />
    <button
      v-if="presentSong"
      type="button"
      class="my-4 px-2 py-1 bg-black rounded hover:bg-gray-900 font-bold w-full mx-auto"
      style="max-width: 200px"
      @click="reset"
    >
      Make Another Version
    </button>
  </div>
</template>

<script>
export default {
  name: 'TwelveDays',
  data() {
    return {
      currentDayIndex: 0,
      chosenOptions: [],
      chosenGiver: '',
      presentSong: false,
      givers: [
        'my true love',
        'my Harry',
        'my Won Won',
        'J.K. Rowling',
        'the owl post',
        'Voldy',
        'Sirius',
        'Lee Jordan',
        'Lockhart',
        'my Hagrid',
        'Hermione',
      ],
      days: [
        {
          which: 'first',
          options: [
            'A new sweater under the tree',
            'A wilting Whomping Willow tree',
            'A cloak of invisibility',
            'A lovely pumpkin pasty',
            'A bowtruckle in a wiggentree',
            'A wand from a hollywood tree',
            'A lecture all about the Ministry',
            'A Numbus Two Thousand and Three',
            'One life-changing story',
            'A boy who killed off Voldemort',
            'An Ollivander wand that chose me',
          ],
        },
        {
          which: 'second',
          options: [
            'Two phoenix feathers',
            'Two time turners',
            'Two best friends',
            'Two Weasley twins',
            'Two hippogriffs',
            'Two pesky pixies',
            'Two chocolate frogs',
            'Two annoying Malfoys',
            'Two butterbeers',
            'Two radish earrings',
          ],
        },
        {
          which: 'third',
          options: [
            'Three vulture hats',
            'Three Potter kids',
            'Three Deathly Hallows',
            'Three sneakoscopes',
            'Three house elves',
            'Three bashing bludgers',
            'Three Gryffindors',
            'Three cornish pixies',
            'Three firebolts',
            'Three Dursleys',
            'Three chocolate frogs',
          ],
        },
        {
          which: 'fourth',
          options: [
            'Four flobberworms',
            'Four chocolate frogs',
            'Four Hogwarts houses',
            'Four Fizzing Whizbees',
            "Four founder's relics",
            'Four marauder maps',
            'Four weeks detention',
            'Four flesh-eating slugs',
            'Four owl posts',
            'Four snowy owls',
          ],
        },
        {
          which: 'fifth',
          options: [
            'Five golden snitches',
            'Five puking pastelles',
            'Five galleons',
            'Five Firebolts',
            'Five drowning doxies',
            'Five quidditch teams',
            'Five elder wands',
            'Five quidditch balls',
            'Five flying brooms',
          ],
        },
        {
          which: 'sixth',
          options: [
            'Six signed portraits (thanks, Lockhart)',
            'Six brooms a-flying',
            'Six DA fighters',
            'Six crystal goblets',
            'Six golden snitches',
            'Six wands a-waving',
            'Six bouncing boggarts',
            'Six wizards flying',
            'Six enslaved house elves',
            'Six potion bottles',
            'Six years of Hogwarts',
            'Six dementors roaming',
            'Six Gryffindors',
            'Six mischief nargles',
            'Six Weasley boys',
            'Six quidditch teammates',
          ],
        },
        {
          which: 'seventh',
          options: [
            'Seven stolen cauldrons (thanks, Mundungas)',
            'Seven Weasleys squabbling',
            'Seven horcruxes',
            'Seven secrecy sensors',
            'Seven portaits talking',
            'Seven stink pellets',
            'Seven skiving snackboxes',
            'Seven bouncing ferrets',
            'Seven better books',
            'Seven books for reading',
            'Seven quidditch players',
            'Seven years at Hogwarts',
          ],
        },
        {
          which: 'eighth',
          options: [
            'Eight outdated dress robes',
            'Eight ghosts a-gliding',
            'Eight-legged spiders',
            'Eight angry giants',
            'Eight time turners',
            'Eight beaters whacking',
            'Eight ugly Umbridges',
            'Eight socks for Dobby',
            "Eight sorcerer's stones",
            'Eight films for watching',
            'Eight Slytherins',
            'Eight attempts to kill Harry',
            'Eight elves a-baking',
            'Eight books by Lockhart',
          ],
        },
        {
          which: 'ninth',
          options: [
            'Nine Nosebleed Nougats',
            'Nine dementors swooping',
            'Nine and three quarters',
            'Nine naughty nifflers',
            'Nine Firebolts',
            'Nine Chasers scoring',
            'Nine leaking leeches',
            'Nine keepers keeping',
            "Nine wizard's chess boards",
            'Nine ginger Weasleys',
            'Nine herbology students',
            'Nine thestrals grazing',
            'Nine folks named Weasley',
          ],
        },
        {
          which: 'tenth',
          options: [
            'Ten Bat Bogey Hexes',
            'Ten times a-turning',
            'Ten points for Neville',
            'Ten exploding tubas',
            'Ten sugar quills',
            'Ten veela dancing',
            'Ten horny hippogriffs',
            'Ten seekers seeking',
            'Ten polyjuice potions',
            'Ten chocolate frogs',
            'Ten wands for casting',
            'Ten Cornish pixies',
            'Ten points from Gryffindor',
          ],
        },
        {
          which: 'eleventh',
          options: [
            'Eleven portraits prattling',
            'Eleven shrunken elf heads',
            'Eleven wizard crackers',
            'Eleven puking pastilles',
            'Eleven portkeys whirling',
            'Eleven dueling dragons',
            'Eleven dark dementors',
            'Eleven werewolves howling',
            'Eleven dragon eggs',
            'Eleven winged keys',
            'Eleven pixies swarming',
            "Eleven Slyth'rins scheming",
          ],
        },
        {
          which: 'twelfth',
          options: [
            'Twelve more Weasley sweaters',
            'Twelve owls a-hooting',
            'Twelve Grimmauld Place',
            'Twelve two-way mirrors',
            'Twelve pygmy puffs',
            'Twelve goblets flaming',
            'Twelve puking pastilles',
            'Twelve years in Azkaban',
            'Twelve falcons crying',
            'Twelve time turners',
            'Twelve Hogwarts letters',
            'Twelve warm butterbeers',
          ],
        },
      ],
    }
  },
  methods: {
    submitStep() {
      if (this.currentDayIndex < this.days.length) {
        this.currentDayIndex += 1
      }
    },
    submitGiver() {
      this.presentSong = true
    },
    getRestOfVerse(index) {
      let rest = ''
      for (let i = index - 1; i > 0; i--) {
        rest +=
          this.chosenOptions[i].charAt(0).toLowerCase() +
          this.chosenOptions[i].slice(1) +
          ', '
      }
      if (index > 0) {
        rest +=
          'and ' +
          this.chosenOptions[0].charAt(0).toLowerCase() +
          this.chosenOptions[0].slice(1) +
          '.'
      }
      return rest
    },
    reset() {
      this.currentDayIndex = 0
      this.chosenOptions = []
      this.chosenGiver = ''
      this.presentSong = false
    },
  },
}
</script>
