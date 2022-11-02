import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Galery_Video_U } from 'src/modules/rest-files/entities/users/galery-entities/video.entity'
import { Audio_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-video.entity'
import { Video_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-video.entity'
import { ReplyForVideoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('comments_f_galery_video_u')
export class CommentForVideoEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => Galery_Video_U)
  @ManyToOne(() => Galery_Video_U, (video) => video.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  commented_video: Galery_Video_U
  @Column()
  @Field()
  text: string

  @Field(() => Audio_F_Comment_F_Video_U)
  @OneToOne(() => Audio_F_Comment_F_Video_U, (audio) => audio.comment, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Comment_F_Video_U

  @Field(() => Image_F_Comment_F_Video_U)
  @OneToOne(() => Image_F_Comment_F_Video_U, (image) => image.comment, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Comment_F_Video_U

  @Field(() => Video_F_Comment_F_Video_U)
  @OneToOne(() => Video_F_Comment_F_Video_U, (video) => video.comment, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Comment_F_Video_U

  @Field(() => ReplyForVideoEntity_U)
  @OneToMany(() => ReplyForVideoEntity_U, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForVideoEntity_U
}
