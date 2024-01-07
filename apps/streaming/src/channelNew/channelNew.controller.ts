import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChannelNewService } from "./channelNew.service";
import { ChannelNewControllerBase } from "./base/channelNew.controller.base";

@swagger.ApiTags("channelNews")
@common.Controller("channelNews")
export class ChannelNewController extends ChannelNewControllerBase {
  constructor(protected readonly service: ChannelNewService) {
    super(service);
  }
}
