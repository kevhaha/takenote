// import React from 'react';

// class Selected extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selected: ''
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleSelect (event, note) {
//     console.log('selected note:', note)
//     this.setState({selected: note});
//     selected(note);
//   }

//   render () {
//     return(
//       <div className="note">
//         <div className="noteView" onClick={(event) => this.handleSelect(event, this.props.note.note)}>
//           <div className="noteViewTitle">
//             <h2>{this.props.note.title}</h2>
//           </div>
//           <div className="noteViewCategory">
//             <h3>{this.props.note.category}</h3>
//           </div>
//           <div className="noteViewDescription">
//             <h4>{this.props.note.tagline}</h4>
//           </div>
//           <div className="noteViewNote">
//             {this.state.clicked && <p>{this.props.note.note}</p>}
//           </div>
//         </div>
//       </div>
//     )
//   }


// };

// export default Selected;
