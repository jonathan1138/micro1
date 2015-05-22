checkForProperURLPrefixAndFixIfNecessary = function(testUrl) {
  var prefix = 'http://';
  if (testUrl.substr(0, prefix.length) !== prefix) {
    testUrl = prefix + testUrl;
  }
  return testUrl;
}