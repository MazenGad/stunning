import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { Idea, IdeaDocument } from './schemas/idea.schema';

@Injectable()
export class IdeasService {
  private readonly logger = new Logger(IdeasService.name);

  constructor(@InjectModel(Idea.name) private ideaModel: Model<IdeaDocument>) {}

  async create(createIdeaDto: CreateIdeaDto): Promise<Idea> {
    const sections = ['Hero', 'About', 'Contact'];
    
    try {
      const newIdea = new this.ideaModel({
        prompt: createIdeaDto.prompt,
        sections,
      });
      return await newIdea.save();
    } catch (error) {
      this.logger.warn('Database not available, returning mock data', error.message);
      // Fallback when database is not available
      return {
        prompt: createIdeaDto.prompt,
        sections,
      } as Idea;
    }
  }
}
