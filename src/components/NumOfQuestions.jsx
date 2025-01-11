const NumOfQuestions = () => {
  return (
    <div className="numOfQuestions flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
    xl:right-64 top-32 justify-center items-center pt-10 pb-5">
        <h1>Create Quiz</h1>
        <form action='/admin/quizzes/html/questions' className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="numOfQuestions" className="ps-2">Number of questions you want to add: </label>
                <input type="number" name="numOfQuestions" id="numOfQuestions" className="w-24 pt-2 text-black" min="1" max="100"/>
                <button type="submit" className="w-20 mt-8">Create</button>
            </div>
        </form>
    </div>
  )
}

export default NumOfQuestions