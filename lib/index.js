const fetch = require('node-fetch');
const FormData = require('form-data');

const config = {
    api: 'https://pushall.ru/api.php'
};

class PushAll {
    constructor(options) {
        if(!options.id || !options.key) {
            console.error('No \'id\' or \'key\' specified');
            return process.exit(1);
        }
        if(typeof options.id !== "number") {
            console.error('\'id\' is not a number');
            return process.exit(1);
        }

        this.options = options;

    }

    selfSend(params) {
        return this.sendRequest({type: 'self', ...params});
    }

    broadcastSend(params) {
        return this.sendRequest({type: 'broadcast', ...params});
    }

    multicastSend(params) {
        return this.sendRequest({type: 'multicast', ...params});
    }

    unicastSend(params) {
        return this.sendRequest({type: 'unicast', ...params});
    }

    showListGet(params) {
        return this.sendRequest({type: 'showlist', ...params});
    }

    async sendRequest(params = {}) {
        params = {...params, ...this.options};

        const form = new FormData();
        for(const key in params) {
            if(params.hasOwnProperty(key)) {
                form.append(key, params[key].toString());
            }
        }

        let response = await fetch(config.api, {
            method: 'POST',
            body: form,
        });
        response = await response.json();

        if('error' in response) {
            throw response;
        } else {
            return response;
        }
    }
}

module.exports = PushAll;