var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];


var EmailRegular = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var Emails = [];

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (EmailRegular.test(email)) {
        Emails.push(email);
    }
}

console.log(Emails);
