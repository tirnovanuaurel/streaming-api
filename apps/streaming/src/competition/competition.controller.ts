import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompetitionService } from "./competition.service";
import { CompetitionControllerBase } from "./base/competition.controller.base";

@swagger.ApiTags("competitions")
@common.Controller("competitions")
export class CompetitionController extends CompetitionControllerBase {
  constructor(protected readonly service: CompetitionService) {
    super(service);
  }
}
