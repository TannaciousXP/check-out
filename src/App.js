import React from 'react';
import containers from './containers';

const { Subtotal, Esttotal, Discount } = containers

// Set default value here


// export default class App extends Component {
//   componentWillMount() {

//   }
//   render() {
//     return (
//       <div className="container">
//         <Subtotal/>
//         <Esttotal/>
//         <Discount/>
//       </div>
//     )
//   }
// }
const App = () => (
      <div className="container">
        <Subtotal/>
        <Esttotal/>
        <Discount/>
      </div>
)

export default App;