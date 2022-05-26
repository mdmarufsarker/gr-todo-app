import './TodoItem.scss'

export const TodoItem: React.FC<Todo> = ({title, description, isCompleted}) => {
    return (
        <article className="todo-item">
            <section className='todo-item-text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <input type="checkbox" defaultChecked={isCompleted} />
        </article>
    )
}