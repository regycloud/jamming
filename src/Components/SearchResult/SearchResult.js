<<<<<<< HEAD
import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/TrackList'

class SearchResult extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResult}/>
            </div>
        )
    }
}

export default SearchResult;
=======
import React from 'react'; 
>>>>>>> parent of c19e1f7 (Step 31)
