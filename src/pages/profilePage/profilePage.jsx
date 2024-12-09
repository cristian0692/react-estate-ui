import "./profilePage.scss";
import { userData } from "../../lib/dummyData";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={userData.img} alt="profile Image" />
            </span>
            <span>
              UserName: <b>{userData.name}</b>
            </span>
            <span>
              Email: <b>{userData.email}</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
