import profileReducer from "./profile-reducer";
import dialogsReducer from './dialog-reducer';
import navbarReducer from './navbar-reducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action)

    this._callSubscriber(this._state)
  },
} 





// чтобы можно было узнать что есть в state через консоль
  window.store = store

export default store