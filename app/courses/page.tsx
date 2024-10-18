import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "@/components/container";

const coursesData = [
  {
    title: "ICT",
    description:
      "Learn the foundational concepts of Information and Communication Technology.",
  },
  {
    title: "Elliot Wave",
    description:
      "Discover the principles of the Elliott Wave Theory for market analysis.",
  },
  {
    title: "Support and Resistance",
    description:
      "Understand key levels in the market for effective trading decisions.",
  },
  {
    title: "Fibonacci Retracement and Extensions",
    description:
      "Master the use of Fibonacci tools for predicting price movements.",
  },
];

const Courses = () => {
  return (
    <>
      <Head>
        <title>Courses - Robinhood Club</title>
        <meta
          name="description"
          content="Explore our trading courses to enhance your skills."
        />
      </Head>
      <section className="py-20 bg-gray-800">
        <div className="mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Available Courses
          </h2>
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coursesData.map((course, index) => (
                <div
                  key={index}
                  className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-400">Image Placeholder</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {course.title}
                    </h3>
                    <p>{course.description}</p>
                  </div>
                  <Link
                    href={`/courses/${course.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    passHref
                  >
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 mt-4">
                      Learn More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Courses;
