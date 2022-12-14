import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const[cocktail, setCocktail] = React.useState([])
  console.log(id)

  React.useEffect(()=>{
    setLoading(true)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response) => response.json())
  .then((data) => {console.log(data)
    if(data.drinks){
      setCocktail(data.drinks[0])
    }else{
      setCocktail(null)
    }
    setLoading(false)
  })

  },[id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{cocktail.strDrink}</h2>
        <div className='drink'>
          <img src={cocktail.strDrinkThumb} alt=""></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {cocktail.strDrink}
            </p>
            <p>
              <span className='drink-data'>category :</span> {cocktail.strCategory}
            </p>
            <p>
              <span className='drink-data'>info :</span> {cocktail.strAlcoholic}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {cocktail.strGlass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {cocktail.strInstructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {cocktail.strIngredient1} {cocktail.strIngredient2} {cocktail.strIngredient3}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail