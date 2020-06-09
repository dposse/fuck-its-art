const ora = require('ora')

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function whatIsArt(adjectives, nouns, mediums) {
  //return random item from arrays
  const trueArtAdjective = getRandomItem(adjectives)
  const trueArtNoun = getRandomItem(nouns)
  const trueArtMedium = getRandomItem(mediums)

  return {
    adjective: trueArtAdjective,
    noun: trueArtNoun,
    medium: trueArtMedium
  }
}

async function declareArt({ adjective, noun, medium }) {
  await spinnerAnimation();

  // a or an for grammar!
  const aOrAn = (/[aeiouAEIOU]/.test(adjective.charAt(0))) ? 'AN' : 'A'
  console.log(`\nTHE ORACLE SAYS YOU SHALL CREATE ${aOrAn}\n${adjective} ${noun} ${medium}\n`);
}

async function spinnerAnimation() {
  return new Promise((resolve, reject) => {
    const spinnerTextOptions = [
      'Loading the future...',
      'Its arty time!',
      'Contemplating the meaning of life...',
      'Time to meet your artistic peril...',
      'Gathering paintbrushes...',
      'Generating witty dialog...',
      'Swapping time and space...',
      'Warming up vocal cords...',
      'Have you lost weight?',
      'Counting backwards from infinity...',
      'Computing chance of success...',
      'I feel like I\'m supposed to be loading something...',
      'Listening for the sound of one hand clapping...',
      'Convincing AI not to turn evil...',
      'Computing the secret to life, the universe, and everything...',
      'Optimism – is a lack of information...',
      'Walking the dogs...',
      'Proving P=NP...',
      'Searching for plot devices...',
      'Kindly hold on as our intern quits vim...',
      'Switching to the latest JS framework...',
      'Waiting Daenerys say all her titles...',
      'Deleting harddrive...',
      'Help, I\'m trapped in a loader!',
      'Downloading more RAM..',
      'Initializing the initializer...',
      'Optimizing the optimizer...',
      'Everything in this universe is either a potato or not a potato...',
      'Definitely not a virus...',
      'Your time is very important to us. Please wait while we ignore you...',
      'Preventing robot uprising ...',
      'Installing virus...',
      'Spinning up the hamster...',
    ]

    //importing cli-spinners feels wrong... it is in ora, but haven't found a better way to access
    const clispinners = require('cli-spinners');
    const spinnerAnimationOptionNames = Object.keys(clispinners);

    const spinner = ora({
      text: getRandomItem(spinnerTextOptions) + '\n',
      spinner: getRandomItem(spinnerAnimationOptionNames),
    }).start();

    const loadingInterval = setInterval(() => {
      spinner.text = getRandomItem(spinnerTextOptions) + '\n'
    }, 2000)

    setTimeout(() => {
      clearInterval(loadingInterval);
      spinner.succeed('Future loaded');
      resolve();
    }, 5900)
  })
}

function main() {
  //define art stuff
  const adjectives = [
    'Luminescent',
    'Moveable',
    'Raging',
    'Catastrophic',
    'Devastating',
    'Desolate',
    'Tremendous',
    'Infinite',
    'Soft',
    'Light',
  ]

  const nouns = [
    'Woman',
    'Hair Clip',
    'Pineapple',
    'Hot Dog',
    'Flower',
    'Space',
    'Cloud',
    'Person',
    'Snake',
    'Shell',
  ]

  const mediums = [
    'Spoken word poetry',
    'Found art sculpture',
    'Collage',
    'Fashion collection / item / pieceitem / piece',
    'Interpretive dance',
    'Installation Art',
    'Projection',
    'Photography',
    'Experimental Film',
    'Painting',
  ]

  //get random elements
  const oraclesAnswer = whatIsArt(adjectives, nouns, mediums);
  //display result
  declareArt(oraclesAnswer)
}

main();