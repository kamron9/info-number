import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/result/:factType',
		element: <Result />,
	},
])
