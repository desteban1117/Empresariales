package main

import (
  "fmt"
  "math"
)

func Sqrt(x float64) float64 {
     /*z := float64(x/2);
     for i := 0; i < 10; i++{
       z = z - (((z*z) - x)/(2*z));
     }*/

     delta := float64 (0.000001);
     z := float64(x/2);
     i := float64(5);

     for math.Abs(i) > delta{
       z2 := float64(z);
       z = z - (((z*z) - x)/(2*z));

       i = z-z2;

     }

     return z
}

func main() {
  fmt.Println(Sqrt(10))
  fmt.Println(math.Sqrt(10))
}
