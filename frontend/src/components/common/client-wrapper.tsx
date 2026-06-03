import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toast";

import { queryClient } from "@/lib/query-client"

type props = {
  children: React.ReactNode
}

export function ClientWrapper({ children }: props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right">
        {children}
      </Toaster>
    </QueryClientProvider>
  )
}
