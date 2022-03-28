const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let store = {
  _state: {

    profilePage: {
      postsData: [
        {
          id: 1,
          message: "How are you?",
          likesCount: 10,
        },
        {
          id: 2,
          message: "It's my first post",
          likesCount: 5,
        },
        {
          id: 3,
          message: "Lorem ipsum dolor.",
          likesCount: 12,
        },
      ],

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

      newPostText: ''
    },

    messagePage: {
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
    },

    navbar: {
      friendsBlock: [
        {
          id: 1,
          src: 'https://thispersondoesnotexist.com/image',
          userName: 'Lena'
        },
        {
          id: 2,
          src: 'https://thispersondoesnotexist.com/image',
          userName: 'Olya'
        },
        {
          id: 3,
          src: 'https://thispersondoesnotexist.com/image',
          userName: 'Kostia'
        },
      ]
    },

  },

  _callSubscriber () {
    console.log('State changed')
  },

  getState() {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = '';
      
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.messagePage.newMessage
      };
      this._state.messagePage.messageData.fromMe.push(newMessage)
      this._state.messagePage.newMessage = '';
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        this._state.messagePage.newMessage = action.newMessage;
        this._callSubscriber(this._state)
    }
  },
} 

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewTextActionCreator = (text) => 
  ({ type: UPDATE_NEW_TEXT, newText: text });

// чтобы можно было узнать что есть в state через консоль
  window.store = store

export default store