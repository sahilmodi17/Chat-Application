
import Chat from "./Chat";

import Input from "./Input";
import NavBar from "./NavBar";
import { useChatContext } from "./Context";
import { useParams } from "react-router-dom";

const ChatWindow = () => {
  const { typing, socket } = useChatContext();
  const {roomId} = useParams()

  return (
    <>
        <div className="form border ">
          {/* Here message display will be done  */}
          {
            roomId && <div>Room Id : {roomId}</div>
          }
          <div
            className="h-[92%] bg-slate-300  chat overflow-y-auto"
            style={{ height: typing ? "87%" : "92% " }}
          >
            <Chat />
          </div>
          {typing && (
            <div className="chat-message pt-0.5 bg-slate-300 ">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <div>
                      <span className="px-2 py-1 rounded-lg inline-block text-sm bg-gray-500 text-white capitalize break-all">
                        Typing...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <hr className="border-2" />
          <div className="">
            {/* here input component */}
            <Input />
          </div>
        </div>
    </>
  );
};

export default ChatWindow;
