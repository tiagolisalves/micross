function genPrefix(selector) {
  function getHash(input) {
    var hash = 0,
      len = input.length;
    for (var i = 0; i < len; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
  }
  console.log(getHash(selector) + "");

  const prefix = (getHash(selector) + "")
    .replace("-", "")
    .split("")
    .reduce(function (acc, cv) {
      return acc + parseInt(cv);
    }, 0);

  return selector[0] + selector[selector.length - 1] + prefix;
}

module.exports = { genPrefix };
