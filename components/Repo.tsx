import Link from 'next/link'
import { username } from '@/app/contents'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

interface RepoProps {
  name: string
}
const Repo: React.FC<RepoProps> = async ({ name }) => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`
  )
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repo = await response.json()

  console.log(repo)

  return (
    <div>
      <h3 className="text-xl font-bold">
        <Link href={`https://github.com/${username}/${name}`}></Link>
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="flex items-center gap-1">
          <FaStar />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1">
          <FaEye />
          {repo.stargazers_count}
        </span>
      </div>
    </div>
  )
}

export default Repo
