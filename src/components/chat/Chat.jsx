import "./chat.scss";
import { userData } from "../../lib/dummyData";
import { useState } from "react";
function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur ...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={userData.img} alt="" />
              {userData.name}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                velit!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                velit!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                velit!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                velit!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                velit!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                velit!
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
