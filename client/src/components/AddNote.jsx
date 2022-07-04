import React from 'react';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      tagline: '',
      note: ''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd() {
    // event.preventDefault();
    console.log('added');
    console.log(this.state);
    this.props.add(this.state);
  }

  handleChange(event, response) {
    console.log(event.target.value);
    this.setState(response);
  }

  render() {
    return (
      <div>
        <h1>New Note</h1>
        <form>
          Title:
          <br/>
          <input className="note-label" type="text" placeholder="Title" onChange={(event)=> {this.handleChange(event, {title: event.target.value})}}/>
          <br/>
          Category:
          <br/>
          <input className="note-label" type="text" placeholder="Category" onChange={(event)=> {this.handleChange(event, {category: event.target.value})}}/>
          <br/>
          Tagline:
          <br/>
          <input className="note-label" type="text" placeholder="Tagline" onChange={(event)=> {this.handleChange(event, {tagline: event.target.value})}}/>
          <br/>
          <input className="note-input" height="700px" type="text" placeholder="Write your note here!" onChange={(event)=> {this.handleChange(event, {note: event.target.value})}}/>
          <br/>
          {/* <button className="button">Save</button> */}
          <button className="button" onClick={this.handleAdd}>Save</button>
        </form>
      </div>
    )
  }
};

export default AddNote;
