import { useState } from "react";
import NumOfQuestions from "../../components/NumOfQuestions";

const Quizzes = () => {
    const [isVisible, setIsVisible] = useState(false);
    const quiz = () => {
        setIsVisible(!isVisible);
        const quizzes = document.querySelector('.quizzes');
        quizzes.style.pointerEvents = "none";
        quizzes.style.filter = "blur(3px)";
    }
  return (
    <div className="relative">
        <div className="quizzes absolute top-0">
            <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
            <h1 className="">Skill Nova</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-20 ms-20 me-20">
            <div className="h-52 bg-amber-200 cursor-pointer" onClick={quiz}>
                <h1>HTML</h1>
            </div>
            <div className="h-52 bg-amber-200 cursor-pointer" onClick={quiz}>
                <h1>CSS</h1>
            </div>
            <div className="h-52 bg-amber-200 cursor-pointer" onClick={quiz}>
                <h1>JS</h1>
            </div>
            </div>
        </div>
        {isVisible && (
            <NumOfQuestions/>
        )}
    </div>
  )
}

export default Quizzes