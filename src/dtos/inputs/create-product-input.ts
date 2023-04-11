import { IsString, IsDate } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateProductInput {
  @Field()
  @IsString()
  franchisingId: string;

  @Field()
  @IsString()
  name: String;

  @Field()
  @IsDate()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  @IsString()
  priority: string;
}
