#!/usr/bin/env node

const postcss = require("postcss");
const fs = require("fs");
const path = require("path");
const utils = require("./utils");
const { Command } = require("commander");
var glob = require("glob");

const program = new Command();

program
  .option(
    "-p, --prefix <value>",
    "CSS file to be prefixed with the --selector aiming to isolate the styles from other frontends"
  )
  .option("-s, --selector <value>", "Selector to be used as a prefix")
  .option("-a, --pack <value...>", "Pack scripts and ease the frontend loading")
  .option("-o, --output <value>", "Name of the output file with the extension")

  .option("-c, --cwd <value>", "Directory where the command will run");

program.parse(process.argv);
const options = program.opts();
const cwd = defineCwd();

//fcross --prefix styles.*.css --selector coad-grid-exigencias --cwd test/fluxo-contratacao
if (options.prefix) {
  const prefixer = require("postcss-prefix-selector");
  // css to be processed
  const css = fs.readFileSync(
    path.join(cwd, glob.sync(options.prefix, { cwd })[0]),
    "utf8"
  );

  console.log(options.selector);

  const output = postcss()
    .use(
      prefixer({
        prefix: "." + utils.genPrefix(options.selector),
      })
    )
    .process(css).css;
  fs.writeFileSync(defineOutput(options.selector + "-styles.css"), output);
}
// fcross --pack  runtime.*.js polyfills-es5.*.js polyfills.*.js main.*.js
if (options.pack) {
  var concat = require("concat");
  const g = (p) => path.join(cwd, glob.sync(p, { cwd })[0]);

  concat(
    options.pack.map((s) => g(s)),
    defineOutput("app.js")
  );
}

function defineCwd() {
  return options.cwd ? path.join(process.cwd(), options.cwd) : process.cwd();
}

function defineOutput(defaultFilename) {
  return options.output
    ? path.join(process.cwd(), options.output)
    : path.join(process.cwd(), defaultFilename);
}
