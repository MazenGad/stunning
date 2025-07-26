import { Model } from 'mongoose';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { Idea, IdeaDocument } from './schemas/idea.schema';
export declare class IdeasService {
    private ideaModel;
    private readonly logger;
    constructor(ideaModel: Model<IdeaDocument>);
    create(createIdeaDto: CreateIdeaDto): Promise<Idea>;
}
