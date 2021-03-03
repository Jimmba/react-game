import { easy, hard, medium, megaEasy } from "./fields";

const footer = {
    git: 'https://github.com/Jimmba',
    year: 2021,
    link: 'https://rs.school/js/'
};

const themes = ['red', 'green', 'blue'];

const translations = {
    en: {
        menu: {
            gameName: 'Sudoku',
            settingsButton: 'settings',
            closeButton: 'Close',
            textSetBackground: 'Set background color',
            themesButtons: [
                {
                    'description': 'red',
                    'className': 'red'
                },
                {
                    'description': 'green',
                    'className': 'green'
                },
                {
                    'description': 'blue',
                    'className': 'blue'
                },
            ],
            statisticsButton: 'Statistic',
            fullScreenButton: 'Full Screen',
            backButton: 'Back',
            textSetLanguage: 'Change language',
            textSetLevel: 'Level',
            statistics: {
                title : 'Top 10',
                time: 'Time',
                level: 'Level'
            },
            levels: [
                {
                    level: 'mega easy',
                    value: 'megaEasy'
                },
                {
                    level: 'easy',
                    value: 'easy'
                },
                {
                    level: 'medium',
                    value: 'medium'
                },
                {
                    level: 'hard',
                    value: 'hard'
                }
            ],
            textSetMusic: 'music',
            textSetSounds: 'sounds',
            resetButton: 'reset game',
            timerTitle: 'game time'
        },
        messages: {
            default: 'Select field and enter number',
            data: [
                'Great, try another',
                'Ok, try another',
                'You can solve the puzzle!',
                'You\'re doing well'
            ],
            mistakes: {
                notANumber: 'You can only insert numbers from 0 to 9'
            },
            finished: 'Congratulations! You did it!'
        }
    }, 
    ru: {
        menu: {
            gameName: 'Судоку',
            settingsButton: 'Настройки',
            closeButton: 'Закрыть',
            textSetBackground: 'Выбрать цвет фона',
            themesButtons: [
                {
                    'description': 'красный',
                    'className': 'red'
                },
                {
                    'description': 'зеленый',
                    'className': 'green'
                },
                {
                    'description': 'синий',
                    'className': 'blue'
                },
            ],
            statisticsButton: 'Статистика',
            fullScreenButton: 'Развернуть',
            backButton: 'Свернуть',
            textSetLanguage: 'Язык',
            textSetLevel: 'Сложность',
            statistics: {
                title : 'Топ 10',
                time: 'Время',
                level: 'Уровень'
            },
            levels: [
                {
                    level: 'супер легкий',
                    value: 'megaEasy'
                },
                {
                    level: 'легкий',
                    value: 'easy'
                },
                {
                    level: 'средний',
                    value: 'medium'
                },
                {
                    level: 'тяжелый',
                    value: 'hard'
                }
            ],
            textSetMusic: 'музыка',
            textSetSounds: 'звуки',
            resetButton: 'сбросить',
            timerTitle: 'игровое время'
        },
        
        messages: {
            default: 'Выберите поле и введите число',
            data: [
                'Отлично! Заполните другое поле',
                'Замечательно! Продолжайте!',
                'Вы сможете решить головоломку!',
                'У вас неплохо получается'
            ],
            mistakes: {
                notANumber: 'Вы можете вводить только номера от 0 до 9'
            },
            finished: 'Поздравляю! Вы сделали это!'
        }
    }
}

const field = {
    megaEasy: megaEasy,
    easy: easy,
    medium: medium,
    hard: hard
}


const formatTime = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000);   
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export { footer, themes, field, translations, formatTime};