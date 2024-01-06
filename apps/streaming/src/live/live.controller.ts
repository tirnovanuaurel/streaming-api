import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiveService } from "./live.service";
import { LiveControllerBase } from "./base/live.controller.base";

@swagger.ApiTags("lives")
@common.Controller("lives")
export class LiveController extends LiveControllerBase {
  constructor(protected readonly service: LiveService) {
    super(service);
  }
}
