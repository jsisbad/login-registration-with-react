import React, {Component} from 'react';
import AppRouter from './routes/AppRouter';


class App extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <AppRouter/>
                    </div>
                </div>
        );
    }
}

export default App;
