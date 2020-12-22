import {Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render() {
        return (
            <section>
                {this.props.arr.map((e, i) => {
                    return <Todo key={i} todo={e} />
                })}
            </section>
        )
    }
}

export default List;