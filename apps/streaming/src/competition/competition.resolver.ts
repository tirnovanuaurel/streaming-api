import * as graphql from "@nestjs/graphql";
import { CompetitionResolverBase } from "./base/competition.resolver.base";
import { Competition } from "./base/Competition";
import { CompetitionService } from "./competition.service";

@graphql.Resolver(() => Competition)
export class CompetitionResolver extends CompetitionResolverBase {
  constructor(protected readonly service: CompetitionService) {
    super(service);
  }
}
