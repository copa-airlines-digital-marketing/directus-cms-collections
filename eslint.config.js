import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { ignores: ['coverage', 'public', 'dist', 'pnpm-lock.yaml']},
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]);