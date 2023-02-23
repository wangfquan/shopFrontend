Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.input = exports.default = void 0;

exports.input = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5, a = t.length, r = t;
    switch (e) {
      case "point":
        -1 === r.indexOf(".") && (r.length < 1 ? r = "0." : r += ".");
        break;

      case "delete":
        r = r.substr(0, r.length - 1);
        break;

      case "0":
        if (r.length < 1) r = "0."; else if ("0.0" !== r) {
            var c = r.indexOf(".");
            -1 !== c ? a - c <= 2 && (r += "0") : "0" !== r && (r += "0");
        }
        break;

      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if ("0" === r) {
            r = e;
            break;
        }
        var i = r.indexOf(".");
        -1 !== i ? a - i <= 2 && (r += e) : r += e;
    }
    return r.split(".")[0].length > s ? t : r;
};

exports.default = {};