import { darkMode } from "@/constants"

const Footer = () => {
    return (
        <div className={`px-6 flex flex-col md:flex-row md:justify-between py-5 text-[#636363] text-[14px] ${darkMode}`}>
            <div className="flex flex-col gap-2 mb-2 md:flex-row sm:gap-8">
                <p>Terms Of Service</p>
                <p>Report Abuse</p>
                <p>Privacy & Data Policy</p>
            </div>
            <div>2025 All Rights Reserved © Onesport</div>
        </div>
    )
}

export default Footer