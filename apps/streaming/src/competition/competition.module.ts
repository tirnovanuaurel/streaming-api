import { Module } from "@nestjs/common";
import { CompetitionModuleBase } from "./base/competition.module.base";
import { CompetitionService } from "./competition.service";
import { CompetitionController } from "./competition.controller";
import { CompetitionResolver } from "./competition.resolver";

@Module({
  imports: [CompetitionModuleBase],
  controllers: [CompetitionController],
  providers: [CompetitionService, CompetitionResolver],
  exports: [CompetitionService],
})
export class CompetitionModule {}
