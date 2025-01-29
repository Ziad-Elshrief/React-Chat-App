const users = [];

function userJoin(id, username, room, avatar) {
  const user = { id, username, room, avatar };
  users.push(user);
  return user;
}

function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

function checkUserInRoom(room, username) {
  const userRooms = users.filter((user) => user.username === username);
  if (userRooms.length > 0) {
    return userRooms.find((userRoom) => userRoom.room === room);
  }
  return undefined;
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  checkUserInRoom,
};
