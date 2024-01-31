import log4js from 'log4js';

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/ejemplo2.log' }
    },
    categories: {
        default: { appenders: ['fileAppender'], level: 'trace' }
    }
})

const logger = log4js.getLogger();

export const ejemplo2 = () => {
    logger.trace('Imprimo trace')
    logger.debug('Imprimo debug')
    logger.info('Imprimo info')
    logger.warn('Imprimo warn')
    logger.error('Imprimo error')
    logger.fatal('Imprimo fatal')
}