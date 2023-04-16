import io from "socket.io-client";
import store from "../store/store";
import { setRoomId, setParticipants } from "../store/actions";
const SERVER = "http://localhost:5000";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io(SERVER);

  socket.on("connect", () => {
    console.log("successfully connected with the socket io server");
    console.log(socket.id);
  });

  socket.on("room-id", (data) => {
    const { roomId } = data;
    store.dispatch(setRoomId(roomId));
  });

  socket.on("room-update", (data) => {
    const { connectedUsers } = data;
    store.dispatch(setParticipants(connectedUsers));
  });
};

export const disconnectSocket = () => {
    socket.emit("leave")
  socket.disconnect();
};

export const createNewRoom = (identity) => {
  const data = {
    identity,
  };

  socket.emit("create-new-room", data);
};
export const joinRoom = (identity, roomId) => {
  const data = {
    identity,
    roomId,
  };

  socket.emit("join-room", data);
};
