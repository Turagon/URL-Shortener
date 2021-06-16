function urlCheck(url) {
  const rule = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  const obj = new RegExp(rule);
  if (obj.test(url)) {
    return true;
  } else {
    return false;
  }
}

module.exports = urlCheck