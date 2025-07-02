// que 2
//     *
//    **
//   ***
//  ****
// *****

// function pattern(n) {
//     for(let i = 1; i <=n ; i++){
//         let str = "";
//         for (let k = 1; k <= n - i; k++) {
//             str += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
// pattern(5);



// que 3
//     *
//    ***
//   *****
//  *******
// *********


//method 1
// function pattern(n) {
//     for(let i = 1; i <=n ; i++){
//         let str = "";
//         for (let k = 1; k <= n - i; k++) {
//             str += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             str += "*";
//         }
//         for (let l = 2; l <= i; l++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
// pattern(5);

//method 2
// function pattern(n) {
//     let m = 1;
//     for(let i = 1; i <=n ; i++){ //1
//         let str = "";
//         for (let k = 1; k <= n - i; k++) {
//             str += " ";
//         }
//         for (let j = 1; j <= m; j++) {
//             str += "*";
//         }
//         m = m+2;
//         console.log(str);
//     }
// }
// pattern(5);

// que 4
// *********
//  *******
//   *****
//    ***
//     *

//method 1
// function pattern(n) {
//     for (let i = n; i >= 1; i--) {
//         let str = "";
//         for (let k = 1; k <= n - i; k++) {
//             str += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             str += "*";
//         }
//         for (let l = 2; l <= i; l++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
// pattern(5);

//method 2
// function pattern(n) {
//     let m = n;
//     for (let i = n; i >= 1; i--) {
//         let str = "";
//         for (let k = 1; k <= n - i; k++) {
//             str += " ";
//         }
//         for (let j = 1; j <= m; j++) {
//             str += "*";
//         }
//         m = m-2;
//         console.log(str);
//     }
// }
// pattern(9);



//que  5
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// function pattern(n) {
//   for (let i = 1; i <= n; i++) {
//         let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
//         console.log(str);
//     }

//     for (let i = n - 1; i >= 1; i--) {
//         let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
//         console.log(str);
//     }  
// }
// pattern(5);


//que  6
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********


// function pattern(n) {
//     for (let i = n ; i >= 1; i--) {
//         let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
//         console.log(str);
//     }  
//   for (let i = 2; i <= n; i++) {
//         let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
//         console.log(str);
//     }

// }
// pattern(5);


// que 7
// 1
// 3  2
// 4  5  6
// 10 9  8  7
// 11 12 13 14 15

/*
Logic:
- Odd rows (1, 3, 5, ...) are filled left to right with increasing numbers.
- Even rows (2, 4, ...) are filled left to right, but printed in reverse order.
- The numbers always increase, but the direction of printing alternates.
*/
// function numberPattern(n) {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         let row = [];
//         for (let j = 0; j < i; j++) {
//             row.push(num++);
//         }
//         if (i % 2 === 0) {
//             row.reverse(); // Reverse even rows
//         }
//         console.log(row.join(' '));
//     }
// }
// numberPattern(9);
