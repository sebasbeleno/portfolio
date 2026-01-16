import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto p-8 lg:p-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">
              My Portfolio
            </h1>
            <p className="text-gray-600 text-lg">
              Professional Experience & Education
            </p>
          </div>

          {/* Work Experience */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Work Experience
            </h2>
            <div className="space-y-6">
              {allJobs.map((job) => (
                <Card
                  key={job.jobTitle}
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-gray-900">
                          {job.jobTitle}
                        </CardTitle>
                        <p className="text-blue-600 font-medium">
                          {job.company} - {job.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {job.startDate} - {job.endDate || 'Present'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {job.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Education
            </h2>
            <div className="space-y-6">
              {allEducations.map((education) => (
                <Card
                  key={education.school}
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {education.school}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {education.summary}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
