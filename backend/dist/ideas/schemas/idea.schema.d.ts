import { Document } from 'mongoose';
export type IdeaDocument = Idea & Document;
export declare class Idea {
    prompt: string;
    sections: string[];
}
export declare const IdeaSchema: import("mongoose").Schema<Idea, import("mongoose").Model<Idea, any, any, any, Document<unknown, any, Idea, any> & Idea & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Idea, Document<unknown, {}, import("mongoose").FlatRecord<Idea>, {}> & import("mongoose").FlatRecord<Idea> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
