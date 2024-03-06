"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.createHash = void 0;
const bcryptjs_1 = require("bcryptjs");
const createHash = async (password) => await (0, bcryptjs_1.hash)(password, 10);
exports.createHash = createHash;
const isValidPassword = async (user, password) => await (0, bcryptjs_1.compare)(password, user.password);
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=utils.js.map