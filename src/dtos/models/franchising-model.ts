import { IsDate, IsString } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Franchising {
  @Field()
  @IsString()
  id: string;
}
