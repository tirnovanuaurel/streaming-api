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
import { Competition } from "./Competition";
import { CompetitionCountArgs } from "./CompetitionCountArgs";
import { CompetitionFindManyArgs } from "./CompetitionFindManyArgs";
import { CompetitionFindUniqueArgs } from "./CompetitionFindUniqueArgs";
import { CreateCompetitionArgs } from "./CreateCompetitionArgs";
import { UpdateCompetitionArgs } from "./UpdateCompetitionArgs";
import { DeleteCompetitionArgs } from "./DeleteCompetitionArgs";
import { TableFindManyArgs } from "../../table/base/TableFindManyArgs";
import { Table } from "../../table/base/Table";
import { CompetitionService } from "../competition.service";
@graphql.Resolver(() => Competition)
export class CompetitionResolverBase {
  constructor(protected readonly service: CompetitionService) {}

  async _competitionsMeta(
    @graphql.Args() args: CompetitionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Competition])
  async competitions(
    @graphql.Args() args: CompetitionFindManyArgs
  ): Promise<Competition[]> {
    return this.service.competitions(args);
  }

  @graphql.Query(() => Competition, { nullable: true })
  async competition(
    @graphql.Args() args: CompetitionFindUniqueArgs
  ): Promise<Competition | null> {
    const result = await this.service.competition(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Competition)
  async createCompetition(
    @graphql.Args() args: CreateCompetitionArgs
  ): Promise<Competition> {
    return await this.service.createCompetition({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Competition)
  async updateCompetition(
    @graphql.Args() args: UpdateCompetitionArgs
  ): Promise<Competition | null> {
    try {
      return await this.service.updateCompetition({
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

  @graphql.Mutation(() => Competition)
  async deleteCompetition(
    @graphql.Args() args: DeleteCompetitionArgs
  ): Promise<Competition | null> {
    try {
      return await this.service.deleteCompetition(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Table], { name: "tables" })
  async findTables(
    @graphql.Parent() parent: Competition,
    @graphql.Args() args: TableFindManyArgs
  ): Promise<Table[]> {
    const results = await this.service.findTables(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
