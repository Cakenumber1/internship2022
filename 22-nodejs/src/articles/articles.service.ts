import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import articlesData from '../fakeDB/data.json';
import write from "../services/writeFile.service";

@Injectable()
export class ArticlesService {
  create(createArticleDto: CreateArticleDto) {
    articlesData.results.push(createArticleDto);
    write('./src/fakeDB/data.json', JSON.stringify(articlesData));
    return articlesData.results;
  }

  findAll() {
    return articlesData.results;
  }
}
