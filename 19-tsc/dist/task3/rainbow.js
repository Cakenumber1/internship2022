var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import convertColor from 'color-convert';
import updateLog from 'log-update';
import delay from 'yoctodelay';
const ignoreChars = /[^!-~]/g;
function rainbow(string, offset) {
    if (string.length === 0) {
        return string;
    }
    const hueStep = 360 / string.replace(ignoreChars, '').length;
    let hue = offset % 360;
    const characters = [];
    for (const character of string) {
        if (ignoreChars.test(character)) {
            characters.push(character);
        }
        else {
            characters.push(chalk.hex(convertColor.hsl.hex([hue, 100, 50]))(character));
            hue = (hue + hueStep) % 360;
        }
    }
    return characters.join('');
}
function animateString(string) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < 360 * 5; index++) {
            updateLog(rainbow(string, index));
            yield delay(2);
        }
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log();
    yield animateString('hello');
    console.log();
}))();
//# sourceMappingURL=rainbow.js.map