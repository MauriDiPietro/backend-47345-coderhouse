import config from '../config/config.js';
// console.log(config);
export const getEnvironment = () => {
    const ENV = config.ENV.toUpperCase();
    return ENV;
};