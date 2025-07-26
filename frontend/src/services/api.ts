import { IdeaResponse, ApiError } from '../types';

const API_BASE_URL = 'http://localhost:3001';

export const generateIdea = async (prompt: string): Promise<IdeaResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: IdeaResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
};