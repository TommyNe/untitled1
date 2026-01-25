import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { routeTree } from './routeTree.gen'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const App = () => {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient} >
                <RouterProvider router={router} />
            </QueryClientProvider>
        </StrictMode>
    )
}
