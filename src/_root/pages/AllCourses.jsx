const AllCourses = () => {
  return (
    <div className="courses">
      <div className="flex flex-col relative">
        <h1 className="mt-10">All Courses</h1>
        <div className="flex flex-col items-center lg:flex-row gap-10 mt-9 absolute left-0 right-0 top-14">
          <div className="border-2">
            <a href="" className="cursor-pointer">
              <img src="/assets/images/html.png" alt="" className="w-[25rem] h-[20rem] lg:w-[13rem] xl:w-[17rem] lg:h-[12rem]"/>
            </a>
          </div>
          <div className="border-2">
            <a href="" className="cursor-pointer">
              <img src="/assets/images/css.png" alt="" className="w-[25rem] h-[20rem] lg:w-[13rem] xl:w-[17rem] lg:h-[12rem]"/>
            </a>
          </div>
          <div className="border-2">
            <a href="" className="cursor-pointer">
              <img src="/assets/images/js.png" alt="" className="w-[25rem] h-[20rem] lg:w-[13rem] xl:w-[17rem] lg:h-[12rem]"/>
            </a>
          </div>
          {/* <h1 className="text-nowrap">Show all</h1> */}
        </div>
        <div className="flex flex-col gap-5 absolute top-[77rem] lg:top-96 left-0 right-24 lg:right-96">
          <h1>Featured</h1>
          <div className="flex gap-2 bg-primary text-white p-2">
            <div>
              <img src="/assets/images/html.png" alt="" className="w-14 h-14"/>
            </div>
            <div className="flex flex-col text-sm">
              <a href="" className="cursor-pointer">
                <h1>HTML Lessons</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </a>
            </div>
          </div>
          <div className="flex gap-2 bg-primary text-white p-2">
            <div>
              <img src="/assets/images/css.png" alt="" className="w-14 h-14"/>
            </div>
            <div className="flex flex-col text-sm">
              <a href="" className="cursor-pointer">
                <h1>CSS Lessons</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </a>
            </div>
          </div>
          <div className="flex gap-2 bg-primary text-white p-2 mb-14">
            <div>
              <img src="/assets/images/js.png" alt="" className="w-14 h-14"/>
            </div>
            <div className="flex flex-col text-sm">
              <a href="" className="cursor-pointer">
                <h1>JS Lessons</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCourses