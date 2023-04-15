import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../../components/AppLayout"

const NewPost = (props) => {
  console.log(props)
  return (
    <div>NewPost</div>
  )
}

export default NewPost


NewPost.getLayout = function getLayout(page , pageProps){
  return <AppLayout  {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired (() =>{
  return {
    props : {
      test : "test by rohan new concept ! "
    }
  }
})