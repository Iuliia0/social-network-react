const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
      };
      state.postsData.push(newPost)
      state.newPostText = '';
      return state;

    case UPDATE_NEW_TEXT: {
      state.newPostText = action.newText;
      return state;
    }

    default: 
      return state;
  }
}

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewTextCreator = (text) => 
  ({ type: UPDATE_NEW_TEXT, newText: text });

export default profileReducer