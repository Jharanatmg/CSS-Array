
import './App.css'

const App = () => {

  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  
  let listing_array =[]

  for (let i=0; i < fruits.length; i++)
  {
  listing_array[i] = <li>{fruits[i]}</li>
  }
  console.log(listing_array)
  return (
    <>
     
      <div className="letter">
      
      {listing_array}
      </div>
      
    </>
  )
}

export default App
