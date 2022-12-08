const Course = ({ courses }) => {

  const Header = ({ course }) => <h2>{course.name}</h2>;

  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

  const Content = ({ course }) => {
    const total = course.parts.reduce((sum, part) => {
      sum = sum + part.exercises;
      return sum;
    }, 0);

    return (
      <>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
        <b >total of {total} exercises</b>
      </>
    );
  };

  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
          </div>
        )
      })}
    </>
  );
};
export default Course;
