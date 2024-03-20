import { CatsService } from '../cats.service';
import { CreateCatDto } from '../deo/create.cat.dto';

export class mockCatsService implements CatsService {
  constructor(private readonly num: number) {}
  create(cat: CreateCatDto): { success: boolean } {
    console.log(cat);
    console.log('mock 中的 Service');
    console.log('还能传参', this.num);

    return { success: true };
  }
  onModuleInit(): void {}
}
