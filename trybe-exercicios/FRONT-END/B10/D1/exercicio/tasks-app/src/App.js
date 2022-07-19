import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;

// const Task = () => {
//   const materias = ['High Order Functions', 'Composicao de Componentes', 'Composicao de Estados', 'Redux']
  
//   return materias.map(( element, index ) => (
//       <li key={index}>
//         {element}  
//       </li>
//     )
//   );
// }
