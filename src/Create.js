import { useState } from "react"


export const Create = () => {
	const [title, setTitle] = useState('');
	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	return (
		<div className="create">
			<h2>New Blog</h2>
			<form>

				<label>Title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={handleChange}
				/>

				<label>Author:</label>
				<select>
					<option value="teodor">teodor</option>
					<option value="maria">maria</option>
				</select>

				<label>Text:</label>
				<textarea>
					
				</textarea>
				<button className="btn">Add Blog</button>
			</form>
		</div>
	)
}