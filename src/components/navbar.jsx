import React from "react";
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-secondary badge-pill ml-2">
//             {this.props.totalItems}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

//stateless componants
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-secondary badge-pill ml-2">
          {props.totalItems}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
