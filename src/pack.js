var concat = require("concat");
var path = require("path");
var glob = require("glob");
const distFolder = "dist/fluxo-contratacao";
const g = (p) =>
  path.join(
    process.cwd(),
    distFolder,
    glob.sync(p, { cwd: path.join(process.cwd(), distFolder) })[0]
  );

concat(
  [
    g("runtime.*.js"),
    g("polyfills-es5.*.js"),
    g("polyfills.*.js"),
    g("main.*.js"),
  ],
  path.join(distFolder, `app.js`)
);
