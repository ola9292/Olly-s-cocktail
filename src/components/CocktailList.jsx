import React, {useContext} from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { Context } from '../context'

const CocktailList = () => {

  const{loading, cocktails} = useContext(Context)
  if(loading){
    return <Loading />
  }
  if(cocktails.length < 1){
    return <h2 className='section-title'>
    no cocktails matched your search criteria
  </h2>
  }


  let cocktailArr = cocktails.map(function(item){
    return <Cocktail key={item.idDrink} item={item}/>
  })

  return (
    <section className='section'>
    <h2 className='section-title'>cocktails</h2>
    <div className='cocktails-center'>
     {cocktailArr}
    </div>
  </section>
  )
}

export default CocktailList
