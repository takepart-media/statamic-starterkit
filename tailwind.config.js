module.exports = {
    mode: 'jit',

    purge: {
        content: [
            './addons/**/*.antlers.html',
            './addons/**/*.antlers.php',
            './resources/**/*.antlers.html',
            './resources/**/*.antlers.php',
            './resources/**/*.blade.php',
            './content/**/*.md'
        ]
    },

    theme: {
        extend: {

        },
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
