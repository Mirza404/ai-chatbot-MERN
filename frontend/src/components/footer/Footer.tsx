import { Link } from "react-router-dom"; 
// import './index.css'; // Ensure you import the CSS file

// const Footer = () => {
//   return (
//     <footer>
//       <div
//         style={{
//           width: "100%",
//           padding: 20,
//           minHeight: "20vh",
//           maxHeight: "30vh",
//           marginTop: 50,
//         }}
//       >
//         <p style={{ fontSize: "30px", textAlign: "center" }}>
//           Built with love by <span></span>
//           <Link className="nav-link" to={"https://github.com/Mirza404"}>Mirza404</Link>
//         </p>
//       </div>
//     </footer>
//   );
// };

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <Link className="footer-link" to={"https://github.com/Mirza404"}>
        <FontAwesomeIcon icon={faGithub} />
        Mirza404
      </Link>
    </footer>
  );
};

export default Footer;