"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to sign in after a brief delay
    const timer = setTimeout(() => {
      router.push("/auth/signin")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to RelayStack</CardTitle>
          <CardDescription>
            Creating your account...
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            RelayStack uses NextAuth.js for secure authentication. 
            Your account will be created automatically when you sign in.
          </p>
          
          <Button asChild className="w-full">
            <Link href="/auth/signin">
              Go to Sign In <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground">
            Redirecting automatically in a few seconds...
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
