import "./topBox.scss";
import { PersonalInfo } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Personal Information</h1>
      <div className="list">
        {PersonalInfo.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
            
              <div className="userTexts">
                <div>Phone No:
                <span className="username">{user.phone}</span>
                </div>
                <div> Email:
                  <br></br><br></br>
                <span className="email">{user.email}</span>
                </div><br></br>
                <div> Linkedin: <br></br><br></br>
                <span className="Linkedin">{user.Linkedin}</span>
                </div>
              </div>
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
