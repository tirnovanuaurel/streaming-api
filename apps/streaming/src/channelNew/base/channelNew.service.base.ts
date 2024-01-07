/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ChannelNew } from "@prisma/client";

export class ChannelNewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ChannelNewCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChannelNewCountArgs>
  ): Promise<number> {
    return this.prisma.channelNew.count(args);
  }

  async channelNews<T extends Prisma.ChannelNewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChannelNewFindManyArgs>
  ): Promise<ChannelNew[]> {
    return this.prisma.channelNew.findMany(args);
  }
  async channelNew<T extends Prisma.ChannelNewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChannelNewFindUniqueArgs>
  ): Promise<ChannelNew | null> {
    return this.prisma.channelNew.findUnique(args);
  }
  async createChannelNew<T extends Prisma.ChannelNewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChannelNewCreateArgs>
  ): Promise<ChannelNew> {
    return this.prisma.channelNew.create<T>(args);
  }
  async updateChannelNew<T extends Prisma.ChannelNewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChannelNewUpdateArgs>
  ): Promise<ChannelNew> {
    return this.prisma.channelNew.update<T>(args);
  }
  async deleteChannelNew<T extends Prisma.ChannelNewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChannelNewDeleteArgs>
  ): Promise<ChannelNew> {
    return this.prisma.channelNew.delete(args);
  }
}
