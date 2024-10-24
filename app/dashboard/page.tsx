import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Dashboardpage() {
  const { userId } = auth()
  const user = await currentUser()
  console.log(userId)
  console.log(user)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDisplayName = (user: any) => {
    if (user?.fullName) return user.fullName
    if (user?.firstName || user?.lastName)
      return `${user?.firstName || ''} ${user?.lastName || ''}`.trim()
    return 'No name provided' // 이름이 없을 경우 대체 텍스트 표시
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard. 대시보드 </h1>
      <p className="mb-4">
        Welcome to dashboard. 이 페이지는 로그인된 사용자의 정보를 보여주는
        페이지입니다.
      </p>

      {userId && (
        <div>
          <p>UserID: {userId}</p>
          <p>Name: {getDisplayName(user)}</p> {/* 이름 출력 */}
          <p>Username: {user?.username}</p>
          <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      )}
    </div>
  )
}
