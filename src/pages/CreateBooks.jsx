import React from 'react'
import { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      price,
    };
    setLoading(true);
    axios.post('http://localhost:5555/books', data)
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch(() => {
      setLoading(false)
      alert("An error occured. Kindly check console")
      console.log(error)
    })

  }



  return (
  <div className='p-4'>
    <BackButton/>
    <h1 className='text-3xl my-4'>Create Book</h1>
    {loading ? <Spinner/> : ''}
    <div className="flex flex-col border-4 border-orange-400 rounded-xl w-[600px] p-4 mx-auto">
      <div className='my-3'>
        <label className='text-xl mr-4 text-gray-800'>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
        className='border-2 border-red-500 px-3 py-3 w-full' />
      </div>
      <div className='my-3'>
        <label className='text-xl mr-4 text-gray-800'>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} 
        className='border-2 border-red-500 px-3 py-3 w-full' />
      </div>
      <div className='my-3'>
        <label className='text-xl mr-4 text-gray-800'>Publish Year</label>
        <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} 
        className='border-2 border-red-500 px-3 py-3 w-full' />
      </div>
      <div className='my-3'>
        <label className='text-xl mr-4 text-gray-800'>Price</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} 
        className='border-2 border-red-500 px-3 py-3 w-full' />
      </div>
      <button className='p-2 bg-amber-300 m-6 rounded-md' onClick={handleSaveBook}>
        Save
      </button>
    </div>
  </div>
  )
}

export default CreateBooks
