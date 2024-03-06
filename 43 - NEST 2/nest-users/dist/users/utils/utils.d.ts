import { UserLogin } from '../types/user';
export declare const createHash: (password: string) => Promise<string>;
export declare const isValidPassword: (user: UserLogin, password: string) => Promise<boolean>;
