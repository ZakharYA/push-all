##Документация
> Здесь находится базовая документация к этой библиотеке, полностью ознакомиться с документацией Вы можете на <a href="pushall.ru">PushAll</a>.


>Для начала,  Вы должны инициализировать библотеку, пример:
```js
const pushAll = require('push-all');
const push = new pushAll({
    id: 1, // ID канала
    key: '<KEY>' // Ключ канала
});
```

##selfSend

Отправка пуша самому себе

```js
push.selfSend({
    title: 'Пример',
    text: 'Это пример'
}); // => Promise
```
##broadcastSend

Отправка пуша всем подписчикам канала

```js
push.broadcastSend({
    title: 'Пример',
    text: 'Это пример'
}); // => Promise
```
##multicastSend

Отправка определённым подписчикам пуш

```js
push.multicastSend({
    title: 'Пример',
    text: 'Это пример',
    uids: [1, 2, 3, 4, 5]
}); // => Promise
```

##unicastSend

Отправка пуша одному подписчику канала

```js
push.unicastSend({
    title: 'Пример',
    text: 'Это пример',
    uid: 1
}); // => Promise
```

##showListGet

Позволяет получать ленту вашего канала, информацию о отправленных уведомлениях, информацию о ваших подписчиках.

```js
push.showListGet({
    limit: 10
}) // => Promise
```