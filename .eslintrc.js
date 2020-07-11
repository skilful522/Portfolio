module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'eslint-disable-next-line no-undef': [0, { extensions: ['.js', '.jsx'] }],
    },
    env: {
        browser: true,
    },
};
