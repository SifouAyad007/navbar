
import './App.css';
import Menu from './component/Menu';



function App() {
  let menuitems = ["Services" , "Products" , "About us" , "Portfolio" , "FAQ" , "Contacts"]
  return (
    <div className="App">
    <Menu Menu_items = {menuitems}/>  
    </div>
  );
}

export default App;
