import React from 'react';
import './Recipies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Recipies = () => {
    return (
      <div style={{marginTop: '120px'}}>
        {/* Component code here */}
        <h2 style={{ textAlign: 'center', color: '#3b8b13', fontFamily: 'Montserrat',marginBottom: '16px', fontSize: '54px' }}>Recipies</h2>
        <p style={{fontweight: 'normal', lineheight: '1.56',fontFamily: 'Montserrat', letterspacing: '0.45px', color: '#484848', fontsize: '18px', marginBottom: '16px' }}>Use filters to find meals and snacks that fit your preferences.</p>
      

{/* <div className="search-container">
<input className='recipe' type="text" placeholder="Search for recipes..." />
<button style={{ padding: '0px', fontSize: '16px',color: 'black', cursor: 'pointer' }}>
      <FontAwesomeIcon icon={faSearch} />
      </button>

</div> */}

<div className="Second_search">

        <input type="text" placeholder="Search for recipes by ingredients..." style={{width: '705px',height: '45px',padding: '5px',margin: '20px 0px 25px 45px',border: '2px solid #807a7a',position: 'relative',borderradius: '22px'}} />
        <button className='Second-search-button' style={{ }}>
      <FontAwesomeIcon icon={faSearch} />
    </button>

    </div>

</div>

    );
  };
  
  export default Recipies;
  