import React  from 'react'
import { useContext } from 'react'
import { checkPropTypes } from 'prop-types'
import Context from '../context'



const styles = {
    li: {
        display: 'flex',
        justifyCOntent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
      }

      return (
        <li style={styles.li}>
          <span className={classes.join(' ')}>
            <input
              type='checkbox'
              checked={todo.completed}
              style={styles.input}
              onChange={() => onChange(todo.id)}
            />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
          </span>
    
          <button className='rm' onClick={removeTodo.bind(null, todo.id)}>
            &times;
          </button>
        </li>
      )
    }

TodoItem.checkPropTypes = {
    todo: checkPropTypes.object,
    // todo: checkPropTypes.isRequired,
    index: checkPropTypes.number,
    onChange: checkPropTypes.func
}


export default TodoItem