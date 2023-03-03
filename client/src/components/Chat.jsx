import React from "react";
import { useChatContext } from "./Context";

const Chat = () => {
  const { chat , typing } = useChatContext();
  console.log(chat);
  return (
    <>
      <div className="py-2">
        {chat.map((c, i) => {
          if (c.message) {
            if (c.received === true) {
              console.log(c.message);
              return (
                <div key={i} className="chat-message pt-0.5">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      <div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block text-base bg-gray-500 text-white capitalize break-all">
                            {c.message}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={i} className="chat-message pt-0.5">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block text-base  bg-blue-600 text-white  capitalize break-all ">
                          {c.message}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }
        })}

        {/* <div>Typing..</div> */}
      </div>
    </>
  );
};

export default Chat;
