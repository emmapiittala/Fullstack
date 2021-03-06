const Header = ({ course }) => {
  return ( 
    <h2>{course.name}</h2>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) =>
      <
        Part key={part.id} part={part}
         />
      )}
    </div>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return (
    <h4>total of {sum} exercises</h4>
  ) 
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course