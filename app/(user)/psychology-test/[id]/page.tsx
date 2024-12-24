import React from "react";
import QuizRender from "./Quiz";

export default function Quiz({ params }: { params: { id: number } }) {
  return <QuizRender id={params.id} />;
}
