import * as React from 'react';
import TopBarContainer from '../../containers/TopBarContainer';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <TopBarContainer />
            </div>
        );
    }
}
  
export default Home;
