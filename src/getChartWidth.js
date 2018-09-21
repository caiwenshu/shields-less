export default function (str) {
  var count = 0
  for (var i = 0, len = str.length; i < len; i++) {
    count += str.charCodeAt(i) < 256 ? 1 : 2
  }
  return count * 6 + 10
}
