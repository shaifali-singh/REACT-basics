import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images : [] };

     onFormSubmit = async (term) => {
       const response = await unsplash.get("search/photos",{
             params : { query : term }
        });
        //alternative
        // .then( response => {
        //     console.log(response.data.results);
        // });
        this.setState({ images : response.data.results} );
    }

render(){
 return (
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onFormSubmit}/>
        {/* Found {this.state.images.length} images */}
        <ImageList images={this.state.images} />
    </div>
 );
};
};
export default App;