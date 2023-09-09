import { TypesenceService } from './typesence.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TypesenceResolver {
  constructor(private readonly typesenceService: TypesenceService) {}

  @Query(() => String)
  async ping() {
    return 'pong';
  }
}
