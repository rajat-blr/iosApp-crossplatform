import { USERS } from "./users";

export const POSTS = [
    {
    image: '/Users/rajatvarma/Desktop/cloneproj/assets/IMG_2329.HEIC',
    user: USERS[0].user,
    likes:7899,
    caption: 'Turban Tadka🥸 😝 ',
    profile_picture: USERS[0].image,
    comments: [
        {
            user: 'kelvinkalin',
            comment: 'yoooo'
            
        },
        {
            user: 'rudrakshagarwal',
            comment: 'whatttt🤯'
        }
    ]
    },
    {
        image: '/Users/rajatvarma/Desktop/cloneproj/assets/setup.jpeg',
        user: USERS[1].user,
        likes: 4578,
        caption: 'SDE-1 FlipKart - Journey Begins🔥🔥',
        profile_picture: USERS[1].image,
        comments:[
            {
                user:'katilkabootar',
                comment: 'bhai bhai🔥 big fan'
            },
            {
                user: 'eshasharma',
                comment: '😍 all the best'
            }
        ]
   }

]