import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  target: "esnext",
  treeshake: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  sourcemap: true,
  clean: true,
});
