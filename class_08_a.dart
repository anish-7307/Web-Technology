extension SumExtension on List<num> {
  num sum() {
    num total = 0;
    for (num value in this) {
      total += value;
    }
    return total;
  }
}

void main() {
  List<int> numbers = [10, 20, 30, 40, 50];
  print('Sum: ${numbers.sum()}'); // Output: Sum: 150
  
  List<double> decimals = [1.5, 2.5, 3.5];
  print('Sum: ${decimals.sum()}'); // Output: Sum: 7.5
}