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
import { CompetitionService } from "../competition.service";
import { CompetitionCreateInput } from "./CompetitionCreateInput";
import { Competition } from "./Competition";
import { CompetitionFindManyArgs } from "./CompetitionFindManyArgs";
import { CompetitionWhereUniqueInput } from "./CompetitionWhereUniqueInput";
import { CompetitionUpdateInput } from "./CompetitionUpdateInput";
import { TableFindManyArgs } from "../../table/base/TableFindManyArgs";
import { Table } from "../../table/base/Table";
import { TableWhereUniqueInput } from "../../table/base/TableWhereUniqueInput";

export class CompetitionControllerBase {
  constructor(protected readonly service: CompetitionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Competition })
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

  @common.Get()
  @swagger.ApiOkResponse({ type: [Competition] })
  @ApiNestedQuery(CompetitionFindManyArgs)
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

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Competition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Competition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
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

  @common.Get("/:id/tables")
  @ApiNestedQuery(TableFindManyArgs)
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