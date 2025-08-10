"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Filter, DollarSign } from "lucide-react"

const categories = [
  "AI & Machine Learning",
  "Web Development",
  "Mobile Development",
  "Backend Development",
  "DevOps",
  "Data Science",
  "Cybersecurity",
  "Blockchain & Web3",
  "Open Source",
  "Career & Learning"
]

const locations = [
  "San Francisco, CA",
  "New York, NY",
  "London, UK",
  "Berlin, Germany",
  "Tokyo, Japan",
  "Online",
  "Hybrid"
]

const priceRanges = [
  { label: "Free", value: "free" },
  { label: "Under $50", value: "under50" },
  { label: "$50 - $200", value: "50-200" },
  { label: "$200 - $500", value: "200-500" },
  { label: "Over $500", value: "over500" }
]

const timeRanges = [
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
  { label: "Next 3 months", value: "3months" },
  { label: "Next 6 months", value: "6months" }
]

export function EventFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["AI & Machine Learning", "Web Development"])
  const [selectedLocations, setSelectedLocations] = useState<string[]>(["Online", "San Francisco, CA"])
  const [selectedPriceRange, setSelectedPriceRange] = useState("free")
  const [selectedTimeRange, setSelectedTimeRange] = useState("month")
  const [showOnlineOnly, setShowOnlineOnly] = useState(false)
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedLocations([])
    setSelectedPriceRange("free")
    setSelectedTimeRange("month")
    setShowOnlineOnly(false)
    setShowFreeOnly(false)
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

      {/* Locations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Locations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox
                id={location}
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => toggleLocation(location)}
              />
              <Label htmlFor={location} className="text-sm cursor-pointer">
                {location}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Price Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center space-x-2">
              <input
                type="radio"
                id={range.value}
                name="priceRange"
                value={range.value}
                checked={selectedPriceRange === range.value}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-4 h-4"
              />
              <Label htmlFor={range.value} className="text-sm cursor-pointer">
                {range.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Time Range */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Time Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {timeRanges.map((range) => (
            <div key={range.value} className="flex items-center space-x-2">
              <input
                type="radio"
                id={range.value}
                name="timeRange"
                value={range.value}
                checked={selectedTimeRange === range.value}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="w-4 h-4"
              />
              <Label htmlFor={range.value} className="text-sm cursor-pointer">
                {range.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Quick Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="onlineOnly"
              checked={showOnlineOnly}
              onCheckedChange={(checked) => setShowOnlineOnly(checked as boolean)}
            />
            <Label htmlFor="onlineOnly" className="text-sm">
              Online events only
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="freeOnly"
              checked={showFreeOnly}
              onCheckedChange={(checked) => setShowFreeOnly(checked as boolean)}
            />
            <Label htmlFor="freeOnly" className="text-sm">
              Free events only
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
            <div className="text-xs text-muted-foreground">Locations ({selectedLocations.length})</div>
            <div className="flex flex-wrap gap-1">
              {selectedLocations.slice(0, 2).map((loc) => (
                <Badge key={loc} variant="outline" className="text-xs">
                  {loc}
                </Badge>
              ))}
              {selectedLocations.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{selectedLocations.length - 2} more
                </Badge>
              )}
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Price & Time</div>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                {priceRanges.find(r => r.value === selectedPriceRange)?.label}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {timeRanges.find(r => r.value === selectedTimeRange)?.label}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full" onClick={clearFilters}>
        Clear All Filters
      </Button>
    </div>
  )
}
