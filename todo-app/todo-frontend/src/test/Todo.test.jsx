import { render, screen } from '@testing-library/react'
import Todo from '../Todos/Todo'

describe('Todo', () => {
  test('renders todo text', () => {
    const todo = {
      text: 'Learn Docker',
      done: false,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={() => { }}
        completeTodo={() => { }}
      />
    )

    expect(screen.getByText('Learn Docker')).toBeInTheDocument()
  })

  test('shows complete button when todo is not done', () => {
    const todo = {
      text: 'Learn Docker',
      done: false,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={() => { }}
        completeTodo={() => { }}
      />
    )

    expect(
      screen.getByRole('button', { name: /set as done/i })
    ).toBeInTheDocument()
  })

  test('does not show complete button when todo is done', () => {
    const todo = {
      text: 'Learn Docker',
      done: true,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={() => { }}
        completeTodo={() => { }}
      />
    )

    expect(
      screen.queryByRole('button', { name: /set as done/i })
    ).not.toBeInTheDocument()
  })
})