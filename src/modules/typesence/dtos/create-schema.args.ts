import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { FieldType } from 'typesense/lib/Typesense/Collection';


export class CreateSchemaFields {
  @Type(() => String)
  @ApiProperty({
    required: true,
    type: String,
  })
  @ApiProperty()
  name: string;

  @Type(() => String)
  @ApiProperty({
    required: true,
    type: String,
  })
  @ApiProperty()
  type: FieldType;
}

export class CreateSchemaArgs {
  @ApiProperty()
  name: string;

  @Type(() => CreateSchemaFields)
  @ApiProperty({
    required: true,
    type: [CreateSchemaFields],
    default: [{
      name: ".*",
      type: "auto"
    }],
  })
  fields: CreateSchemaFields[];
}