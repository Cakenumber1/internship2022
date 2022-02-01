const {readAndWriteWeb, readAndWriteLocal} = require('./writeFunc');
const {argv} = require('yargs')
    .help('h')
    .alias('h', 'help')
    .example('$0 --from ./test.txt --to ./qwe.txt',
        'Скопирует данные из test.txt в qwe.txt локально')
    .example('$0 --from ./test.txt --to ./qwe.txt --web',
        'Скопирует данные из test.txt в qwe.txt через web-сервер')
    .option('web', {describe: 'Запустить в режиме web-сервера'})
    .option('from', {describe: 'Путь откуда', default: './'})
    .option('to', {describe: 'Путь куда', default: './'})
    .check((argv) => {
      const {from = './', to = './'} = argv;
      if (argv.web) {
        readAndWriteWeb(from, to);
        return true;
      } else {
        readAndWriteLocal(from, to);
        return true;
      }
    });
