import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TableModuleBase } from "./base/table.module.base";
import { TableService } from "./table.service";
import { TableController } from "./table.controller";
import { TableResolver } from "./table.resolver";

@Module({
  imports: [TableModuleBase, forwardRef(() => AuthModule)],
  controllers: [TableController],
  providers: [TableService, TableResolver],
  exports: [TableService],
})
export class TableModule {}
