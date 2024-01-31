import winston from 'winston';

const logConfig = {
    level : 'silly',
    transports: [ 
        new winston.transports.Console({ level: 'verbose' }),
        new winston.transports.File({
            filename: './logs/ejemplo2-error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: './logs/ejemplo2-silly.log',
        }), 
    ]
};

const logger = winston.createLogger(logConfig);


export const ejemplo2 = () => {
    logger.silly('imprimimos silly')
    logger.debug('imprimimos debug')
    logger.verbose('imprimimos verbose')
    logger.info('imprimimos info')
    logger.http('imprimimos http')
    logger.warn('imprimimos warn')
    logger.error('imprimimos error')
}