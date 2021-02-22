import { IsString, IsEnum } from 'class-validator';
import { Statuses } from 'src/schemas/prospect.schema';

export class UpdateStatusDto {
  @IsString()
  @IsEnum(['autorizado', 'rechazado'])
  status: Statuses;

  @IsString()
  motivoRechazo: string;
}
