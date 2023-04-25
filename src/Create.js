import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Create = () => {

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('teodor');
	const [body, setBody] = useState('');
	const [isPending, setIsPending] = useState(false);

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, author, body };
		setIsPending(true);


		fetch('http://localhost:8000/blogs', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		}).then(() => {
			setIsPending(false);
		})
		navigate("/");
	}

	return (
		<div className="create">
			<h2>New Blog</h2>
			<form onSubmit={handleSubmit}>

				<label>TITLE:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>TEXT:</label>
				<textarea
					value={body}
					onChange={(e) => setBody(e.target.value)}>

				</textarea>
				<label>AUTHOR:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}>
					<option value="teodor">teodor</option>
					<option value="maria">maria</option>
				</select>


				{!isPending && <button className="btn">Add Blog</button>}
				{isPending && <button className="btn" disabled>Adding Blog...</button>}
			</form>
		</div>
	)
}