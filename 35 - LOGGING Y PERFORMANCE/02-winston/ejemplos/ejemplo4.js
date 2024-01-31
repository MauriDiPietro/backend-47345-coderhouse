import { createLogger, format, transports } from "winston";

const { combine, printf, timestamp, colorize } = format;

const logConfig = {
  level: "debug",
  format: combine(
    timestamp({
      format: "MM-DD-YYYY HH:mm:ss",
    }),
    colorize(),
    printf((info) => `${info.level} | ${[info.timestamp]} | ${info.message}`)
  ),
  transports: [new transports.Console()],
};

const logger = createLogger(logConfig);

export const ejemplo4 = () => {
  logger.silly("imprimimos silly");
  logger.debug("imprimimos debug");
  logger.verbose("imprimimos verbose");
  logger.info("imprimimos info");
  logger.http("imprimimos http");
  logger.warn("imprimimos warn");
  logger.error("imprimimos error");
};
