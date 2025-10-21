// task.jsx
//create a component that returns an input element of type checkbox
// and a span element of type text
function Task({text})
{
    return (
        <>
        <input type="checkbox"/>
        <span>{text}</span>
        </>
    );
   
}
 export default Task;