import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Login from '../Screens/login/Login'
import Home from '../Screens/home/Home'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/home' element={<Login/>}/>
        {/* <Route path='/home' element={<Home/>}/> */}
        {/* <Route path='/test' element={<Test/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile/:propr' element={<OtherUserScreen/> }/>
        <Route path='/addPost' element={<PostAddPage userdate={user_date} posts={all_posts}/>}/> */}
    </Routes>
  )
}

export default Router