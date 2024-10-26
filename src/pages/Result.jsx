import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Result = () => {
	const location = useLocation()
	const { factType } = useParams()
	const { number } = location.state || {}
	const [error, setError] = useState('')
	const [result, setResult] = useState('')
	const [isLoaded, setIsLoaded] = useState(false)

	// Fetch fact
	const fetchFact = async () => {
		try {
			setIsLoaded(true)
			const response = await axios.get(
				`http://numbersapi.com/${number || 'random' + '/' + factType}`
			)
			setResult(response.data)
			setIsLoaded(false)
		} catch (error) {
			setIsLoaded(false)
			setError(
				'Произошла ошибка при получении данных. Пожалуйста, попробуйте снова.'
			)
		}
	}
	useEffect(() => {
		fetchFact()
	}, [factType, number])
	return (
		<div className='container'>
			<Link to='/' className='back-link'>
				Назад
			</Link>
			<h1 className='title'>Результат</h1>
			<p>{result}</p>
			{isLoaded && <p>Загрузка...</p>}
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

export default Result
