import React, { Component } from 'react';
import NoteItem from './NoteItem';
import fbData from './firebaseConnect';

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount() {
        var arrayData = [];
        fbData.on('value', (notes) => {
            notes.forEach(note => {
                const key = note.key;
                const title = note.val().title;
                const content = note.val().content;
                arrayData.push({
                    key: key,
                    title: title,
                    content: content
                })
            })

        });
        this.setState({
            dataFirebase: arrayData
        })
    }


    getData = () => {
        console.log(this.state.dataFirebase);
        return this.state.dataFirebase.map((value, key) => {
            return <NoteItem
                key={key}
                i={key}
                title={value.title}
                content={value.content}
             ></NoteItem>
        })
    }


    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;