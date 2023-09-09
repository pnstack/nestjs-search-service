import { CreateSchemaArgs } from './dtos/create-schema.args';
import { IndexDocument } from './dtos/index-document.args';
import { HttpException, Injectable } from '@nestjs/common';
import Typesense, { Client as TypesenceClient } from 'typesense';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import { SearchDocumentArgs } from './dtos/search-document.args';

@Injectable()
export class TypesenceService {
  private typesense: TypesenceClient;
  constructor() {
    this.typesense = new Typesense.Client({
      nodes: [
        {
          host: 'localhost',
          port: 8108,
          protocol: 'http',
        },
      ],
      apiKey: 'xyz',
      connectionTimeoutSeconds: 100,
    });
  }

  async createSchema(schema: CreateSchemaArgs) {
    try {
      return await this.typesense.collections().create({
        name: schema.name,
        fields: schema.fields as CollectionCreateSchema['fields'],
      });
    } catch (e) {
      return new HttpException(e, 500);
    }
  }

  async listSchema() {
    return await this.typesense.collections().retrieve();
  }

  async deleteSchema(collection: string) {
    return await this.typesense.collections(collection).delete();
  }

  async index(args: IndexDocument) {
    if (args.operationType == 'delete') {
      return await this.typesense.collections(args.collection).documents(args?.data?.id).delete();
    } else if (args.operationType == 'update') {
      return await this.typesense
        .collections(args.collection)
        .documents(args?.data?.id)
        .update(args.data);
    } else {
      return await this.typesense.collections(args.collection).documents().upsert(args?.data);
    }
  }

  async search(collection: string, args: SearchDocumentArgs) {
    try {
      return await this.typesense.collections(collection).documents().search(args);
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async export(collection: string) {
    return await this.typesense.collections(collection).documents().export();
  }
}
