import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserSide {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
