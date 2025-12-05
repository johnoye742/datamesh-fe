"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  Globe,
  Plus,
  X,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Database,
  Code,
  FileJson,
  ArrowRight,
  Info,
} from "lucide-react"
import { TooltipProvider } from "@/components/ui/tooltip"

const presetTargets = [
  { name: "Reddit", icon: "🔴", category: "Social" },
  { name: "Twitter/X", icon: "🐦", category: "Social" },
  { name: "HackerNews", icon: "🟠", category: "Tech" },
  { name: "GitHub", icon: "🐙", category: "Tech" },
  { name: "Stack Overflow", icon: "📚", category: "Tech" },
  { name: "LinkedIn", icon: "🔵", category: "Professional" },
  { name: "Product Hunt", icon: "🚀", category: "Tech" },
  { name: "Custom URL", icon: "🌐", category: "Custom" },
]

const regions = [
  { value: "global", label: "Global (All Regions)", nodes: "12.8K" },
  { value: "north-america", label: "North America", nodes: "4.2K" },
  { value: "europe", label: "Europe", nodes: "3.8K" },
  { value: "asia-pacific", label: "Asia Pacific", nodes: "2.9K" },
  { value: "south-america", label: "South America", nodes: "1.1K" },
  { value: "other", label: "Other Regions", nodes: "0.8K" },
]

export function JobSubmissionForm() {
  const [urls, setUrls] = useState<string[]>([])
  const [currentUrl, setCurrentUrl] = useState("")
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null)
  const [concurrency, setConcurrency] = useState([50])
  const [enableJavascript, setEnableJavascript] = useState(false)
  const [enableScreenshots, setEnableScreenshots] = useState(false)
  const [respectRobots, setRespectRobots] = useState(true)
  const [retryFailed, setRetryFailed] = useState(true)

  const addUrl = () => {
    if (currentUrl && !urls.includes(currentUrl)) {
      setUrls([...urls, currentUrl])
      setCurrentUrl("")
    }
  }

  const removeUrl = (url: string) => {
    setUrls(urls.filter((u) => u !== url))
  }

  const estimatedCost = (urls.length || 1) * concurrency[0] * 0.001
  const estimatedTime = Math.ceil(((urls.length || 1) * 1000) / concurrency[0])

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Create New Job</h1>
            <p className="text-sm text-muted-foreground mt-1">Configure and launch a new distributed scraping job</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              <Zap className="mr-1 h-3 w-3" />
              12.8K nodes available
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Details */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">Job Details</CardTitle>
                <CardDescription>Basic information about your scraping job</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-name">Job Name</Label>
                  <Input id="job-name" placeholder="e.g., Reddit ML Discussion Scrape" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what data you're collecting and why..."
                    className="bg-background resize-none"
                    rows={3}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Priority</Label>
                    <Select defaultValue="normal">
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Best effort</SelectItem>
                        <SelectItem value="normal">Normal - Standard</SelectItem>
                        <SelectItem value="high">High - Priority routing</SelectItem>
                        <SelectItem value="critical">Critical - Fastest nodes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Schedule</Label>
                    <Select defaultValue="immediate">
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Run Immediately</SelectItem>
                        <SelectItem value="scheduled">Schedule for Later</SelectItem>
                        <SelectItem value="recurring">Recurring Job</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Target Configuration */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">Target Configuration</CardTitle>
                <CardDescription>Select preset targets or enter custom URLs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="presets" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-muted">
                    <TabsTrigger value="presets">Preset Targets</TabsTrigger>
                    <TabsTrigger value="custom">Custom URLs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="presets" className="mt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {presetTargets.map((target) => (
                        <button
                          key={target.name}
                          onClick={() => setSelectedTarget(target.name)}
                          className={`flex flex-col items-center gap-2 rounded-lg border p-3 text-sm transition-colors ${
                            selectedTarget === target.name
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background hover:border-primary/50 hover:bg-muted"
                          }`}
                        >
                          <span className="text-xl">{target.icon}</span>
                          <span className="font-medium">{target.name}</span>
                        </button>
                      ))}
                    </div>
                    {selectedTarget && selectedTarget !== "Custom URL" && (
                      <div className="mt-4 space-y-3">
                        <Label>Target Paths (e.g., subreddits, hashtags)</Label>
                        <Input
                          placeholder={
                            selectedTarget === "Reddit"
                              ? "e.g., /r/machinelearning, /r/artificial"
                              : selectedTarget === "Twitter/X"
                                ? "e.g., #AI, #MachineLearning"
                                : "Enter target paths..."
                          }
                          className="bg-background"
                        />
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="custom" className="mt-4 space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="https://example.com/page"
                        value={currentUrl}
                        onChange={(e: any) => setCurrentUrl(e.target?.value)}
                        onKeyDown={(e: any) => e.key === "Enter" && addUrl()}
                        className="bg-background"
                      />
                      <Button onClick={addUrl} size="icon" variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {urls.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {urls.map((url) => (
                          <Badge key={url} variant="secondary" className="flex items-center gap-1 py-1 px-2">
                            <Globe className="h-3 w-3" />
                            <span className="max-w-[200px] truncate">{url}</span>
                            <button onClick={() => removeUrl(url)} className="ml-1 hover:text-destructive">
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Info className="h-3 w-3" />
                      <span>You can also upload a CSV or JSON file with URLs</span>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        Upload File
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Scraping Options */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">Scraping Options</CardTitle>
                <CardDescription>Configure how data should be collected</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Concurrency</Label>
                      <span className="text-sm text-muted-foreground">{concurrency[0]} parallel requests</span>
                    </div>
                    <Slider
                      value={concurrency}
                      onValueChange={setConcurrency}
                      min={10}
                      max={200}
                      step={10}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Higher concurrency = faster completion but higher cost
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Output Format</Label>
                      <Select defaultValue="json">
                        <SelectTrigger className="bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="json">
                            <div className="flex items-center gap-2">
                              <FileJson className="h-4 w-4" />
                              JSON
                            </div>
                          </SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="parquet">Parquet</SelectItem>
                          <SelectItem value="jsonl">JSON Lines</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Region</Label>
                      <Select defaultValue="global">
                        <SelectTrigger className="bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((region) => (
                            <SelectItem key={region.value} value={region.value}>
                              <div className="flex items-center justify-between gap-4">
                                <span>{region.label}</span>
                                <Badge variant="outline" className="text-xs">
                                  {region.nodes}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Advanced Options</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                      <div className="flex items-center gap-3">
                        <Code className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">JavaScript Rendering</p>
                          <p className="text-xs text-muted-foreground">Execute JS for dynamic content</p>
                        </div>
                      </div>
                      <Switch checked={enableJavascript} onCheckedChange={setEnableJavascript} />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                      <div className="flex items-center gap-3">
                        <Database className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Screenshot Capture</p>
                          <p className="text-xs text-muted-foreground">Save page screenshots</p>
                        </div>
                      </div>
                      <Switch checked={enableScreenshots} onCheckedChange={setEnableScreenshots} />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Respect robots.txt</p>
                          <p className="text-xs text-muted-foreground">Follow crawling guidelines</p>
                        </div>
                      </div>
                      <Switch checked={respectRobots} onCheckedChange={setRespectRobots} />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Auto-retry Failed</p>
                          <p className="text-xs text-muted-foreground">Retry failed requests up to 3 times</p>
                        </div>
                      </div>
                      <Switch checked={retryFailed} onCheckedChange={setRetryFailed} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cost Estimate */}
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle className="text-base">Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Target</span>
                    <span className="font-medium">{selectedTarget || "Not selected"}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">URLs</span>
                    <span className="font-medium">{urls.length || (selectedTarget ? "Auto-discovered" : "0")}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Concurrency</span>
                    <span className="font-medium">{concurrency[0]} parallel</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">JS Rendering</span>
                    <span className="font-medium">{enableJavascript ? "Enabled" : "Disabled"}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Est. Time</span>
                    </div>
                    <span className="text-sm font-medium">~{estimatedTime} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Est. Data</span>
                    </div>
                    <span className="text-sm font-medium">~2.4 GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Est. Cost</span>
                    </div>
                    <span className="text-sm font-semibold text-primary">${estimatedCost.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <Button className="w-full" size="lg">
                    Launch Job
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Save as Draft
                  </Button>
                </div>

                <div className="flex items-start gap-2 rounded-lg bg-warning/10 border border-warning/20 p-3">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5 shrink-0" />
                  <p className="text-xs text-warning">
                    This job will consume credits from your monthly quota. Current balance: 2.4M requests
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Templates */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">Quick Templates</CardTitle>
                <CardDescription>Start with a pre-configured job</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <button className="w-full flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-left hover:border-primary/50 hover:bg-muted transition-colors">
                  <span className="text-lg">🔴</span>
                  <div>
                    <p className="text-sm font-medium">Reddit Subreddit Scrape</p>
                    <p className="text-xs text-muted-foreground">Posts, comments, metadata</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-left hover:border-primary/50 hover:bg-muted transition-colors">
                  <span className="text-lg">🐦</span>
                  <div>
                    <p className="text-sm font-medium">Twitter Hashtag Monitor</p>
                    <p className="text-xs text-muted-foreground">Real-time tweet collection</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-left hover:border-primary/50 hover:bg-muted transition-colors">
                  <span className="text-lg">🐙</span>
                  <div>
                    <p className="text-sm font-medium">GitHub Repo Analyzer</p>
                    <p className="text-xs text-muted-foreground">Code, issues, discussions</p>
                  </div>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
