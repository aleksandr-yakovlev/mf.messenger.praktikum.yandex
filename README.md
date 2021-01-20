[![Netlify
Status](https://api.netlify.com/api/v1/badges/9aaef7de-1e5d-4fda-bc39-faa10a68b35b/deploy-status)](https://app.netlify.com/sites/mf-messenger/deploys) [![Heroku](http://heroku-badge.herokuapp.com/?app=mf-messenger-praktikum-yandex&style=flat&svg=1&kill_cache=1)](https://mf-messenger-praktikum-yandex.herokuapp.com/)

## Описание

Мессенджер. Проектная работа Яндекс.Практикум мидл фронтенд разработчик. Второй проект курса, начатый после его перезапуска с целью изменения стека: отказа от React в сторону Vanilla.js, для детального изучения Virtual DOM и его реализации.

- [Демо Netlify](https://mf-messenger.netlify.app/)
- [Демо Heroku](https://mf-messenger-praktikum-yandex.herokuapp.com/)
- [Демо Heroku Dev](https://mf-messenger-praktikum-ya-dev.herokuapp.com/)
- [Макет](https://www.figma.com/file/sliHo84YHIeYIr1kY1kY1i/Messenger-Praktikum?node-id=0%3A1)

## Этап разработки

Cделано:

- Развернут express, сверстаны макеты основных страниц, настроен автодеплой;
- Внедрен шаблонизатор handlebars, добавлена валидация форм, реализована сборка;
- Добавлен EventBus
- Тесты
- Роутер

## Установка

- `npm install` — установка стабильной версии,
- `npm start` — запуск версии для разработчика.
- `npm run build` — прод сборка приложения.
- `npm run test` — запуск тестов.

## **Используемые технологии**

- [Express](https://expressjs.com/ru/)
- [Handlebars](https://handlebarsjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

## **Примеры использования**

Разработка ведется в ветке dev, при пуше/мердже в ветку deploy проект разворачиватеся в [netlify](https://mf-messenger.netlify.app/)
