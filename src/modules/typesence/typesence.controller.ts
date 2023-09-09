import { CreateSchemaArgs } from './dtos/create-schema.args';
import { IndexDocument } from './dtos/index-document.args';
import { SearchDocumentArgs } from './dtos/search-document.args';
import { TypesenceService } from './typesence.service';
import { ApiNestedQuery } from '@/common/decorators/api-nested-query.decorator';
import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';

@Controller('typesence')
export class TypesenceController {
  constructor(private readonly typesenceService: TypesenceService) {}

  @Post('/schema')
  async createSchema(@Body() schema: CreateSchemaArgs) {
    return await this.typesenceService.createSchema(schema);
  }

  @Get('/schema')
  async listSchema() {
    return await this.typesenceService.listSchema();
  }

  @Delete('/schema/:collection')
  async deleteSchema(@Param('collection') collection: string) {
    return await this.typesenceService.deleteSchema(collection);
  }

  @Post('/index')
  async index(@Body() data: IndexDocument) {
    return await this.typesenceService.index(data);
  }

  @Get('/search/:collection')
  @ApiOkResponse({ type: Object })
  async search(@Param('collection') collection: string, @Query() args: SearchDocumentArgs) {
    return await this.typesenceService.search(collection, args);
  }

  @Get('/export/:collection')
  async export(@Param('collection') collection: string) {
    return await this.typesenceService.export(collection);
  }
}
