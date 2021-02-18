import { Storage, Bucket } from '@google-cloud/storage';
import {
  Bind,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 } from 'uuid';

const storage = new Storage({ projectId: 'bamboo-almanac-305200' });
storage.getServiceAccount({}).then((res) => {
  console.log(res);
});

const bucket = new Bucket(storage, 'prospects-storage');
bucket.exists().then((exist) => {
  if (!exist) {
    storage.createBucket('prospects-storage');
  }
});

@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @Bind(UploadedFile())
  uploadFile(file) {
    console.log(file);
    return new Promise((resolve) => {
      const id = v4();
      const gFile = bucket.file(id);
      gFile
        .createWriteStream({ metadata: { contentType: file.mimetype } })
        .on('error', function (err) {})
        .on('finish', function () {
          gFile.makePublic().then((publicFile) => {
            resolve({
              url: `https://storage.googleapis.com/prospects-storage/${id}`,
            });
          });
        })
        .end(file.buffer);
    });
  }
}
