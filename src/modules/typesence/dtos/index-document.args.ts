import { ApiProperty } from '@nestjs/swagger';


export class IndexDocumentData {
  @ApiProperty()
  id?: string;

  [key: string]: any;
}

export class IndexDocument {
  @ApiProperty()
  collection: string;

  @ApiProperty({
    enum: ['delete', 'update', 'upsert'],
    default: 'upsert',
  })
  operationType: 'delete' | 'update' | 'upsert';

  @ApiProperty({
    type: IndexDocumentData,
    

  })
  data: IndexDocumentData;
}