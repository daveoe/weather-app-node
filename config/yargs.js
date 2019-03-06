const argv = require('yargs').options({
        direction: {
            alias: 'd',
            desc: 'Direction of the city to get the weather',
            demand: true
        }
    })
    .help()
    .argv;
    

module.exports = {
    argv
}