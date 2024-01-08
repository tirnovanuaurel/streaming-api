import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LiveModuleBase } from "./base/live.module.base";
import { LiveService } from "./live.service";
import { LiveController } from "./live.controller";
import { LiveResolver } from "./live.resolver";

@Module({
  imports: [LiveModuleBase, forwardRef(() => AuthModule)],
  controllers: [LiveController],
  providers: [LiveService, LiveResolver],
  exports: [LiveService],
})
export class LiveModule {}
