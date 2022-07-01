/**
 * List of actions sent from the client
 */

const ClientActions = {
  createNewRoom: "BlueXin_CREATE_NEW_ROOM",
  joinRoom: "BlueXin_JOIN_ROOM",
  sendMessage: "BlueXin_SEND_MESSAGE",
  listen: "BlueXin_LISTEN_STATE",
  requestAvailableRooms: "BlueXin_AVAILABLE_ROOMS",
  ping: "BlueXin-ping"
};

export default ClientActions;
