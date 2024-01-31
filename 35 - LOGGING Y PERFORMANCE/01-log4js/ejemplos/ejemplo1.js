import log4js from 'log4js';

const logger = log4js.getLogger();

logger.level = 'info';

export const ejemplo1 = () => {
    logger.trace('Imprimo trace')
    logger.debug('Imprimo debug')
    logger.info('Imprimo info')
    logger.warn('Imprimo warn')
    logger.error('Imprimo error')
    logger.fatal('Imprimo fatal')
}