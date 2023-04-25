import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Books from './components/Books/Books'
import Order from './components/Order/Order'
import BookAddCart from './components/BookAddCart/BookAddCart'
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Login from './components/VerificationPage/Login'
import Register from './components/VerificationPage/Register'
import AuthProvider from './provider/AuthProvider'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "book/:bookId",
        element: <BookAddCart />,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path: "order",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
        loader: () => fetch('https://api.itbook.store/1.0/new')

      },
      {
        path: 'login',
        element: <Login></Login>

      },
      {
        path: 'register',
        element: <Register></Register>
      }
      ,
      {
        path: "loader",
        element: <LoaderSpinner />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
