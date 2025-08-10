"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Clock, TrendingUp, Filter } from "lucide-react"

const categories = [
  "AI & Machine Learning",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "DevOps",
  "Blockchain & Web3",
  "Quantum Computing",
  "IoT & Hardware",
  "Startups & Business",
  "Open Source"
]

const timeFilters = [
  { label: "Last hour", value: "1h" },
  { label: "Last 24 hours", value: "24h" },
  { label: "Last week", value: "7d" },
  { label: "Last month", value: "30d" }
]

export function NewsFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["AI & Machine Learning", "Web Development"])
  const [selectedTime, setSelectedTime] = useState("24h")
  const [aiScoreThreshold, setAiScoreThreshold] = useState([70])
  const [showTrending, setShowTrending] = useState(true)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Time Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Time Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {timeFilters.map((filter) => (
            <div key={filter.value} className="flex items-center space-x-2">
              <input
                type="radio"
                id={filter.value}
                name="timeFilter"
                value={filter.value}
                checked={selectedTime === filter.value}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-4 h-4"
              />
              <Label htmlFor={filter.value} className="text-sm cursor-pointer">
                {filter.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Score Threshold */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            AI Quality Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Minimum Score</span>
              <span className="font-medium">{aiScoreThreshold[0]}%</span>
            </div>
            <Slider
              value={aiScoreThreshold}
              onValueChange={setAiScoreThreshold}
              max={100}
              min={0}
              step={5}
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="trending"
              checked={showTrending}
              onCheckedChange={(checked) => setShowTrending(checked as boolean)}
            />
            <Label htmlFor="trending" className="text-sm">
              Show trending articles first
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Active Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Categories ({selectedCategories.length})</div>
            <div className="flex flex-wrap gap-1">
              {selectedCategories.slice(0, 3).map((cat) => (
                <Badge key={cat} variant="secondary" className="text-xs">
                  {cat}
                </Badge>
              ))}
              {selectedCategories.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{selectedCategories.length - 3} more
                </Badge>
              )}
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Time Range</div>
            <Badge variant="outline" className="text-xs">
              {timeFilters.find(f => f.value === selectedTime)?.label}
            </Badge>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">AI Score</div>
            <Badge variant="outline" className="text-xs">
              {aiScoreThreshold[0]}%+
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )
}
