import { useState } from 'react';
import { IdeaResponse } from '../types';
import { generateIdea } from '../services/api';

export const useIdeaGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [sections, setSections] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      setError('Please enter a website idea');
      return;
    }

    setIsLoading(true);
    setError('');
    setSections([]);

    try {
      const response: IdeaResponse = await generateIdea(prompt.trim());
      setSections(response.sections);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate idea');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setPrompt('');
    setSections([]);
    setError('');
  };

  return {
    prompt,
    setPrompt,
    sections,
    isLoading,
    error,
    handleSubmit,
    resetForm,
  };
};