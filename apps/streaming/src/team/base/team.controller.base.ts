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
import { TeamService } from "../team.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamCreateInput } from "./TeamCreateInput";
import { Team } from "./Team";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamUpdateInput } from "./TeamUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamControllerBase {
  constructor(
    protected readonly service: TeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTeam(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.createTeam({
      data: {
        ...data,

        tables: data.tables
          ? {
              connect: data.tables,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        logo: true,
        name: true,

        tables: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @ApiNestedQuery(TeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async teams(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.teams({
      ...args,
      select: {
        createdAt: true,
        id: true,
        logo: true,
        name: true,

        tables: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async team(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.team({
      where: params,
      select: {
        createdAt: true,
        id: true,
        logo: true,
        name: true,

        tables: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTeam(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.updateTeam({
        where: params,
        data: {
          ...data,

          tables: data.tables
            ? {
                connect: data.tables,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          logo: true,
          name: true,

          tables: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTeam(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.deleteTeam({
        where: params,
        select: {
          createdAt: true,
          id: true,
          logo: true,
          name: true,

          tables: {
            select: {
              id: true,
            },
          },

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
}
