const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  messageData: {
        fromFriend: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nisi.",
        },
        {
          id: 2,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nisi.",
        },
        {
          id: 3,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nisi. Sit, amet consectetur adipisicing elit. Possimus, nisi.",
        },
        ],
        fromMe: [
        {
          id: 1,
          message:
            "От меня",
        },
        {
          id: 2,
          message:
            "Моё сообщение",
        },
        {
          id: 3,
          message:
            "Меня видно?",
        },
        ],
  },

  dialogsData: [
        {
          id: 1,
          name: "Julia",
        },
        {
          id: 2,
          name: "Aleksey",
        },
        {
          id: 3,
          name: "Mila",
        },
        {
          id: 4,
          name: "Alica",
        },
        {
          id: 5,
          name: "Dasha",
        },
  ],

  newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessage,
      };
      state.messageData.fromMe.push(newMessage);
      state.newMessage = "";
      return state;

    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage;
      return state;
    
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (message) =>  
  ({ type: UPDATE_NEW_MESSAGE, newMessage: message });

export default dialogsReducer