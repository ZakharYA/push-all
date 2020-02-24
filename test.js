const PushAll = require('./lib');

const push = new PushAll({
    id: 1,
    key: '<KEY>'
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