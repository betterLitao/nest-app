import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
@Injectable()
export class SpiderService {
  create(createSpiderDto: CreateSpiderDto) {
    return 'This action adds a new spider';
  }

  async findAll() {
    const urls: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let i: number = 1;
    async function getCosplay() {
      const html = await axios
        .get(`https://www.keaitupian.cn/meinv/1452${i > 1 ? `_${i}` : ''}.html`)
        .then((res) => res.data);
      const $ = cheerio.load(html);
      const imgs = $('.article-content img');
      imgs.each(function () {
        const src = $(this).attr('src');
        if (src) {
          urls.push(src);
        }
      });

      // 判断是否还有下一页
      const paginations = $('.pagination ul li a');
      const contents = paginations
        .map(function () {
          return $(this).text();
        })
        .toArray();
      if (!contents.includes('下一页')) {
        return;
      }
      i++;
      await getCosplay();
    }

    await getCosplay();
    await this.writeFiles(urls);
    return `This action returns all spider`;
  }
  async writeFiles(urls: string[]) {
    for (const url of urls) {
      const buffer = await axios
        .get(url, { responseType: 'arraybuffer' })
        .then((res) => res.data);
      const filePath = path.join(__dirname, '../../', Date.now() + '.jpg');
      const ws = fs.createWriteStream(filePath);
      ws.write(buffer);
    }
  }
  findOne(id: number) {
    return `This action returns a #${id} spider`;
  }

  update(id: number, updateSpiderDto: UpdateSpiderDto) {
    return `This action updates a #${id} spider`;
  }

  remove(id: number) {
    return `This action removes a #${id} spider`;
  }
}
