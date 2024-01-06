import * as graphql from "@nestjs/graphql";
import { LiveResolverBase } from "./base/live.resolver.base";
import { Live } from "./base/Live";
import { LiveService } from "./live.service";

@graphql.Resolver(() => Live)
export class LiveResolver extends LiveResolverBase {
  constructor(protected readonly service: LiveService) {
    super(service);
  }
}
