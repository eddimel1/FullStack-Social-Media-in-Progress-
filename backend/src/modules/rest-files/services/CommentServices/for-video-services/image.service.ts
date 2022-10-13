import { COMMENT_RELATIONS } from '../../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Image_F_Comment_F_Video } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-video'

@Injectable()
export class ImageCommentService_F_V {
  constructor(
    @InjectRepository(Image_F_Comment_F_Video)
    private readonly imageCommentRepository: Repository<Image_F_Comment_F_Video>,
  ) {}

  async insertImage(comment_id: number, url: string, filename: string) {
    const image = new Image_F_Comment_F_Video()
    image.file_name = filename
    image.url = url
    image.commentId = comment_id
    return await this.imageCommentRepository.save(image)
  }
  async deleteImageById(id: number) {
    return await this.imageCommentRepository.delete({ id })
  }
  async deleteImageByOwnerId(comment_id: number, file_name: string) {
    const isSuccess = await this.imageCommentRepository
      .createQueryBuilder(COMMENT_RELATIONS.AUDIO)
      .delete()
      .where({ commentId: comment_id, file_name: file_name })
      .execute()
    return isSuccess
  }
}