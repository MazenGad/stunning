export interface IdeaResponse {
  _id: string;
  prompt: string;
  sections: string[];
  __v: number;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}