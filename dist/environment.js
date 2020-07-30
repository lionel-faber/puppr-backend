"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["dev_environment"] = "dev";
    Environments["prod_environment"] = "prod";
    Environments["qa_environment"] = "qa";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        return process.env.PORT;
    }
    getDBName() {
        if (this.environment === Environments.prod_environment) {
            return 'db_puppr_prod';
        }
        else if (this.environment === Environments.dev_environment) {
            return 'db_puppr_dev';
        }
        else if (this.environment === Environments.qa_environment) {
            return 'db_puppr_qa';
        }
        else {
            return 'db_puppr_local';
        }
    }
    getDBUserName() {
        return process.env.DB_USER;
    }
    getDBPassword() {
        return process.env.DB_PASSWORD;
    }
}
exports.default = new Environment(Environments.dev_environment);
