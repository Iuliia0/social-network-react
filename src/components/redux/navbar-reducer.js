let initialState = {
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
}

const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer