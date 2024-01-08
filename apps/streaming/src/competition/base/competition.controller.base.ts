/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CompetitionService } from "../competition.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CompetitionCreateInput } from "./CompetitionCreateInput";
import { Competition } from "./Competition";
import { CompetitionFindManyArgs } from "./CompetitionFindManyArgs";
import { CompetitionWhereUniqueInput } from "./CompetitionWhereUniqueInput";
import { CompetitionUpdateInput } from "./CompetitionUpdateInput";
import { TableFindManyArgs } from "../../table/base/TableFindManyArgs";
import { Table } from "../../table/base/Table";
import { TableWhereUniqueInput } from "../../table/base/TableWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CompetitionControllerBase {
  constructor(
    protected readonly service: CompetitionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Competition })
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCompetition(
    @common.Body() data: CompetitionCreateInput
  ): Promise<Competition> {
    return await this.service.createCompetition({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Competition] })
  @ApiNestedQuery(CompetitionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async competitions(@common.Req() request: Request): Promise<Competition[]> {
    const args = plainToClass(CompetitionFindManyArgs, request.query);
    return this.service.competitions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Competition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async competition(
    @common.Param() params: CompetitionWhereUniqueInput
  ): Promise<Competition | null> {
    const result = await this.service.competition({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Competition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCompetition(
    @common.Param() params: CompetitionWhereUniqueInput,
    @common.Body() data: CompetitionUpdateInput
  ): Promise<Competition | null> {
    try {
      return await this.service.updateCompetition({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Competition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCompetition(
    @common.Param() params: CompetitionWhereUniqueInput
  ): Promise<Competition | null> {
    try {
      return await this.service.deleteCompetition({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/tables")
  @ApiNestedQuery(TableFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Table",
    action: "read",
    possession: "any",
  })
  async findTables(
    @common.Req() request: Request,
    @common.Param() params: CompetitionWhereUniqueInput
  ): Promise<Table[]> {
    const query = plainToClass(TableFindManyArgs, request.query);
    const results = await this.service.findTables(params.id, {
      ...query,
      select: {
        competition: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        drawn: true,
        goalsConceded: true,
        goalsDifference: true,
        goalsScored: true,
        id: true,
        lost: true,
        played: true,
        points: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        won: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tables")
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "update",
    possession: "any",
  })
  async connectTables(
    @common.Param() params: CompetitionWhereUniqueInput,
    @common.Body() body: TableWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tables: {
        connect: body,
      },
    };
    await this.service.updateCompetition({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tables")
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "update",
    possession: "any",
  })
  async updateTables(
    @common.Param() params: CompetitionWhereUniqueInput,
    @common.Body() body: TableWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tables: {
        set: body,
      },
    };
    await this.service.updateCompetition({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tables")
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "update",
    possession: "any",
  })
  async disconnectTables(
    @common.Param() params: CompetitionWhereUniqueInput,
    @common.Body() body: TableWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tables: {
        disconnect: body,
      },
    };
    await this.service.updateCompetition({
      where: params,
      data,
      select: { id: true },
    });
  }
}
