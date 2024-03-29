import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Req() req: Request, @Res() res: any) {
  //   return res.render('index', { message: 'Hello world!' });
  // }

  @Get()
  @Render('index')
  getHello() {
    return { message: 'Hello again' };
  }
}
