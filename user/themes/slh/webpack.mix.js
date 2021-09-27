const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss');

mix.sass('scss/app.scss', 'css/custom.css')
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('tailwind.config.js')
        ],
    })
    .purgeCss({
        enabled: mix.inProduction(),
        content: [
            `./templates/**/*.twig`,
            `./scss/**/*.scss`
        ],
        folders: ['js', 'scss', 'templates'],
        extensions: ['html', 'js', 'twig', 'scss'],
        whitelistPatterns: [
            //
        ],
    });
