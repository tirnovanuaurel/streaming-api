import { Module } from "@nestjs/common";
import { ChannelNewModuleBase } from "./base/channelNew.module.base";
import { ChannelNewService } from "./channelNew.service";
import { ChannelNewController } from "./channelNew.controller";
import { ChannelNewResolver } from "./channelNew.resolver";

@Module({
  imports: [ChannelNewModuleBase],
  controllers: [ChannelNewController],
  providers: [ChannelNewService, ChannelNewResolver],
  exports: [ChannelNewService],
})
export class ChannelNewModule {}
