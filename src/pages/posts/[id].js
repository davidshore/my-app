import { useRouter } from 'next/router'

export default function Post() {

  const router = useRouter();

  const posts = {
    53: 'post 53'
  }

  return (
    <div>{posts[router.query.id]}</div>
  )
}