import { relative } from "path";

const buildNextLintCommand = filenames =>
  `next lint --fix --no-cache --file ${filenames
    .map(f => relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = filenames =>
  `prettier --write ${filenames.map(f => relative(process.cwd(), f)).join(" ")}`;

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildNextLintCommand, buildPrettierCommand],
};

export default lintStagedConfig;
