import winston from 'winston';

const logConfig = {
    transports: [ new winston.transports.Console() ]
};

const logger = winston.createLogger(logConfig);

logger.level = 'debug';

export const ejemplo1 = () => {
    logger.silly('imprimimos silly')
    logger.debug('imprimimos debug')
    logger.verbose('imprimimos verbose')
    logger.info('imprimimos info')
    logger.http('imprimimos http')
    logger.warn('imprimimos warn')
    logger.error('imprimimos error')
}