import { Component } from 'react';
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children //all react components have a propery called children
    }
}

export default withRouter(ScrollToTop)