'use strict';
var inquirer = require('inquirer');

var questions = [
    {
        type   : 'input',
        name   : 'first_name',
        message: 'What\'s your first name'
    },
    {
        type   : 'input',
        name   : 'last_name',
        message: 'What\'s your last name',
        default: function () {
            return 'Doe';
        }
    },
    {
        type    : 'input',
        name    : 'phone',
        message : 'What\'s your phone number',
        validate: function (value) {
            var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
            if (pass) {
                return true;
            }

            return 'Please enter a valid phone number';
        }
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});

inquirer.prompt([
    {
        type    : 'checkbox',
        message : '请选择需要从页面中爬取的元素！',
        name    : 'target',
        choices : [
            new inquirer.Separator(' = 图片 = '),
            {
                name: 'png'
            },
            {
                name: 'jpg'
            },
            {
                name: 'gif'
            },
            new inquirer.Separator(' = 链接 = '),
            {
                name: 'link'
            },
            {
                name: 'ed2k'
            },
            {
                name: 'magnet'
            }
        ],
        validate: (answer) => {
            if (answer.length < 1) {
                return '必须选择一种类型！';
            }
            return true;
        }
    }
]).then(function (answers) {

});
