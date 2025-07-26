import { IdeasService } from './ideas.service';
import { CreateIdeaDto } from './dto/create-idea.dto';
export declare class IdeasController {
    private readonly ideasService;
    constructor(ideasService: IdeasService);
    create(createIdeaDto: CreateIdeaDto): Promise<import("./schemas/idea.schema").Idea>;
}
