// import {Link}
//     from "react-router-dom";
//
// function Assignment6() {
//     return(
//         <div>
//             <Link to="/">Lab</Link> |
//             <Link to="/hello">Hello</Link> |
//             <Link to="/tuiter">Tuiter</Link>
//             <h1>Assignment 6</h1>
//         </div>
//     )
// }
// export default Assignment6;


import Classes from "./classes/index";
import Styles from "./styles/index";
import ConditionalOutput
    from "./conditional-output";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;






