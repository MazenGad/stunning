import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>Generating...</span>
    </div>
  );
};