import { Loader2 } from "lucide-react"

export function ResourceLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
      <p className="text-lg text-gray-600">Loading resources...</p>
    </div>
  )
}
