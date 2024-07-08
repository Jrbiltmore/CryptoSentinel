module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
        "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    plugins: ["react", "@typescript-eslint"],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
};
