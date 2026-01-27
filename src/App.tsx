import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { routeTree } from './routeTree.gen'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import axios from "axios";

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

axios.defaults.baseURL = 'https://etwah.de/api'
axios.defaults.headers.common['Authorization'] = 'Bearer 669a7bf3642899e68c878c6215bfd83b90097a5a818bc3af578b9ae4fcfb51a0'

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
