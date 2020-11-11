import { Request as KoaRequest } from "koa";
import { Put, Request, Route, SuccessResponse } from "tsoa";

@Route("api")
export class EsController {
  @Put("template")
  @SuccessResponse(204)
  public async setTemplate(@Request() _request: KoaRequest) {

  }
}
