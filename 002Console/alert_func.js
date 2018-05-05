function func(){
    alert('I am a genius！！')
    alert('You guess what?!?')
    alert('I am not only smart, I am handsome too!!')
}
// ctrl + /  注释  ctrl + shift + /
// alert('*********')
// func()
// alert('############')

//做一点计算：
// var prices = 1000;
// var discount = prompt('You want how many of discount??');
// alert('congratulations！now the price is '+ prices*discount);

//做一点逻辑运算
// var passwd = prompt('please input your password:')
// if (passwd == 23561411){
//     alert('welcome back!!')
// }
// else if (passwd == 123456){
//     alert('You can only read a little of information')
// }
// else{
//     alert('the password is wrong!!please check again!!')
// }

var age = prompt('Input your age:')
if (isNaN(age/2)){
    alert('please input a number')
}
else if (age>=18){
    if (age>200){
        alert('Are you serious??')
    }
    else{
        alert('Congratulations!')
    }
}
else{
    alert('A fucking child....')
}
