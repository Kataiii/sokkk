import { Controller } from '@nestjs/common';
import { StuffService } from './stuff.service';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}
}
