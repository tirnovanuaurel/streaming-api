/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChannelNew } from "./ChannelNew";
import { ChannelNewCountArgs } from "./ChannelNewCountArgs";
import { ChannelNewFindManyArgs } from "./ChannelNewFindManyArgs";
import { ChannelNewFindUniqueArgs } from "./ChannelNewFindUniqueArgs";
import { CreateChannelNewArgs } from "./CreateChannelNewArgs";
import { UpdateChannelNewArgs } from "./UpdateChannelNewArgs";
import { DeleteChannelNewArgs } from "./DeleteChannelNewArgs";
import { ChannelNewService } from "../channelNew.service";
@graphql.Resolver(() => ChannelNew)
export class ChannelNewResolverBase {
  constructor(protected readonly service: ChannelNewService) {}

  async _channelNewsMeta(
    @graphql.Args() args: ChannelNewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChannelNew])
  async channelNews(
    @graphql.Args() args: ChannelNewFindManyArgs
  ): Promise<ChannelNew[]> {
    return this.service.channelNews(args);
  }

  @graphql.Query(() => ChannelNew, { nullable: true })
  async channelNew(
    @graphql.Args() args: ChannelNewFindUniqueArgs
  ): Promise<ChannelNew | null> {
    const result = await this.service.channelNew(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChannelNew)
  async createChannelNew(
    @graphql.Args() args: CreateChannelNewArgs
  ): Promise<ChannelNew> {
    return await this.service.createChannelNew({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ChannelNew)
  async updateChannelNew(
    @graphql.Args() args: UpdateChannelNewArgs
  ): Promise<ChannelNew | null> {
    try {
      return await this.service.updateChannelNew({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChannelNew)
  async deleteChannelNew(
    @graphql.Args() args: DeleteChannelNewArgs
  ): Promise<ChannelNew | null> {
    try {
      return await this.service.deleteChannelNew(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}