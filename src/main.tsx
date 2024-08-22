import App from './App.tsx'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CasesPage } from './pages/Cases'
import { ContactsPage } from './pages/Contacts'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/cases',
        element: <CasesPage />,
    },
    {
        path: '/contacts',
        element: <ContactsPage />,
    },
])

const rootElement = document.getElementById('root')!

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
