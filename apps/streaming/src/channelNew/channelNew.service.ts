import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChannelNewServiceBase } from "./base/channelNew.service.base";

@Injectable()
export class ChannelNewService extends ChannelNewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
