import React from 'react';

class NoteView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      selected: '',
      hidden: false,
      starred: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleHidden = this.handleHidden.bind(this);
    this.handleStarred = this.handleStarred.bind(this);
  }

  handleClick (event) {
    console.log('clicked')
    if (this.state.clicked === true) {
      this.setState({clicked: false})
    } else {
      this.setState({clicked: true})
    }
    // this.setState({clicked: !clicked});
  }

  // handleSelect (event, note) {
  //   console.log('selected note:', note)
  //   this.setState({selected: note});
  //   this.props.selected(note);
  // }

  handleSelect (event, note) {
    console.log('selected note:', note)
    this.setState({selected: note});
    this.props.selected(note);
  }

  handleHidden (event) {
    if (this.state.hidden === true) {
      this.setState({hidden: false})
    } else {
      this.setState({hidden: true})
    }
    // this.setState({clicked: !clicked});
  }

  handleStarred (event) {
    if (this.state.starred === true) {
      this.setState({starred: false})
    } else {
      this.setState({starred: true})
    }
    // this.setState({clicked: !clicked});
  }

  render () {
    return(
      <div>
        <div className="note" onClick={(event) => this.handleSelect(event, this.props.note.title)}>
          <div className="noteView" onClick={this.handleClick}>
            {this.state.hidden && <div>HIDDEN</div>}
            {this.state.starred && <div>STARRED</div>}
            <div className="noteViewTitle">
              <h2>{this.props.note.title}</h2>
            </div>
            <div className="noteViewCategory">
              <h3>{this.props.note.category}</h3>
            </div>
            <div className="noteViewDescription">
              <h4>{this.props.note.tagline}</h4>
            </div>
            <div className="noteViewNote">
              {this.state.clicked && <p>{this.props.note.note}</p>}
            </div>
          </div>
        </div>
        <button onClick={this.handleHidden}>Hidden</button>
        <button onClick={this.handleStarred}>Starred</button>
      </div>
    )
  }


};

export default NoteView;
