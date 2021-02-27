"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const application_config_1 = require("./config/application.config");
const server_1 = require("./server");
// const getOptions = async () => {
//   let connectionOptions: ConnectionOptions;
//   connectionOptions = {
//     type: 'postgres',
//     synchronize: true,
//     logging: false,
//     entities: ['**/models/**/*.entity.ts', '**/models/**/*.entity.js'],
//   };
//   if (process.env.DATABASE_URL) {
//     Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
//   } else {
//     // gets your default configuration
//     // you could get a specific config by name getConnectionOptions('production')
//     // or getConnectionOptions(process.env.NODE_ENV)
//     connectionOptions = await getConnectionOptions();
//   }
//
//   return connectionOptions;
// };
(() => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-console
    console.clear();
    const config = application_config_1.getApplicationConfig();
    // const typeormConfig = await getOptions();
    // await createConnection(typeormConfig);
    yield typeorm_1.createConnection();
    // Start the server
    yield server_1.startServer(config);
}))();
