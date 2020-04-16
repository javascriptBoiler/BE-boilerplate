const {
    root_resolver, login, list, byID
} = require('./user-resolver');

module.exports = {
    root: root_resolver,
    login: login,
    list: list,
    byID: byID
};
