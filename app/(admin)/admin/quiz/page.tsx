'use client'
import { useAppDispatch } from '@/services/hooks';
import { GetCourseList } from '@/services/modules/admin/course/getCourseList.service';
import React, { useEffect } from 'react'

export default function Quiz() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetCourseList());
  }, []);
  return (
    <div>
      Quiz
    </div>
  )
}
