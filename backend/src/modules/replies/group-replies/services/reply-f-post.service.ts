import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreateReplyForPost_I_G } from '../dto/comment-for-post/input.dto'
import { ReplyForPostEntity_G } from '../entities/reply-f-post.entity'

@Injectable()
export class ReplyForPostService_DB_G extends Base_Crud_W_FindAll<ReplyForPostEntity_G> {
  constructor(
    @InjectRepository(ReplyForPostEntity_G)
    protected repository: Repository<ReplyForPostEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyForPost_I_G) {
    const comment_f_photo = new ReplyForPostEntity_G()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}