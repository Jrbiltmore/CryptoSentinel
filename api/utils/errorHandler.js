// Custom Error Class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// Global Error Handling Middleware
function globalErrorHandler(err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}

// 404 Error Handler Middleware
function notFoundHandler(req, res, next) {
    const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
    next(err);
}

module.exports = {
    AppError,
    globalErrorHandler,
    notFoundHandler,
};
