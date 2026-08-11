import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, Shield, Plane, Users } from 'lucide-react'

export function Component() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden bg-slate-900 text-white py-20 px-6 sm:px-12">
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Virtual Airways Pro
          </h1>
          <p className="text-lg text-slate-300">
            Experience realistic virtual airline operations, advanced flight tracking, and community network simulation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="gap-2">
              <Link to="/operations">
                Flight Operations <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
              <Link to="/fleet">View Fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Globe className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Global Network</CardTitle>
            <CardDescription>
              Connect to destinations worldwide with tailored flight plans and real-time network integration.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Plane className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Modern Fleet</CardTitle>
            <CardDescription>
              Operate state-of-the-art narrowbody and widebody aircraft built for immersive flight simulation.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Professional Standard</CardTitle>
            <CardDescription>
              Adhere to high-standard dispatch, scheduling, and virtual air traffic control environments.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  )
}
