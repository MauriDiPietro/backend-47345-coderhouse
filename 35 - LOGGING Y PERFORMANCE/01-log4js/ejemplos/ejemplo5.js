import log4js from 'log4js';

log4js.configure({
    appenders: {
        file: { type: 'file', filename: './logs/ejemplo5.log' },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['file', 'console'], level: 'trace' },
        dev: { appenders: ['console'], level: 'trace' },
        prod: { appenders: ['console', 'file'], level: 'error' }
    }
})

//variable de entorno (.env)
const ENV = 'dev'; //prod

let logger = log4js.getLogger(`${ENV}`);

export const ejemplo5 = () => {
    logger.trace('Imprimo trace')
    logger.debug('Imprimo debug')
    logger.info('Imprimo info')
    logger.warn('Imprimo warn')
    logger.error('Imprimo error')
    logger.fatal('Imprimo fatal')
}