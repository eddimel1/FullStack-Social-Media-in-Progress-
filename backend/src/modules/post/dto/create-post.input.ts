import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {

  @Field()
  text : string

  
}