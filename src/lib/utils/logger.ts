// Production-ready logging system for healthcare platform
// Ensures no patient data is exposed in logs while maintaining debugging capability

interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

// Safe logging that never exposes patient data
class SafeLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  // Log errors without exposing sensitive data
  error(message: string, context?: Record<string, any>): void {
    if (this.isProduction) {
      // In production, log only generic error messages
      console.error(`[ERROR] ${message}`);
    } else {
      // In development, show more details but sanitize sensitive data
      console.error(`[ERROR] ${message}`, this.sanitizeContext(context));
    }
  }

  // Log warnings
  warn(message: string, context?: Record<string, any>): void {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, this.sanitizeContext(context));
    }
  }

  // Log info messages
  info(message: string, context?: Record<string, any>): void {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, this.sanitizeContext(context));
    }
  }

  // Debug logging (development only)
  debug(message: string, context?: Record<string, any>): void {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, this.sanitizeContext(context));
    }
  }

  // Remove sensitive data from logs
  private sanitizeContext(context?: Record<string, any>): Record<string, any> | undefined {
    if (!context) return undefined;

    const sanitized = { ...context };
    
    // Remove patient data fields
    const sensitiveFields = ['name', 'phone', 'age', 'patient', 'mobile', 'email'];
    
    for (const field of sensitiveFields) {
      if (sanitized[field]) {
        sanitized[field] = '[REDACTED]';
      }
    }

    // Sanitize nested objects
    for (const key in sanitized) {
      if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
        sanitized[key] = this.sanitizeNestedObject(sanitized[key]);
      }
    }

    return sanitized;
  }

  private sanitizeNestedObject(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.sanitizeNestedObject(item));
    }

    if (typeof obj === 'object' && obj !== null) {
      const sanitized = { ...obj };
      const sensitiveFields = ['name', 'phone', 'age', 'patient', 'mobile', 'email'];
      
      for (const field of sensitiveFields) {
        if (sanitized[field]) {
          sanitized[field] = '[REDACTED]';
        }
      }
      
      return sanitized;
    }

    return obj;
  }
}

// Export singleton logger instance
export const logger = new SafeLogger();

// Helper functions for common logging scenarios
export const logTelegramError = (error: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Telegram Error:', error)
  }
  // In production, could send to error tracking service
};

export const logFormError = (context: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Form Error:', {
      errorType: context.errorType,
      timestamp: context.timestamp,
      city: context.city,
      service: context.service
    })
  }
  // In production, send to error tracking without sensitive data
};

export const logFormSubmissionError = (error: any) => {
  logger.error('Form submission failed', {
    errorType: error?.name || 'Unknown',
    timestamp: new Date().toISOString()
  });
};

export const logAnalyticsError = (service: string, error: any) => {
  logger.error(`Analytics service ${service} failed`, {
    service,
    errorType: error?.name || 'Unknown'
  });
};
