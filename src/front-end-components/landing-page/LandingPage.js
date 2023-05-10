import './LandingPage.css';
import ItemsList from '../items-list-container/ItemsListContainer.js'
import NewItemContainer from '../new-item-container/NewItemContainer.js'
import HeadingContainer from '../heading-container/HeadingContainer.js'

function LandingPage() {
    return (
      <div className='container'>
        <div className="container-grid">
        <div className='items-list-holder'><ItemsList/></div>
        <div className='heading-holder'><HeadingContainer/></div>
        <div className='new-item-holder'><NewItemContainer/></div>
      </div>
      </div>
      
    );
}

  export default LandingPage;