import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const Header = () => (
	<header>
		<h1>hardcore dashboard</h1>
	</header>
)

const Nav = () => (
	<nav>
		<a href='/'>react home</a>
	</nav>
)

const Post = (props) => (
	<article>
		<h1>{props.title}</h1>
		<p>{props.text}</p>
	</article>
)

const AddPost = (props) => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	return (
		<form>
			<label>
				title
				<input onChange={(e) => setTitle(e.target.value)} type='text' />
			</label>

			<label>
				text
				<textarea onChange={(e) => setText(e.target.value)}></textarea>
			</label>

			<button onClick={(e) => {e.preventDefault();props.onClick(title, text)}}>
				add
			</button>
		</form>
	)
}

const App = () => {
	const data = window.localStorage.getItem('posts')
	const [posts, addPost] = useState(JSON.parse(data))

	function submit(ti, te) {
		const newList = posts ? [
			...posts,
			{ title: ti, text: te }
		] : [ { title: ti, text: te } ]

		window.localStorage.setItem('posts', JSON.stringify(newList))

		addPost(newList)
	}

	return (<React.Fragment>
		<Header />
		<Nav />

		<main>
			<AddPost 
				onClick={submit}
			/>

			<section>
				{ posts &&
					posts.map((p, i) => <Post key={i} title={p.title} text={p.text} /> )}
			</section>
		</main>

		<footer>
			<small>all rights reserved &copy; hard&core&#8482; 2k<sup>2</sup></small>
		</footer>
	</React.Fragment>)
}

ReactDOM.render(
	<App />,
	document.querySelector('.app')
)
