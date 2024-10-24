import React from 'react'
import { FaCodeBranch, FaStar, FaEye } from 'react-icons/fa'
import Link from 'next/link'
import { username } from '../contents'

export default async function Repospage() {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)

  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repos = await response.json()

  console.log(repos)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github repositories of {username}
      </h2>
      <ul>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          repos.map((repo: any) => (
            <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
              <Link href={`/repos/${repo.name}`}>
                <h3 className="text-xl font-bold">{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
