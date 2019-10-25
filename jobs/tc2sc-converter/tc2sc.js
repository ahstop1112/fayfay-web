const mariaDb = require('mariadb');
const program = require('commander');
const config = require('./config');
const tables = [
    'ActivityGallery',
    'ActivityTranslation',
    'ArticleTranslation',
    'CategoryTranslation',
    'CityIconTranslation',
    'CitySectionTranslation',
    'CityTranslation',
    'CouponTranslation',
    'PackageTranslation'
];

let tableName, startIndex, endIndex;
program.version('0.1.0').description('Traditional Chinese to Simplified Chinese Converter.')
    .arguments('<table> <start> <end>')
    .option('-o, --operate [op]', 'Add a operate to indicate the language converter', 'zh-hans')
    .action((table, start, end) => {
        tableName = table;
        startIndex = start;
        endIndex = end;
    })
    .parse(process.argv);
if (typeof tableName === 'undefined') {
    console.error('Input the table name you want to convert!');
    process.exit();
} else if (tableName !== 'All' && tables.indexOf(tableName) === -1) {
    console.error(`The table name you input is not found, it should be one of 
            ActivityGallery
            ActivityTranslation
            ArticleTranslation
            CategoryTranslation
            CityIconTranslation
            CitySectionTranslation
            CityTranslation
            CouponTranslation
            PackageTranslation`);
    process.exit();
} else if (typeof startIndex === 'undefined') {
    console.error('Start index is required!');
    process.exit();
} else if (isNaN(startIndex)) {
    console.error('Start index must be a number!');
    process.exit();
} else if (isNaN(endIndex)) {
    console.error('End index must be a number!');
    process.exit();
}

const pool = mariaDb.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    connectionLimit: config.connectionLimit
});

async function readAndWriteConvertData() {
    let conn;
    try {

        let processTables = [];
        if (tableName === 'All') {
            processTables = tables;
        } else {
            processTables.push(tableName);
        }

        conn = await pool.getConnection();

        for (const entity of processTables) {
            const converter = require(`./${entity}`);

            await converter.process(conn, startIndex, endIndex);
        }
    } catch (err) {
        console.error(err);
        if (conn) {
            conn.end();
        }
    } finally {
        if (conn) {
            conn.end();
        }
        process.exit();
    }
}

(async () => {
    console.log('Start');

    await readAndWriteConvertData();

})().catch(err => {
    console.error(err);

    process.exit();
});

process.on('exit', code => {
    console.log('END');
});

process.on('uncaughtException', err => {
    console.log(err);
});
