
const Spinner = () => {
    return (
        <div className="w-24 h-24 mx-auto">
            <svg className="pl w-full h-full" viewBox="0 0 240 240">
                <circle
                    className="pl__ring pl__ring--a"
                    cx="120"
                    cy="120"
                    r="105"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 660"
                    strokeDashoffset="-330"
                    strokeLinecap="round"
                ></circle>
                <circle
                    className="pl__ring pl__ring--b"
                    cx="120"
                    cy="120"
                    r="35"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 220"
                    strokeDashoffset="-110"
                    strokeLinecap="round"
                ></circle>
                <circle
                    className="pl__ring pl__ring--c"
                    cx="85"
                    cy="120"
                    r="70"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 440"
                    strokeLinecap="round"
                ></circle>
                <circle
                    className="pl__ring pl__ring--d"
                    cx="155"
                    cy="120"
                    r="70"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 440"
                    strokeLinecap="round"
                ></circle>
            </svg>
        </div>
    )
}

export default Spinner