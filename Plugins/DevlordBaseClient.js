//Authour: Dustin Harris
//GitHub: https://github.com/DevL0rd
//Last Update: 3/17/2018
//Version: 1.0.0
function init(settings, events, io, log, commands) {
    commands.refresh = function () {
        log("Forcing clients to refresh.")
        io.emit("forceRefresh")
    }
}
exports.init = init;