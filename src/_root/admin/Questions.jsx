const Questions = () => {
  return (
    <div className="absolute top-0">
        <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
          <h1 className="">Skill Nova</h1>
        </div>
        <div className="mt-12 flex flex-col ms-10 gap-5">
            <h1>Add Questions</h1>
            <form action="" className="flex flex-col gap-4">
                <div className="flex">
                    <label htmlFor="q1" className="ps-2">Question 1: </label>
                    <textarea name="q1" id="q1" rows={10} cols={100} className="ms-2 ps-4 pt-2 border-2 border-gray-600"></textarea>
                </div>
                <button type="submit" className="w-20 mt-2 ms-20">Add</button>
            </form>
        </div>
    </div>
  )
}

export default Questions