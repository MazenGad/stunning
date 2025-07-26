import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdeasService } from './ideas.service';
import { Idea, IdeaDocument } from './schemas/idea.schema';

describe('IdeasService', () => {
  let service: IdeasService;

  const mockIdea = {
    prompt: 'A fitness tracking app',
    sections: ['Hero', 'About', 'Contact'],
    save: jest.fn().mockResolvedValue({
      prompt: 'A fitness tracking app',
      sections: ['Hero', 'About', 'Contact'],
    }),
  };

  const mockIdeaModel = jest.fn().mockImplementation(() => mockIdea);
  Object.assign(mockIdeaModel, {
    find: jest.fn().mockReturnValue({ exec: jest.fn() }),
    findById: jest.fn().mockReturnValue({ exec: jest.fn() }),
    findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn() }),
    findByIdAndDelete: jest.fn().mockReturnValue({ exec: jest.fn() }),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdeasService,
        {
          provide: getModelToken(Idea.name),
          useValue: mockIdeaModel,
        },
      ],
    }).compile();

    service = module.get<IdeasService>(IdeasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new idea with dummy sections', async () => {
      const createIdeaDto = { prompt: 'A fitness tracking app' };
      const expectedSections = ['Hero', 'About', 'Contact'];

      const result = await service.create(createIdeaDto);

      expect(mockIdeaModel).toHaveBeenCalledWith({
        prompt: createIdeaDto.prompt,
        sections: expectedSections,
      });
      expect(mockIdea.save).toHaveBeenCalled();
      expect(result).toEqual({
        prompt: createIdeaDto.prompt,
        sections: expectedSections,
      });
    });
  });
}); 