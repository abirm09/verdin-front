import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ...compat.extends(),
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["import"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": "error",
      "no-undef": "error",
      "no-unused-expressions": "error",
      "no-unreachable": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-restricted-imports": [
        "warn",
        {
          name: "react-redux",
          importNames: ["useSelector", "useDispatch"],
          message:
            "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
        },
      ],
    },
  }),
];

export default eslintConfig;
