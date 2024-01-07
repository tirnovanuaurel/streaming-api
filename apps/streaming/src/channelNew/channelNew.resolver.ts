import * as graphql from "@nestjs/graphql";
import { ChannelNewResolverBase } from "./base/channelNew.resolver.base";
import { ChannelNew } from "./base/ChannelNew";
import { ChannelNewService } from "./channelNew.service";

@graphql.Resolver(() => ChannelNew)
export class ChannelNewResolver extends ChannelNewResolverBase {
  constructor(protected readonly service: ChannelNewService) {
    super(service);
  }
}
