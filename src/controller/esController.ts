import { Request as KoaRequest } from "koa";
import { Put, Request, Route, SuccessResponse } from "tsoa";

@Route("api")
export class Controller {
  @Put("template")
  @SuccessResponse(204)
  public async setTemplate(@Request() request: KoaRequest) {

  }
}
