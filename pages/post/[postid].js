import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'
import { AppLayout } from '../../components/AppLayout/AppLayout'

const POSTID = () => {
  return (
    <div>POSTID</div>
  )
}

export default POSTID
POSTID.getLayout = function getLayout(page , pageProps){
  return <AppLayout  {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired (() =>{
  return {
    props : {}
  }
})