import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
	const navigagte = useNavigate()
	const [factType, setFactType] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		let number = e.target.number.value
		let randomNum = Math.floor(Math.random() * 1000)
		if (number === '' && factType === '') {
			number = randomNum
		}
		if (isNaN(number) && number !== '') {
			setError('Число должно быть в виде цифр')
		} else {
			navigagte(`/result/${factType || 'random'}`, { state: { number } })
		}
	}

	return (
		<div className='container'>
			<h1 className='title'>Информация о числах</h1>
			<div>
				<span className='sub-title'>Тип информации:</span>
				<div className='type-info'>
					<button
						className={factType === 'trivia' ? 'active' : ''}
						onClick={() => setFactType('trivia')}
					>
						Trivia
					</button>
					<button
						className={factType === 'math' ? 'active' : ''}
						onClick={() => setFactType('math')}
					>
						Math
					</button>
					<button
						className={factType === 'date' ? 'active' : ''}
						onClick={() => setFactType('date')}
					>
						Date
					</button>
					<button
						className={factType === 'year' ? 'active' : ''}
						onClick={() => setFactType('year')}
					>
						Year
					</button>
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='search-wrapper'>
					<label className='sub-title'>Число (необязательно):</label>
					<input
						type='text'
						name='number'
						placeholder='Введите число или выберите случайное'
						className='input'
					/>
				</div>
				<button type='submit' className='submit-btn'>
					Получить информацию
				</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	)
}

export default App
