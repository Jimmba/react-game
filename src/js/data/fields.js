const megaEasy = [
    {
        data: [
            0,6,5,3,9,7,2,8,4,
            2,8,4,1,0,5,7,3,9,
            3,7,9,4,8,2,0,5,0,
            6,3,8,0,7,4,5,1,2,
            5,0,1,6,2,8,3,9,7,
            9,2,7,5,3,1,6,0,8,
            4,9,3,7,5,0,8,2,1,
            7,5,0,8,1,9,4,6,3,
            8,1,6,2,0,3,9,7,5
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
    }, 
    {
        data: [
            7,5,8,4,0,6,2,1,3,
            9,2,0,8,1,3,4,7,5,
            4,3,1,5,2,7,8,0,6,
            2,7,3,9,8,5,0,4,1,
            1,0,9,2,3,4,7,5,8,
            5,8,4,7,6,1,3,2,0,
            0,4,5,1,7,8,9,6,2,
            6,9,7,3,5,0,1,8,4,
            8,1,2,0,4,9,5,3,7
        ],
        result: [
            7,5,8,4,9,6,2,1,3,
            9,2,6,8,1,3,4,7,5,
            4,3,1,5,2,7,8,9,6,
            2,7,3,9,8,5,6,4,1,
            1,6,9,2,3,4,7,5,8,
            5,8,4,7,6,1,3,2,9,
            3,4,5,1,7,8,9,6,2,
            6,9,7,3,5,2,1,8,4,
            8,1,2,6,4,9,5,3,7
        ]
    }, 
    {
        data: [
            4,1,0,3,8,7,6,9,2,
            9,2,8,5,1,0,7,3,4,
            0,6,3,4,9,2,8,1,5,
            6,7,2,9,4,8,0,5,1,
            8,3,1,2,7,5,4,6,0,
            5,0,9,6,3,1,2,8,7,
            1,5,7,8,0,3,9,4,6,
            3,9,6,7,5,4,1,0,8,
            2,8,4,0,6,9,5,7,3
        ],
        result: [
            4,1,5,3,8,7,6,9,2,
            9,2,8,5,1,6,7,3,4,
            7,6,3,4,9,2,8,1,5,
            6,7,2,9,4,8,3,5,1,
            8,3,1,2,7,5,4,6,9,
            5,4,9,6,3,1,2,8,7,
            1,5,7,8,2,3,9,4,6,
            3,9,6,7,5,4,1,2,8,
            2,8,4,1,6,9,5,7,3
        ]
    },
    {
        data: [
            4,2,7,5,6,8,0,1,9,
            9,1,5,3,4,2,7,8,0,
            6,8,3,1,9,7,4,0,2,
            7,6,4,2,0,9,8,3,5,
            5,9,8,0,3,4,2,6,1,
            1,3,2,6,8,0,9,7,4,
            8,7,0,9,2,6,5,4,3,
            0,5,6,4,7,3,1,9,8,
            3,0,9,8,5,1,6,2,7
        ],
        result: [
            4,2,7,5,6,8,3,1,9,
            9,1,5,3,4,2,7,8,6,
            6,8,3,1,9,7,4,5,2,
            7,6,4,2,1,9,8,3,5,
            5,9,8,7,3,4,2,6,1,
            1,3,2,6,8,5,9,7,4,
            8,7,1,9,2,6,5,4,3,
            2,5,6,4,7,3,1,9,8,
            3,4,9,8,5,1,6,2,7
        ]
    },
    {
        data: [
            9,1,3,4,7,2,5,6,8,
            6,8,7,9,5,1,3,4,2,
            2,5,4,6,3,8,1,9,7,
            4,7,9,1,2,3,6,8,5,
            1,6,2,5,8,9,7,3,4,
            5,3,8,7,4,6,2,1,9,
            3,4,5,8,1,7,9,2,6,
            7,2,6,3,9,4,8,5,1,
            8,9,1,2,6,5,4,7,3
        ],
        result: [
            9,1,3,0,7,2,5,6,8,
            0,8,7,9,5,1,3,4,2,
            2,5,4,6,3,8,0,9,7,
            4,7,9,1,0,3,6,8,5,
            1,6,2,5,8,9,7,3,0,
            5,0,8,7,4,6,2,1,9,
            3,4,5,8,1,7,9,0,6,
            7,2,6,3,9,0,8,5,1,
            8,9,0,2,6,5,4,7,3
        ]
    }
];

const easy = [
    {
        data: [
            1,0,5,3,9,7,0,8,0,
            2,0,4,0,6,5,0,3,0,
            0,7,0,4,8,2,1,5,0,
            0,3,0,9,7,4,0,1,0,
            5,4,0,6,2,8,0,9,0,
            0,2,0,5,0,1,6,0,8,
            4,9,0,7,5,6,0,2,1,
            7,0,2,8,1,0,0,6,3,
            8,0,6,2,0,3,9,0,5
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
    }, 
    {
        data: [
            7,5,0,4,0,6,2,1,3,
            9,2,6,0,1,0,4,0,0,
            4,3,0,5,0,7,0,9,0,
            0,7,0,0,8,5,6,0,1,
            1,0,9,2,0,4,0,5,0,
            0,8,4,0,6,0,3,0,9,
            3,0,5,1,0,8,0,6,0,
            0,0,7,3,0,2,1,0,4,
            8,1,0,6,0,9,5,0,7
        ],
        result: [
            7,5,8,4,9,6,2,1,3,
            9,2,6,8,1,3,4,7,5,
            4,3,1,5,2,7,8,9,6,
            2,7,3,9,8,5,6,4,1,
            1,6,9,2,3,4,7,5,8,
            5,8,4,7,6,1,3,2,9,
            3,4,5,1,7,8,9,6,2,
            6,9,7,3,5,2,1,8,4,
            8,1,2,6,4,9,5,3,7
        ]
    }, 
    {
        data: [
            4,1,0,5,0,7,0,9,0,
            9,0,0,5,0,6,0,3,0,
            0,0,3,4,0,2,0,1,0,
            6,7,0,0,4,0,3,0,1,
            0,3,0,0,7,5,4,6,0,
            5,0,9,0,3,0,0,8,0,
            0,0,7,8,0,3,0,4,0,
            3,9,6,0,5,4,0,2,0,
            2,0,4,1,0,0,5,7,3
        ],
        result: [
            4,1,5,3,8,7,6,9,2,
            9,2,8,5,1,6,7,3,4,
            7,6,3,4,9,2,8,1,5,
            6,7,2,9,4,8,3,5,1,
            8,3,1,2,7,5,4,6,9,
            5,4,9,6,3,1,2,8,7,
            1,5,7,8,2,3,9,4,6,
            3,9,6,7,5,4,1,2,8,
            2,8,4,1,6,9,5,7,3
        ]
    },
    {
        data: [
            4,0,7,0,6,0,0,1,9,
            0,1,0,3,0,2,7,8,6,
            6,0,3,0,9,7,0,5,0,
            7,6,0,0,1,9,0,0,5,
            5,0,8,7,0,4,0,6,0,
            0,3,2,0,8,0,9,7,4,
            8,0,1,9,2,0,5,0,0,
            2,5,0,0,7,3,0,9,8,
            0,4,0,8,0,1,6,2,7
        ],
        result: [
            4,2,7,5,6,8,3,1,9,
            9,1,5,3,4,2,7,8,6,
            6,8,3,1,9,7,4,5,2,
            7,6,4,2,1,9,8,3,5,
            5,9,8,7,3,4,2,6,1,
            1,3,2,6,8,5,9,7,4,
            8,7,1,9,2,6,5,4,3,
            2,5,6,4,7,3,1,9,8,
            3,4,9,8,5,1,6,2,7
        ]
    },
    {
        data: [
            9,0,3,4,0,2,5,0,8,
            0,8,7,9,0,1,0,4,0,
            0,5,0,0,3,8,0,0,7,
            4,0,9,0,2,0,6,8,0,
            1,6,2,0,8,0,7,3,4,
            5,3,8,0,4,6,0,0,0,
            0,0,5,8,0,7,0,2,0,
            7,0,6,3,9,0,0,0,1,
            0,9,0,2,6,0,4,0,0
        ],
        result: [
            9,1,3,4,7,2,5,6,8,
            6,8,7,9,5,1,3,4,2,
            2,5,4,6,3,8,1,9,7,
            4,7,9,1,2,3,6,8,5,
            1,6,2,5,8,9,7,3,4,
            5,3,8,7,4,6,2,1,9,
            3,4,5,8,1,7,9,2,6,
            7,2,6,3,9,4,8,5,1,
            8,9,1,2,6,5,4,7,3
        ]
    }
]

const medium = [
    {
        data: [
            1,0,5,0,9,0,0,8,0,
            2,0,4,0,6,0,0,3,0,
            0,7,0,4,8,0,0,5,0,
            0,3,0,9,7,4,0,1,0,
            0,4,0,0,2,8,0,9,0,
            0,2,0,5,0,1,6,0,8,
            0,9,0,7,5,6,0,2,1,
            0,0,2,8,1,0,0,6,3,
            8,0,6,0,0,3,9,0,0
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
    }, 
    {
        data: [
            0,5,0,4,0,6,2,1,3,
            0,2,6,0,1,0,4,0,0,
            4,3,0,0,0,7,0,9,0,
            0,7,0,0,8,5,6,0,1,
            1,0,9,2,0,4,0,5,0,
            0,0,0,0,6,0,0,0,9,
            3,0,5,1,0,8,0,6,0,
            0,0,7,3,0,0,1,0,4,
            8,1,0,6,0,9,5,0,7
        ],
        result: [
            7,5,8,4,9,6,2,1,3,
            9,2,6,8,1,3,4,7,5,
            4,3,1,5,2,7,8,9,6,
            2,7,3,9,8,5,6,4,1,
            1,6,9,2,3,4,7,5,8,
            5,8,4,7,6,1,3,2,9,
            3,4,5,1,7,8,9,6,2,
            6,9,7,3,5,2,1,8,4,
            8,1,2,6,4,9,5,3,7
        ]
    }, 
    {
        data: [
            0,1,0,5,0,7,0,9,0,
            0,0,0,5,0,6,0,0,0,
            0,0,3,4,0,2,0,1,0,
            0,7,0,0,4,0,3,0,1,
            0,3,0,0,0,0,4,6,0,
            5,0,9,0,3,0,0,8,0,
            0,0,7,8,0,3,0,4,0,
            0,9,6,0,5,0,0,2,0,
            2,0,4,1,0,0,5,0,0
        ],
        result: [
            4,1,5,3,8,7,6,9,2,
            9,2,8,5,1,6,7,3,4,
            7,6,3,4,9,2,8,1,5,
            6,7,2,9,4,8,3,5,1,
            8,3,1,2,7,5,4,6,9,
            5,4,9,6,3,1,2,8,7,
            1,5,7,8,2,3,9,4,6,
            3,9,6,7,5,4,1,2,8,
            2,8,4,1,6,9,5,7,3
        ]
    },
    {
        data: [
            4,0,7,0,6,0,0,1,0,
            0,1,0,3,0,2,7,8,0,
            6,0,3,0,9,7,0,5,0,
            7,6,0,0,1,9,0,0,0,
            0,0,8,7,0,0,0,6,0,
            0,3,2,0,8,0,9,7,4,
            8,0,1,9,2,0,5,0,0,
            0,5,0,0,7,3,0,0,0,
            0,4,0,8,0,1,0,0,7
        ],
        result: [
            4,2,7,5,6,8,3,1,9,
            9,1,5,3,4,2,7,8,6,
            6,8,3,1,9,7,4,5,2,
            7,6,4,2,1,9,8,3,5,
            5,9,8,7,3,4,2,6,1,
            1,3,2,6,8,5,9,7,4,
            8,7,1,9,2,6,5,4,3,
            2,5,6,4,7,3,1,9,8,
            3,4,9,8,5,1,6,2,7
        ]
    },
    {
        data: [
            9,0,0,4,0,2,5,0,8,
            0,8,7,9,0,1,0,4,0,
            0,5,0,0,3,8,0,0,7,
            4,0,9,0,2,0,0,8,0,
            0,0,2,0,0,0,7,3,4,
            5,0,8,0,4,6,0,0,0,
            0,0,0,8,0,7,0,2,0,
            7,0,6,3,9,0,0,0,1,
            0,9,0,2,6,0,4,0,0
        ],
        result: [
            9,1,3,4,7,2,5,6,8,
            6,8,7,9,5,1,3,4,2,
            2,5,4,6,3,8,1,9,7,
            4,7,9,1,2,3,6,8,5,
            1,6,2,5,8,9,7,3,4,
            5,3,8,7,4,6,2,1,9,
            3,4,5,8,1,7,9,2,6,
            7,2,6,3,9,4,8,5,1,
            8,9,1,2,6,5,4,7,3
        ]
    }
]

const hard = [
    {
        data: [
            1,0,5,0,9,0,0,8,0,
            2,0,0,0,0,0,0,0,0,
            0,0,0,4,8,0,0,0,0,
            0,3,0,0,7,4,0,1,0,
            0,4,0,0,0,0,0,9,0,
            0,2,0,5,0,0,0,0,8,
            0,0,0,7,5,0,0,2,1,
            0,0,0,8,1,0,0,6,3,
            8,0,0,0,0,3,0,0,0
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
    }, 
    {
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
        result: [
            7,5,8,4,9,6,2,1,3,
            9,2,6,8,1,3,4,7,5,
            4,3,1,5,2,7,8,9,6,
            2,7,3,9,8,5,6,4,1,
            1,6,9,2,3,4,7,5,8,
            5,8,4,7,6,1,3,2,9,
            3,4,5,1,7,8,9,6,2,
            6,9,7,3,5,2,1,8,4,
            8,1,2,6,4,9,5,3,7
        ]
    }, 
    {
        data: [
            0,1,0,0,0,0,0,9,0,
            0,0,0,5,0,6,0,0,0,
            0,0,3,4,0,2,0,1,0,
            0,7,0,0,4,0,3,0,1,
            0,3,0,0,0,0,4,6,0,
            5,0,9,0,3,0,0,8,0,
            0,0,7,0,0,0,0,0,0,
            0,9,6,0,0,0,0,2,0,
            2,0,0,0,0,0,5,0,0
        ],
        result: [
            4,1,5,3,8,7,6,9,2,
            9,2,8,5,1,6,7,3,4,
            7,6,3,4,9,2,8,1,5,
            6,7,2,9,4,8,3,5,1,
            8,3,1,2,7,5,4,6,9,
            5,4,9,6,3,1,2,8,7,
            1,5,7,8,2,3,9,4,6,
            3,9,6,7,5,4,1,2,8,
            2,8,4,1,6,9,5,7,3
        ]
    },
    {
        data: [
            0,0,0,0,6,0,0,1,0,
            0,1,0,0,0,0,7,8,0,
            6,0,3,0,9,0,0,0,0,
            7,6,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,6,0,
            0,0,0,0,8,0,9,7,4,
            8,0,1,9,2,0,5,0,0,
            0,5,0,0,7,3,0,0,0,
            0,4,0,0,0,1,0,0,0
        ],
        result: [
            4,2,7,5,6,8,3,1,9,
            9,1,5,3,4,2,7,8,6,
            6,8,3,1,9,7,4,5,2,
            7,6,4,2,1,9,8,3,5,
            5,9,8,7,3,4,2,6,1,
            1,3,2,6,8,5,9,7,4,
            8,7,1,9,2,6,5,4,3,
            2,5,6,4,7,3,1,9,8,
            3,4,9,8,5,1,6,2,7
        ]
    },
    {
        data: [
            9,0,0,4,0,2,5,0,0,
            0,0,0,9,0,1,0,0,0,
            0,5,0,0,0,0,0,0,7,
            4,0,0,0,2,0,0,8,0,
            0,0,2,0,0,0,7,3,4,
            5,0,8,0,0,6,0,0,0,
            0,0,0,8,0,0,0,2,0,
            7,0,0,0,0,0,0,0,1,
            0,9,0,2,6,0,0,0,0
        ],
        result: [
            9,1,3,4,7,2,5,6,8,
            6,8,7,9,5,1,3,4,2,
            2,5,4,6,3,8,1,9,7,
            4,7,9,1,2,3,6,8,5,
            1,6,2,5,8,9,7,3,4,
            5,3,8,7,4,6,2,1,9,
            3,4,5,8,1,7,9,2,6,
            7,2,6,3,9,4,8,5,1,
            8,9,1,2,6,5,4,7,3
        ]
    }
]

export {megaEasy, easy, medium, hard}