import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

    render() {
        return (
            <div>
                <h2>Component News</h2>
                <button onClick={() => this.props.useEditStateInStore()} type="button" class="btn btn-primary">Click di</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        edit: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStateInStore: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)