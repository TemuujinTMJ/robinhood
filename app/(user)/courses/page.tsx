"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetCourseList } from "@/services/modules/admin/course/getCourseList.service";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Courses = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.FetchUser);
  const { courses, loading } = useAppSelector((state) => state.GetCourseList);
  const router = useRouter()
  useEffect(() => {
    dispatch(GetCourseList({ page_size: 10, page_number: 1 }));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Courses - Robinhood Club</title>
        <meta
          name="description"
          content="Explore our trading courses to enhance your skills."
        />
      </Head>
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Хичээлүүд</h2>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {!loading &&
              courses?.map((course, index) => (
                <div
                  key={index}
                  className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <Image
                      src={course.thumbnail_path}
                      width={400}
                      height={100}
                      alt="tn"
                      className="rounded"
                    />
                    <h3 className="text-xl font-semibold mb-4">
                      {course.name}
                    </h3>
                    <p className="text-xs">{course.description}</p>
                  </div>
                  <button
                    disabled={!course.is_visible || user?.role === 0}
                    className={`${!!course.is_visible ? 'bg-green-600' : 'bg-gray-600'} text-white py-2 px-4 rounded  transition duration-300 mt-4`}
                    onClick={() => router.push(`/courses/${course.id}`)}
                  >
                    {!!course.is_visible ? "Хичээл үзэх" : "Тун удахгүй"}
                  </button>
                </div>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Courses;
