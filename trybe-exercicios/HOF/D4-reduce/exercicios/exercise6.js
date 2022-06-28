const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
  return notas.map((nota, idx) => {
    return {
    name: alunos[idx],
    average: nota.reduce((acc, curr) => acc + curr, 0) / nota.length
    }
  })
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];


console.log(studentAverage(students, grades))



