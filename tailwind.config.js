module.exports = {
    important: true,
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'nl-dark': {
                    'gray-purple': '#312536'
                },
                'nl-brown': {
                    '100': '#6a3528',
                    '200': '#2d110a'
                }
            }
        }
    },
    variants: {},
    plugins: [],
}
