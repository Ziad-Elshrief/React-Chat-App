import { socket } from "../socket";
import { useEffect, useRef, useState } from "react";

type Message = {
  isImage: boolean;
  content: string;
  time: string;
  username: string;
  userId: string;
};

export default function MessagesContainer() {
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessagesList((prev) => [...prev, message]);
    });
  }, []);
  useEffect(() => {
    messagesRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messagesList]);
  return (
    <div
      className=" bg-white dark:bg-slate-800 p-8 overflow-y-scroll border-l-2 border-l-indigo-700 sm:border-0"
      ref={messagesRef}
    >
      {messagesList.map((msg, index) =>
        msg.username === "System" ? (
          <p
            className="mb-3 text-indigo-900 dark:text-indigo-300 block text-center"
            key={index}
          >
            {msg.content}
          </p>
        ) : (
          <div
            className={`p-3 mb-4 ${
              msg.userId === socket.id
                ? "bg-violet-400 ml-auto"
                : "bg-indigo-300"
            } rounded-md w-10/12 sm:w-7/12 break-words shadow-md`}
            key={index}
          >
            <div className="flex justify-between items-center">
              <p className="text-indigo-900 font-semibold opacity-70">
                {msg.username}
              </p>
              <span className="text-gray-800 font-bold">{msg.time}</span>
            </div>
            {msg.isImage ? (
              <img className="w-full" src={msg.content} />
            ) : (
              <p className="whitespace-pre-line" dir="auto">{msg.content}</p>
            )}
          </div>
        )
      )}
    </div>
  );
}
