import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params = useParams()
  console.log(params);

  return (
    <div className='text-white font-semibold text-xl'>
       {params.courseId} CourseDetail
      </div>
  )
}

export default CourseDetail