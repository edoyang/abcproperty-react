import { useState } from 'react';
import Dropdown from '../components/Dropdowns'
import './listing.scss'

const Listing = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown((currentActive) => (currentActive === dropdownId ? null : dropdownId));
  };

  return (
    <div className='listing'>
      <div className="title">
        <h1>Search for an offer</h1>
        <p>Choose from the most advantageous offers</p>
      </div>
      <div className="input-and-filter">
        <div className="search-input">
          <input type="text" placeholder="Enter a keyword"/>
          <button className="btn-primary"><img src="mirror.svg"/>Search</button>
        </div>
        <div className="filter-title">
          <hr /> <p>Filter settings</p><hr />
        </div>
        <div className="filter-dropdowns">
          <Dropdown 
            options={['rent', 'sale']} 
            defaultLabel="Sale" 
            isActive={activeDropdown === 'saleType'} 
            onToggle={() => toggleDropdown('saleType')} 
          />
          <Dropdown 
            options={['1 bedroom', '2 bedroom', '3+ bedroom', 'studio', 'any']} 
            defaultLabel="Any" 
            isActive={activeDropdown === 'bedrooms'} 
            onToggle={() => toggleDropdown('bedrooms')} 
          />
          <Dropdown 
            options={['city center', 'suburbs', 'coastal', 'rural', 'any']} 
            defaultLabel="Any" 
            isActive={activeDropdown === 'location'} 
            onToggle={() => toggleDropdown('location')} 
          />
          <Dropdown 
            options={['recent', 'oldest', 'low to high', 'high to low']} 
            defaultLabel="Recent" 
            isActive={activeDropdown === 'sortOrder'} 
            onToggle={() => toggleDropdown('sortOrder')} 
          />
        </div>
      </div>
      <div className="property-list">

        <div className='property-card'>
          <div className="card-image">
              <img src="dummy2.png" alt="property" />
          </div>
          <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
          <div className="description">
              <p className="price">320 000€</p>
              <p className="location">Barcelona IX. </p>
          </div>
        </div>

        <div className='property-card'>
          <div className="card-image">
              <img src="dummy2.png" alt="property" />
          </div>
          <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
          <div className="description">
              <p className="price">320 000€</p>
              <p className="location">Barcelona IX. </p>
          </div>
        </div>

        <div className='property-card'>
          <div className="card-image">
              <img src="dummy2.png" alt="property" />
          </div>
          <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
          <div className="description">
              <p className="price">320 000€</p>
              <p className="location">Barcelona IX. </p>
          </div>
        </div>
        
        <div className='property-card'>
          <div className="card-image">
              <img src="dummy2.png" alt="property" />
          </div>
          <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
          <div className="description">
              <p className="price">320 000€</p>
              <p className="location">Barcelona IX. </p>
          </div>
        </div>

        <div className='property-card'>
          <div className="card-image">
              <img src="dummy2.png" alt="property" />
          </div>
          <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
          <div className="description">
              <p className="price">320 000€</p>
              <p className="location">Barcelona IX. </p>
          </div>
        </div>

        <div className='property-card'>
          <div className="card-image">
              <img src="dummy2.png" alt="property" />
          </div>
          <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
          <div className="description">
              <p className="price">320 000€</p>
              <p className="location">Barcelona IX. </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Listing