void main() {
  print('first number: 4');
  double num1 = 4;
  
  print('Enter operator (+, -, *, /):');
  String operator = '+';
  
  print('second number: 5');
  double num2 = 5;
  
  double result;
  
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if(num2 == 0) {
        print('Error: Cannot divide by zero');
        return;
      }
      result = num1 / num2;
      break;
    default:
      print('Invalid operator');
      return;
  }
  
  print('Result: $num1 $operator $num2 = $result');
}