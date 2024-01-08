import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChannelNewModuleBase } from "./base/channelNew.module.base";
import { ChannelNewService } from "./channelNew.service";
import { ChannelNewController } from "./channelNew.controller";
import { ChannelNewResolver } from "./channelNew.resolver";

@Module({
  imports: [ChannelNewModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChannelNewController],
  providers: [ChannelNewService, ChannelNewResolver],
  exports: [ChannelNewService],
})
export class ChannelNewModule {}
