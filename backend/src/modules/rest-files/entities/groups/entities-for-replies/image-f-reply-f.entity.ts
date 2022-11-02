import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
 

@ObjectType()
@Entity('image_f_reply_f_photo_g')
export class Image_F_Reply_F_Photo_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_G)
  @OneToOne(() => ReplyForPhotoEntity_G, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_G
}
