import { IsDate, IsString } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsDate()
  createdAt: Date;

  @Field()
  @IsDate()
  updatedAt: Date;

  @Field()
  @IsString()
  priority: string;
}
