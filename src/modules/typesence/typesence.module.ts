import { Module } from '@nestjs/common';
import { TypesenceService } from './typesence.service';
import { TypesenceResolver } from './typesence.resolver';
import { TypesenceController } from './typesence.controller';

@Module({
  providers: [TypesenceResolver, TypesenceService],
  exports: [TypesenceService],
  controllers: [TypesenceController],
})
export class TypesenceModule {}
