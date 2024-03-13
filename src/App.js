import { useState, useEffect } from 'react'
import styles from './App.module.scss'


export default function App(){
    return(
        <>

            <div className={styles.banner}>
                <h1>The World Famous Big Poppa Code React Starter Kit</h1>
              <img src='https://i.imgur.com/5WXigZL.jpg'/>
            </div>
            <TodoList
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            createTodo={createTodo}
            todos={todos}
            moveToCompleted={moveToCompleted}
            completedTodos={completedTodos}
            deleteTodo={deleteTodo}
            />
        </>
    )
}
