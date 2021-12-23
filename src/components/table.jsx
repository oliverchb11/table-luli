import theadMap from './thead';
import tbodyMap from './tbody';
import  './table.css';
function Table(){
    return(
        <section className="container">
        <table className="table">
            <thead className="thead">
            {theadMap}
            </thead>
             {tbodyMap}
        </table>
        </section>
    )
}
  
export default Table;
