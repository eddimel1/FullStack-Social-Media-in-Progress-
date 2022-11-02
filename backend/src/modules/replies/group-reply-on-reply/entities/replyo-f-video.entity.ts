import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Audio_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-video.entity'

import { Video_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-video.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { ReplyForVideoEntity_G } from '../../group-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('repliesO_f_galery_video_g')
export class ReplyOForVideoEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_G)
  @ManyToOne(() => ReplyForVideoEntity_G, (photo) => photo.repliesO, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_G

  @Field(() => Audio_F_Reply_F_Video_G)
  @OneToOne(() => Audio_F_Reply_F_Video_G, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Video_G

  @Field(() => Image_F_Reply_F_Video_G)
  @OneToOne(() => Image_F_Reply_F_Video_G, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Video_G

  @Field(() => Video_F_Reply_F_Video_G)
  @OneToOne(() => Video_F_Reply_F_Video_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_G
}
