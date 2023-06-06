import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'

function App() {

  const fullName = 'Pero Perov'

  const logEvent = (e) =>{
    console.log(e);
  }
  const logName = (fullName) =>{
    console.log(fullName);
  }

  return <main>
    <Header /> 
    <ProductList></ProductList>
    <input type="text" value={fullName} placeholder='Add Full Name' />
    <button disabled={!fullName} type="button" onClick={()=>logEvent(e)}>Submit</button>
    <button disabled={!fullName} type="button" onClick={logName}>Submit</button>
    <article className='main__article'>This is an article</article>
    <article style={{color:'#5e5e79'}}>This is another article</article>
    <Footer/>
  </main>
}

export default App
