
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border-2 border-slate-700 rounded-lg bg-orange-400'>No</th>
              <th className='border-2 border-slate-700 rounded-lg bg-orange-400'>Title</th>
              <th className='border-2 border-slate-700 rounded-lg max-md:hidden bg-orange-400'>
                Author
              </th>
              <th className='border-2 border-slate-700 rounded-lg max-md:hidden bg-orange-400'>
                Publish Year
              </th>
              <th className='border-2 border-slate-700 rounded-lg bg-orange-400'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className=' text-lg border-2 border-slate-700 rounded-lg text-center bg-amber-300'>
                  {index + 1}
                </td>
                <td className='border-2 border-slate-700 rounded-lg text-center bg-amber-100'>
                  {book.title}
                </td>
                <td className='border-2 border-slate-700 rounded-lg text-center max-md:hidden bg-amber-100'>
                  {book.author}
                </td>
                <td className='border-2 border-slate-700 rounded-lg text-center max-md:hidden bg-amber-100'>
                  {book.publishYear}
                </td>
                <td className='border-2 border-slate-700 rounded-lg text-center bg-amber-100'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-900' title='Book Info' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-500' title='Edit Book' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-700' title='Delete Book' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default BooksTable