import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-video.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'


@Injectable()
export class Image_F_Comment_F_Video_Service_U extends BaseFileCRUDService<Image_F_Comment_F_Video_U> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Video_U)
    protected repository: Repository<Image_F_Comment_F_Video_U>,
  ) {
    super(repository, Image_F_Comment_F_Video_U)
  }
}
