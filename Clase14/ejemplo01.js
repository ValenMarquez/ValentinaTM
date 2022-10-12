const num1 = parseInt(prompt ('Ingrese primer numero', '')); //20
const num2 = parseInt(prompt ('Ingrese segundo numero', '')); //10
const num3 = parseInt(prompt ('Ingrese tercer numero', '')); // 5

if(num1 > num2 && num1 > num3) {
    document.write_('el número mayor es ${num1}')
} else if (num2 > num3) {
 document.write('el número mayor es ${num2}')
} else{
    document.write('')
}