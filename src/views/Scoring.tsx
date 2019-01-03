import {Component} from 'react';



class Scoring extends Component<{}, {}> {

    render() {
        return <section id={'scoring'}>
            <div className="previous"></div>
            <div className="current"></div>
            <div className="next"></div>
        </section>;
    }

}

export default Scoring;