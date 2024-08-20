import { Link } from "react-router-dom";
import image1 from '../img/user.png'

export default function Navbar() {
  return (
    <div className= "header">
            <div className="header-team" >
            <h1 className="header-h1">AI Developer Team</h1>
            </div>
           <nav>
            <ul >
                <li><Link>About</Link></li>
                <li><Link>Our team</Link></li>
                <li><Link> Projects</Link></li>
                <li><Link>contacts</Link></li>
               
            </ul>
            <div className="hide">
                <button></button>
            </div>

            </nav>
            <div className="join-team">
              <div className="namad">
                <img src={image1} alt="prof" />
              </div>
                <div className="header-join">
                    
                    <button>Join team</button>
                </div>
            </div>
          </div>
                
    
  );
}


