import React from 'react';
import NoteView from './NoteView.jsx';

class Notes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    };
  }

  render () {
    return (
      <div className="notes-list">
        <h1>My Notes</h1>
        {this.props.notes.map((note, key) =>
        <NoteView key={key} note={note} selected={this.props.selected}/>)}
      </div>
    )
  }
}

export default Notes;

{/* <div className="notes-list">
          <div className="note">
            <div className="note-title"><h3>Defenestrations of Prague</h3></div>
            <div className="note-category"><h4>History</h4></div>
            <div className="note-desc">Three major incidents in the history of Bohemia in which people were defenestrated (thrown out of a window).</div>
          </div>
          <div className="note">
            <div className="note-title"><h3>Hedgehog signaling pathway</h3></div>
            <div className="note-category"><h4>Biology</h4></div>
            <div className="note-desc">A signaling pathway that transmits information to embryonic cells required for proper cell differentiation.</div>
          </div>
          <div className="note">
            <div className="note-title"><h3>Funcitonal Groups</h3></div>
            <div className="note-category"><h4>Biology</h4></div>
            <div className="note-desc">Specific groupings of atoms within molecules that have their own characteristic properties, regardless of the other atoms present in a molecule.</div>
          </div>
          <div className="note">
            <div className="note-title"><h3>Giant Rabbit Attack on US President Jimmy Carter</h3></div>
            <div className="note-category"><h4>History</h4></div>
            <div className="note-desc">A 1979 incident in which US President Jimmy Carter was attacked by a giant swamp rabbit.</div>
          </div>
        </div> */}