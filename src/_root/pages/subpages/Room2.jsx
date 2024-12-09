const Room2 = () => {
  return (
    <div className="first-room mt-14 md:mt-0">
        <h5 className="pt-10">JS Room</h5>
        <div>
            <div>
                <form action="" method="post" className="flex flex-col relative">
                    <label htmlFor="question" className="absolute top-5 left-7">Ask Question</label>
                    <textarea name="ask" id="question" className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 bg-[#F8FAFC] border-2 border-indigo-200" rows={7}></textarea>
                    <button type="submit" className="absolute top-56 right-24 md:right-40 lg:right-80 xl:right-96">Ask</button>
                </form>
            </div>
            {/* Answer is hidden */}
            {/* <div className="flex flex-col relative"> */}
            <div className="hidden relative">
                <h5 className="absolute top-5 left-7">Answer</h5>
                <p className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 bg-slate-400 h-28">HTML is</p>
            </div>
            <div className="pt-80 h-screen relative">
                <h5 className="ps-7">Recently asked questions</h5>
                <div className="absolute left-7 right-24 lg:right-64 xl:right-80 mt-3 bg-[#000047] text-white">
                    <div className="h-20 border-s-2 border-gray-400 ms-8">
                        <div className="flex gap-2 mt-4 ms-4">
                            <div className="w-10 h-10 rounded-full bg-green-900"></div>
                            <h1 className="pt-3.5">B</h1>
                        </div>
                        <p className="ps-4 pt-2">What is JS?</p>
                    </div>
                    <div className="h-12 border-s-2 border-gray-400 ms-8 mt-7 mb-5">
                        <p className="ps-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Room2