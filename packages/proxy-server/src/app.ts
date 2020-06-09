import express from 'express';
import request from 'request';

export default class App {
  private readonly port: number;

  private app = express();

  constructor(port: number) {
    this.port = port;
    this.proxy();
  }

  private proxy() {
    this.app.get('/__static/:port/*', (req, res) => {
      const url = `http://127.0.0:${req.params.port}${req.path}`;
      req.pipe(request.get(url)).pipe(res);
    })
  }

  run() {
    this.app.listen(this.port, () => {
      console.log(`Server is running in http://localhost:${this.port}`);
    });
  }
}
