# CSSCODER Project Builder  [![Dependency Status](https://gemnasium.com/csscoderRU/project-builder.svg)](https://gemnasium.com/csscoderRU/project-builder)  [![Build Status](https://travis-ci.org/csscoderRU/project-builder.svg)](https://travis-ci.org/csscoderRU/project-builder)

Сборщик настроенный на решение стандартных вопросов Front-End разработи, построен на Gulp.js для стандартных проектов.

#### Кто на чем пишет, а сборщик настроен на работу с

* [Jade] (https://github.com/jadejs/jade) препроцессор-шаблонизартор HTML
* [Stylus] (https://github.com/stylus/stylus) CSS препроцессор

#### Вспомогательные используемые решения

* [Babel](https://github.com/babel/gulp-babel) помогает писать в новом стандарте JavaScript ES2015
* [BrowserSync] (https://github.com/BrowserSync/gulp-browser-sync) запускает локально сервер для тестирования работы
* [LostGrid] (https://github.com/corysimmons/lost) - построение сеток
* [Bower] (http://bower.io/) - инсталляция js библиотечек
* [ImageMin] (https://github.com/sindresorhus/gulp-imagemin) минификатор используемых изображений
* [PostCSS] (https://github.com/postcss/postcss) - постпроцессор для CSS на его основе работают некоторые используемые инструменты
* [cssnano] (https://github.com/ben-eb/cssnano) минификатор стилей
* [autoprefixer] (https://github.com/postcss/autoprefixer) Авто подстановка префиксов в CSS
* [css-mqpacker] (https://github.com/hail2u/node-css-mqpacker) Объединение media query
* [postcss-sprites] (https://github.com/2createStudio/postcss-sprites) css спрайт png

Для запуска проекта прописаны следующие команды

		// команда начальной инициализации (bower install)
		npm run init
