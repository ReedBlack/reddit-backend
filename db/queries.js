const pg = require("../db/knexConfig.js")

function getProfiles() {
    return pg('redditTest')
        .select()
        .from('profile')
        .orderBy('id', 'desc')
}

module.export = {
    getProfiles
}