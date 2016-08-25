var encode = [];
var decode = {};

var getCharArray = function (charA, charZ) {
    var arr = [];
    var i = charA.charCodeAt(0);
    var j = charZ.charCodeAt(0);

    for (; i <= j; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
};
encode = encode.concat(getCharArray('0', '9'));
encode = encode.concat(getCharArray('a', 'z'));
encode = encode.concat(getCharArray('A', 'Z'));
for (var i = 0; i < encode.length; i++) {
    decode[encode[i]] = i;
}

var getShortUrl = function (longUrl, longToShortHash, shortToLongHash) {
    if (longUrl.indexOf("http") === -1) {
        longUrl = "http://" + longUrl;
    }
    if (longToShortHash[longUrl] != null) {
        return longToShortHash[longUrl];
    } else {
        var shortUrl = generateShortUrl(longToShortHash);
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    }
};

var generateShortUrlV0 = function (longToShortHash) {
    return Object.keys(longToShortHash).length;
};

var generateShortUrl = function (longToShortHash) {
    return convertTo62(Object.keys(longToShortHash).length);
};

var convertTo62 = function (num) {
    var res = '';
    do {
        res = encode[num % 62] + res;
        num = Math.floor(num / 62);
    } while (num);
    return res;
};

var getLongUrl = function(shortUrl, shortToLongHash) {
    return shortToLongHash[shortUrl];
};

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};
