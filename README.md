# CSSCODER Project Builder

Сборщик настроенный на решение стандартных вопросов Front-End разработчиков, построен на Gulp.js

#### Кто на чем пишет а сборщик настроен на работу с 

* [Jade] (https://github.com/jadejs/jade) препроцессор-шаблонизартор HTML
* [Stylus] (https://github.com/stylus/stylus) CSS препроцессор

#### Вспомогательные используемые решения

* [Babel](https://github.com/babel/gulp-babel) помогает писать в новом стандарте JavaScript ES2015
* [SC5-styleguide] (https://github.com/SC5/sc5-styleguide) Построение стайлГайда
* [BrowserSync] (https://github.com/BrowserSync/gulp-browser-sync) запускает локально сервер для тестирования работы
* [LostGrid] (https://github.com/corysimmons/lost) - построение сеток
* [Bower] (http://bower.io/) - инсталяция js библиотечек
* [ImageMin] (https://github.com/sindresorhus/gulp-imagemin) минификатор используемых изображений
* [PostCSS] (https://github.com/postcss/postcss) - постпроцессор для CSS на его основе работают некоторые используемые инструменты
* [cssnano] (https://github.com/ben-eb/cssnano) минификатор стилей
* [autoprefixer] (https://github.com/postcss/autoprefixer) Авто подстановка префиксов в CSS
* [postcss-svg] (https://github.com/Pavliko/postcss-svg) svg иконки в inline CSS (иконки только в текущем размере который будет использоваться в проекте)
* [css-mqpacker] (https://github.com/hail2u/node-css-mqpacker) Объединение media query
* [postcss-sprites] (https://github.com/2createStudio/postcss-sprites) css спрайт png 


Для запуска проекта прописаны следующие команды 
		
		// команда сборки проекта в продакшн
		gulp
		// команда для разработки
		gulp dev
		// команда очистки проекта
		gulp del

