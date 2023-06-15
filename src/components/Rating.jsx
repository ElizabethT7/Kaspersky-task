function Rating() {
    return (
      <div className="text-lgc font-light text-grey-extra-light relative z-50 before:content-['★★★★★'] before:block">
        <div className="w-[90%] h-full absolute top-0 left-0 overflow-hidden
                        before:content-['★★★★★'] before:w-full before:h-full 
                        before:absolute before:top-0 before:left-0 text-yellow-medium">         
        </div>
        <div className="w-full h-full flex absolute top-0 left-0">
        </div>
      </div>
    )
  }
    
export default Rating;