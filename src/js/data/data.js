const footer = {
    git: 'https://github.com/Jimmba',
    year: 2021,
    link: 'https://rs.school/js/'
};

const themes = ['red', 'green', 'blue'];

const messages = {
    default: 'Select field and enter number',
    data: [
        'Great, try another',
        'Ok, try another',
        'There are still empty fields. Go on',
        'You\'re doing well'
    ],
    mistakes: {
        notANumber: 'You can only insert numbers from 0 to 10'
    },
    finished: 'Congratulations! You did it!'
}

const field = {
    data: [
        0,5,0,4,0,0,0,1,3,
        0,2,6,0,0,0,0,0,0,
        0,0,0,0,0,0,0,9,0,
        0,0,0,0,8,5,6,0,0,
        1,0,0,0,0,0,0,0,0,
        0,0,0,0,6,0,0,0,0,
        3,0,0,1,0,0,0,0,0,
        0,0,7,3,0,0,0,0,0,
        0,0,0,0,0,0,5,0,0
    ],
    data0: [
        0,6,5,3,9,7,2,8,4,
        2,8,4,1,6,5,7,3,9,
        3,7,9,4,8,2,1,5,6,
        6,3,8,9,7,4,5,1,2,
        5,4,1,6,2,8,3,9,7,
        9,2,7,5,3,1,6,4,8,
        4,9,3,7,5,6,8,2,1,
        7,5,2,8,1,9,4,6,3,
        8,1,6,2,4,3,9,7,5
    ],
    result: [
        1,6,5,3,9,7,2,8,4,
        2,8,4,1,6,5,7,3,9,
        3,7,9,4,8,2,1,5,6,
        6,3,8,9,7,4,5,1,2,
        5,4,1,6,2,8,3,9,7,
        9,2,7,5,3,1,6,4,8,
        4,9,3,7,5,6,8,2,1,
        7,5,2,8,1,9,4,6,3,
        8,1,6,2,4,3,9,7,5
    ]

}

export { footer, themes, field, messages};