export class LoggerDev {
  // write to files
  log(message: string) {
    console.log(message);
  }
}

// production =>
export class LoggerProd {
  log(message: string) {
    // send data to analytics
    console.log(message);
  }
}
