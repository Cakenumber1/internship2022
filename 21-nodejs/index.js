const {readAndWrite} = require('./webSever');
const {copy} = require('./services');
const {argv} = require('yargs')
    .help('h')
    .alias('h', 'help')
    .example('$0 --from ./test.txt --to ./qwe.txt',
        'Скопирует данные из test.txt в qwe.txt локально')
    .example('$0 --to ./qwe.txt --web',
        'Скопирует данные из body POST запроса в qwe.txt через web-сервер')
    .option('web', {describe: 'Запустить в режиме web-сервера'})
    .option('from', {describe: 'Путь откуда', default: './'})
    .option('to', {describe: 'Путь куда', default: './'})
    .check((argv) => {
      const {from = './', to = './'} = argv;
      if (argv.web) {
        readAndWrite(to);
        return true;
      } else {
        copy(from, to);
        return true;
      }
    });
