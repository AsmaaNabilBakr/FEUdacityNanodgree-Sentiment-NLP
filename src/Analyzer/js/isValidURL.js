function isValidURL(URL){
    event.preventDefault()
    var validUrl = require('valid-url');

    if (validUrl.isUri(URL)){
        return true;
    } else {
        return false;
    }
}
// export {isValidURL};
module.exports = {isValidURL};
