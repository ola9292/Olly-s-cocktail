
import React, { useContext} from 'react'
import { Context } from '../context'

const SearchForm = () => {
const{ setSearchTerm } = useContext(Context)
const searchValue = React.useRef('')


React.useEffect(() => {
  searchValue.current.focus()
}, [])

function handleChange(e){
  setSearchTerm(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
}

  return (
    <div>
      
      {/* <input type="text" onChange={handleChange}/> */}
      <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
    </div>
  )
}

export default SearchForm
