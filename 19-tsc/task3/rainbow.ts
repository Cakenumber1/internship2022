import chalk from 'chalk';
import convertColor from 'color-convert';
import updateLog from 'log-update';
import delay from 'yoctodelay';

const ignoreChars = /[^!-~]/g;

function rainbow(string : string, offset : number) {
  if (!string || string.length === 0) {
    return string;
  }


  const hueStep = 360 / string.replace(ignoreChars, '').length;

  let hue : number = offset % 360;
  const characters = [];
  for (const character of string) {
    if (ignoreChars.test(character)) {
      characters.push(character);
    } else {
      characters.push(chalk.hex(convertColor.hsl.hex(hue, 100, 50))(character));
      hue = (hue + hueStep) % 360;
    }
  }

  return characters.join('');
}

async function animateString(string: string) {
  for (let index = 0; index < 360 * 5; index++) {
    updateLog(rainbow(string, index));
    await delay(2);
  }
}

(async () => {
  console.log();
  await animateString('We hope you enjoy Chalk! <3');
  console.log();
})();
