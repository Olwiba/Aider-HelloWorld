import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter some text: ', (input) => {
  let asciiArt = '';
  for (let i = 0; i < input.length; i++) {
    asciiArt += input.charCodeAt(i) + ' ';
  }
  console.log('ASCII Art: ', asciiArt);
  rl.close();
});
