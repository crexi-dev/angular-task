export enum LogLevel {
    OFF = 0,
    FATAL = 100,
    ERROR = 200,
    WARN = 300,
    INFO = 400,
    DEBUG = 500,
    TRACE = 600,
    ALL = 1000
}

export class Logger {

    private prefix: string;
    private level: LogLevel;

    constructor(logPrefix: string, logLevel: LogLevel) {
        this.prefix = logPrefix;
        this.level = logLevel;
    }

    all(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.ALL, message, ...optionalParameters);
    }

    debug(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.DEBUG, message, ...optionalParameters);
    }

    error(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.ERROR, message, ...optionalParameters);
    }

    fatal(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.FATAL, message, ...optionalParameters);
    }

    info(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.INFO, message, ...optionalParameters);
    }

    log(level: LogLevel, message?: any, ...optionalParameters: any[]) {
        if (this.level >= level) {
            console.log(`[${this.prefix}]`, message, ...optionalParameters);
        }
    }

    setLogLevel(level: LogLevel) {
        this.level = level;
    }

    trace(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.TRACE, message, ...optionalParameters);
    }

    warn(message?: any, ...optionalParameters: any[]) {
        this.log(LogLevel.WARN, message, ...optionalParameters);
    }
}
