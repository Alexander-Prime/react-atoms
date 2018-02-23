const path = require("path");
const dts = require("dts-bundle");
const jsExt = /\.jsx?$/;
const tsExt = /\.tsx?$/;

module.exports = class DtsBundlePlugin {
  constructor(options) {
    this.options = options;
    this.chunks = new Map();
  }

  apply(compiler) {
    const { name, main, out } = this.options;
    const outPath = path.resolve(
      compiler.context,
      compiler.options.output.path,
    );

    compiler.plugin("compilation", compilation => {
      compilation.plugin("chunk-asset", (chunk, filename) => {
        if (tsExt.test(chunk.entryModule.userRequest)) {
          const dtsEntryRelative = path.relative(
            compiler.context,
            chunk.entryModule.userRequest,
          );
          const dtsEntry = path.resolve(
            outPath,
            dtsEntryRelative.replace(tsExt, ".d.ts"),
          );

          const dtsOutputRelative = path.relative(compiler.context, filename);
          const dtsOutput = path.resolve(
            outPath,
            dtsOutputRelative.replace(jsExt, ".d.ts"),
          );

          this.chunks.set(dtsEntry, dtsOutput);
        }
      });
    });

    compiler.plugin("done", () => {
      this.chunks.forEach((out, main) =>
        dts.bundle({
          name: process.env.npm_package_name,
          main,
          out,
          removeSource: true,
          outputAsModuleFolder: true,
        }),
      );
    });
  }
};
