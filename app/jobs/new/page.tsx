import { DashboardLayout } from "@/components/dashboard-layout"
import { JobSubmissionForm } from "@/components/jobs/job-submission-form"

export default function NewJobPage() {
  return (
    <DashboardLayout>
      <JobSubmissionForm />
    </DashboardLayout>
  )
}
