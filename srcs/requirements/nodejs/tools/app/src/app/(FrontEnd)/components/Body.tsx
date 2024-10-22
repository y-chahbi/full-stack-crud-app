import ImageIcon from '../data/imageIcon.svg'









const Body = () => {
    return (
        <div className="MainSection my-20 w-full flex justify-center flex-col">
            <div className="Tls flex flex-col">
                <div className="BigTl flex text-2xl justify-center text-[var(--secondary-color)] font-bold py-2">Upload your images</div>
                <div className="SmallTl flex justify-center">i'ts free, forever.</div>
            </div>
            <div className="ImageUploader flex justify-center my-20">
                <input className="hidden" id="fileUpload" type="file"/>
                <label htmlFor="fileUpload" className="border-dashed border-2 border-[#68889a] w-3/4 flex
                    justify-center bg-[var(--tertiary-color)] items-center flex-col py-10">
                    <img className="size-32 mb-2" src={ImageIcon.src} alt=""/>
                    <div className="Instractions w-full text-center flex justify-center font-semibold text-[var(--buttons-color)]">
                        Drop your image here or  <p className="text-[var(--secondary-color)]">&nbsp; browse</p>
                    </div>
                    <div className="supports text-[var(--buttons-color)] text-sm opacity-50">
                        supports JPG, JPEG, PNG & GIF
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Body;