export type MessageReactType ={
  username: string;
  userId: string;
  userAvatar: number;
  messageId: string;
  react:number;
}

export type MessageType = {
  username: string;
  userId: string;
  userAvatar: number;
  messageId: string;
  content: string;
  image: string;
  repliedMessageId: string;
  reactsList: MessageReactType[];
  time: string;
};

export type UserType = {
  id: string;
  room: string;
  username: string;
  avatar: number;
};