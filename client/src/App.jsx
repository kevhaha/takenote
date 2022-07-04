import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: []
    };
    this.selected = this.selected.bind(this);
    this.changePage = this.changePage.bind(this);
    this.selected = this.selected.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.allNotes = this.allNotes.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  componentDidMount() {
    axios.get('/takenote')
    .then((response) => {
      // console.log(response.data);
      this.setState({notes: response.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  addNote(note){
    // console.log('this is addnote:', note);
    axios.post('/takenote', {
      data: note
    })
    .then((response) => {
      // console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  selected(note){
    var selected = this.state.notes.filter((value) => value.title === note);
    this.setState({notes: selected});
  }

  changePage(pg){
    this.setState({
      page: pg
    })
  }

  allNotes(){
    this.changePage('list');
    this.componentDidMount();
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes notes={this.state.notes} selected={this.selected}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote add={this.addNote}/>
    }
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={this.allNotes}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
