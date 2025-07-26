"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Lightbulb, CheckCircle } from "lucide-react"

interface IdeaResponse {
  prompt: string
  sections: string[]
  _id: string
  __v: number
}

export default function HomePage() {
  const [prompt, setPrompt] = useState("")
  const [sections, setSections] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt.trim()) {
      setError("Please enter a website idea prompt")
      return
    }

    setIsLoading(true)
    setError("")
    setSections([])

    try {
      const response = await fetch("http://localhost:3001/ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: IdeaResponse = await response.json()
      setSections(data.sections)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while generating ideas")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto pt-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-12 w-12 text-indigo-600 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900">Website Idea Generator</h1>
          </div>
          <p className="text-lg text-gray-600">Describe your website idea and get suggested sections to build</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Generate Your Website Structure</CardTitle>
            <CardDescription className="text-center">Enter a description of your website idea below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Website Idea Prompt
                </label>
                <Textarea
                  id="prompt"
                  placeholder="e.g., A fitness tracking app for runners that helps them monitor their progress and connect with other athletes..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] resize-none"
                  disabled={isLoading}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading || !prompt.trim()} size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Generate Website Sections
                  </>
                )}
              </Button>
            </form>

            {error && (
              <Alert className="mt-6 border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            {sections.length > 0 && (
              <Card className="mt-6 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Suggested Website Sections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sections.map((section, index) => (
                      <li
                        key={index}
                        className="flex items-center p-3 bg-white rounded-lg border border-green-200 shadow-sm"
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600 font-semibold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-800 font-medium">{section}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Mazen Gad</p>
        </div>
      </div>
    </div>
  )
}
