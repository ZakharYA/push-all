## Установка
> **[Node.js](https://nodejs.org/) 10.0.0 или новее версии** 

### NPM
```
npm i push-all
```
|[Документация](documentation.md)
|---------------------------|
## Пример
```js
const pushAll = require('push-all');

const push = new pushAll({
    id: 1,
    key: 'Ключ'
});

push.selfSend({
    title: 'Тестовое уведомление (PushAllJS)',
    text: 'Тестируем.........',
    url: 'https://google.com',
    ttl: 60,
}).then((result) => {
    console.log('Результат успешно получен: ');
    console.log(result);
}).catch((err) => {
    console.log('Произошла ошибка: ');
    console.error(err);
});
```
<a href="https://www.npmjs.com/package/push-all"><img src="https://img.shields.io/npm/v/push-all.svg?style=flat-square" alt="NPM version"></a>
<a href="https://vk.com/ghost1337gg"><img src="https://brand.vkforms.ru/static/media/logo_color_154.08f6e176.svg" height=20></a>