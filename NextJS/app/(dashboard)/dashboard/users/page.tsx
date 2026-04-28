import Link from "next/link"


const UserPage = () => {
  return (
    <div>
        <h1>Dashboard Users</h1>

        <ul className="mt-10">
            <li><Link href="/dashboard/users/1">User 1</Link></li>
            <li><Link href="/dashboard/users/2">User 2</Link></li>
            <li><Link href="/dashboard/users/3">User 3</Link></li>
            <li><Link href="/dashboard/users/4">User 4</Link></li>
            <li><Link href="/dashboard/users/5">User 5</Link></li>
            <li><Link href="/dashboard/users/6">User 6</Link></li>
            <li><Link href="/dashboard/users/7">User 7</Link></li>
            <li><Link href="/dashboard/users/8">User 8</Link></li>
            <li><Link href="/dashboard/users/9">User 9</Link></li>
            <li><Link href="/dashboard/users/10">User 10</Link></li>
        </ul>
    </div>
  )
}

export default UserPage