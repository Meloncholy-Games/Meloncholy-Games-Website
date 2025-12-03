import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettier,
    {
        rules: {
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allow: [{ name: ["Error", "URL", "URLSearchParams"], from: "lib" }],
                    allowBoolean: true,
                    allowNullish: true,
                    allowNumber: true
                }
            ]
        }
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ]
        }
    },
    {
        files: ["tst/**"],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: { jest },
        rules: {
            ...jest.configs["flat/recommended"].rules,
            ...jest.configs["flat/style"].rules,
            "jest/no-mocks-import": "off",
            "jest/padding-around-all": "error",
            "jest/prefer-comparison-matcher": "error",
            "jest/prefer-equality-matcher": "error",
            "jest/prefer-jest-mocked": "error",
            "@typescript-eslint/unbound-method": "off"
        }
    }
);
