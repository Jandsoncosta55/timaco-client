import { useState } from 'react';

const Team = ({ initialValues = { title: '', description: ''}, submitFunc}) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInput = (e) => {
    const { id, value } = e.target;

    const newValues = {
      ...formData,
      [id]: value
    }
    setFormData(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunc(formData);
    setFormData(initialValues);
  }

  return (
    <form className = "formTeam" onSubmit={handleSubmit}>
      <div >
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' value={formData.title} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <input type='text' id='description' value={formData.description} onChange={handleInput} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Team;