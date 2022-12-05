import React,{ useState, useEffect } from 'react'
const Context = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
function ContextProvider({children}){
  
 
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  function fetchDrinks(){
    setLoading(true)
    fetch(`${url}${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {console.log(data)
      if(data.drinks){
        setCocktails(data.drinks)
      }else{
        setCocktails([])
      }
      setLoading(false)
    });
  
  }

  useEffect(()=>{
    fetchDrinks()
  },[searchTerm])








  return (
    <Context.Provider value={{loading, searchTerm, cocktails, setSearchTerm}}>
        {children}
    </Context.Provider>
)

}

export {ContextProvider, Context} 


