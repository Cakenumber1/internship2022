import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import articlesData from '../fakeDB/initialArticles';

@Injectable()
export class ArticlesService {
  create(createArticleDto: CreateArticleDto) {
    articlesData.results.push(createArticleDto);
    return articlesData.results;
  }

  findAll() {
    return articlesData.results;
  }
}
