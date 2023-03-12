import "./App.css";
import Chat from "./components/Chat";
import { useChatContext } from "./components/Context";
import Input from "./components/Input";
import NavBar from "./components/NavBar";

function App() {
  const { typing } = useChatContext();
  return (
    <>
      <div className="container ">
          <NavBar />
        <div className="form border">
          {/* Here message display will be done  */}
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
      </div>
    </>
  );
}

export default App;
