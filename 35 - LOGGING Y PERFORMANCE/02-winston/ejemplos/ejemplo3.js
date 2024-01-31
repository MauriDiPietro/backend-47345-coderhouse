import winston from "winston";
import 'winston-mongodb';

const logConfig = {
    transports: [
        winston.add(new winston.transports.MongoDB({
            options: { useUnifiedTopology: true },
            db: 'mongodb://localhost:27017/coder47345',
            collection: 'logs',
            tryReconnect: true,
            level: 'error',
        }))
    ]
}

const logger = winston.createLogger(logConfig);

export const ejemplo3 = () => {
    logger.silly('imprimimos silly')
    logger.debug('imprimimos debug')
    logger.verbose('imprimimos verbose')
    logger.info('imprimimos info')
    logger.http('imprimimos http')
    logger.warn('imprimimos warn')
    logger.error('imprimimos error')
}