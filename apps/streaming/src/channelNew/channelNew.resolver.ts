import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChannelNewResolverBase } from "./base/channelNew.resolver.base";
import { ChannelNew } from "./base/ChannelNew";
import { ChannelNewService } from "./channelNew.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChannelNew)
export class ChannelNewResolver extends ChannelNewResolverBase {
  constructor(
    protected readonly service: ChannelNewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
