"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetCourse } from "@/services/modules/course/courseGet.service";
import { Lesson } from "@/types/types";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logoAcademy.jpg";
import Image from "next/image";

export default function Course({ params }: { params: { id: number } }) {
  const dispatch = useAppDispatch();
  const [selectedCoure, setSelectedCourse] = useState<Lesson | null>(null);
  const { loadingCourseGet, course } = useAppSelector(
    (state) => state.GetCourse
  );
  useEffect(() => {
    dispatch(GetCourse({ id: params.id })).then((e) => {
      if (e.payload.success) {
        setSelectedCourse(e.payload.course.lessons[0]);
      }
    });
  }, []);

  if (loadingCourseGet) return <>loading..</>;

  return (
    <Container>
      <div className="grid gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="bg-glass backdrop-blur-md p-8 rounded-lg text-center w-full lg:w-80 flex flex-col gap-2">
            <div className="text-xl">
              Хичээлүүд / <span className="text-green-500">{course?.name}</span>
            </div>

            <div className="overflow-scroll max-h-[380px] grid gap-2">
              {course?.lessons.map((lesson) => (
                <div
                  className="bg-glass backdrop-blur-md p-1 rounded-lg text-start pl-4 hover:text-green-500 cursor-pointer"
                  key={lesson.id}
                  onClick={() => setSelectedCourse(lesson)}
                >
                  {lesson.title}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="responsive-iframe relative">
              <iframe
                src={selectedCoure?.link}
                width="640"
                height="480"
                allow="autoplay"
                allowFullScreen
              />
              <Image
                src={Logo}
                width={40}
                height={40}
                className="top-3 right-3 bg-black z-10000 absolute"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="text-center grid gap-8">
          {selectedCoure?.description}
          <div className="flex justify-between">
            <Button className="bg-glass">Өмнөх хичээл</Button>
            <div className="flex gap-2">
              <Button className="bg-glass">Шалгалт өгөх</Button>
              <Button className="bg-green-500">Дараагийн хичээл</Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .responsive-iframe {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* Aspect ratio: 16:9 */
        }
        .responsive-iframe iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Container>
  );
}
