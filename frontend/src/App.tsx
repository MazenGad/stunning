import React from 'react';
import { Lightbulb, Sparkles, RefreshCw } from 'lucide-react';
import { useIdeaGenerator } from './hooks/useIdeaGenerator';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { SectionsList } from './components/SectionsList';

function App() {
  const {
    prompt,
    setPrompt,
    sections,
    isLoading,
    error,
    handleSubmit,
    resetForm,
  } = useIdeaGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Website Ideas Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your vision into structured website sections. Describe your idea and let our AI suggest the perfect layout for your project.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Describe Your Website Idea</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-3">
                What kind of website do you want to create?
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A fitness tracking app for runners with workout plans, progress tracking, and social features..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 placeholder-gray-400"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? <LoadingSpinner /> : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    <span>Generate Ideas</span>
                  </>
                )}
              </button>

              {(sections.length > 0 || error) && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results Section */}
        <div className="mt-8 space-y-6">
          {error && <ErrorMessage message={error} />}
          
          {sections.length > 0 && (
            <SectionsList sections={sections} prompt={prompt} />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;