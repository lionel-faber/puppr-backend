const dotenv = require('dotenv');
const path = require("path");

enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}
class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
        dotenv.config();
    }

    getPort(): String {
        return (process.env.PORT || '5000')
    }

    getDBName(): String {
        if (this.environment === Environments.prod_environment) {
            return 'db_puppr_prod';
        } else if (this.environment === Environments.dev_environment) {
            return 'db_puppr_dev';
        } else if (this.environment === Environments.qa_environment) {
            return 'db_puppr_qa';
        } else {
            return 'db_puppr_local';
        }
    }

    getDBUserName(): String {
        return process.env.DB_USER
    }

    getDBPassword(): String {
        return process.env.DB_PASSWORD
    }

    getStoragePath(): String {
        return path.join(process.cwd(), 'dist', this.environment, 'public')
    }

    getAbsolutePath(): String {
        console.log(path.join('dist', this.environment, 'public'))
        return path.join('dist', this.environment, 'public')
    }
}

export default new Environment(Environments.dev_environment);