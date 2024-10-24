import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  link: string
  level: string
}
interface CoursesProps {
  courses: Course[]
}

const Courses: React.FC<CoursesProps> = async ({ courses }) => {
  return (
    <div className="grid-1">
      {courses.map((course: Course) => (
        <div key={course.id} className="bg-white p-4 m-4 rounded-lg">
          <h2 className="text-black">{course.title}</h2>
          <small className="text-black">Level: {course.level}</small>
          <p className="text-black mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-700 text-black rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
