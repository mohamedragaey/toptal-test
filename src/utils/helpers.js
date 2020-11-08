/**
 * Log function works only in development and removed in production
 * @param text
 * @param args
 */
export const log = (text, ...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`%c${text}`, 'color:#fff;background-color:#3c3c3c;font-size:18px;display:block;padding:0 20px;', ...args)
  }
}
