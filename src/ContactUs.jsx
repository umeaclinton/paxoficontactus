export default function ContactUs() {
    return (
        <div className="flex flex-col justify-center items-start bg-[#FFF] min-w-screen min-h-screen overflow-hidden">
            <div className="flex py-0 px-20 flex-col justify-center items-start border-b-[1.11px] border-b-[#E2E8F0] bg-[rgba(255,255,255,0.95)] w-full h-20">
                <div className="flex max-w-[1440px] py-0 px-6 justify-between items-center w-full h-16">
                    <div className="flex justify-between items-center w-[117px]">
                        <img
                            src="/Image1.png"
                            className="shrink-0 w-10 h-10 max-w-none"
                            alt="image 1"
                        />
                        <div className="flex items-center gap-2 w-fit">
                            <div className="flex flex-col items-start w-fit">
                                <p className="text-[#0F2D4A] font-inter text-xl font-bold leading-7 w-fit tracking-[-0.0225em]">
                                    PAXOFI
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 w-fit">
                        <div className="flex py-2 px-3 items-center gap-1 rounded-[10px] w-fit">
                            <p className="text-[#45556C] font-inter text-sm font-medium leading-5 w-fit">
                                Products
                            </p>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-50 w-3.5 h-3.5 overflow-hidden relative "
                            >
                                <g opacity="0.5">
                                    <path
                                        d="M3.49829 5.24744L6.99657 8.74571L10.4948 5.24744"
                                        stroke="#45556C"
                                        strokeWidth="1.16609"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="flex py-2 px-3 items-center gap-1 rounded-[10px] w-fit">
                            <p className="text-[#45556C] font-inter text-sm font-medium leading-5 w-fit">
                                Solutions
                            </p>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-50 w-3.5 h-3.5 overflow-hidden relative "
                            >
                                <g opacity="0.5">
                                    <path
                                        d="M3.49829 5.24744L6.99657 8.74571L10.4948 5.24744"
                                        stroke="#45556C"
                                        strokeWidth="1.16609"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="flex py-2 px-3 items-center gap-1 rounded-[10px] w-fit">
                            <p className="text-[#45556C] font-inter text-sm font-medium leading-5 w-fit">
                                Pricing
                            </p>
                        </div>
                        <div className="flex py-2 px-3 items-center gap-1 rounded-[10px] w-fit">
                            <p className="text-[#45556C] font-inter text-sm font-medium leading-5 w-fit">
                                Company
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-fit overflow-hidden">
                        <button className="cursor-pointer text-nowrap flex py-2 px-4 flex-col justify-center items-center rounded-xl bg-[#0F2D4A] w-fit h-10 overflow-hidden">
                            <p className="text-[#FFF] font-inter text-sm font-semibold leading-5 w-fit">
                                Contact us
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <img
                src="/Section.png"
                className="flex py-[60px] px-20 items-center gap-[74px] w-full h-[812px] overflow-hidden max-w-none"
                alt="Section"
            />
            <div className="flex max-w-[1440px] p-20 flex-col justify-center items-center bg-[#EFF6FF] w-full">
                <div className="flex justify-between items-center w-[1150px] overflow-hidden">
                    <div className="flex p-6 flex-col items-start gap-4 shrink-0 rounded-2xl bg-[#FFF] w-[264px]">
                        <div className="flex justify-center items-center rounded-[14px] bg-[#EFF6FF] w-11 h-11">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0 w-5 h-5 overflow-hidden relative "
                            >
                                <g clipPath="url(#clip0_69_105)">
                                    <path
                                        d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2744C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1118 9.32498 15.7083C7.31151 14.4289 5.60443 12.7218 4.32499 10.7083C2.91663 8.53432 2.04019 6.05914 1.76665 3.48331C1.74583 3.25287 1.77321 3.02061 1.84707 2.80133C1.92092 2.58205 2.03963 2.38055 2.19562 2.20966C2.35162 2.03877 2.54149 1.90224 2.75314 1.80875C2.9648 1.71526 3.1936 1.66686 3.42499 1.66665H5.92498C6.32941 1.66267 6.72148 1.80588 7.02812 2.06959C7.33476 2.3333 7.53505 2.69952 7.59165 3.09998C7.69717 3.90003 7.89286 4.68558 8.17499 5.44165C8.2871 5.73992 8.31137 6.06407 8.24491 6.37571C8.17844 6.68735 8.02404 6.9734 7.79998 7.19998L6.74165 8.25831C7.92795 10.3446 9.65536 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.9759 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6913 18.3333 14.1Z"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_69_105">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex flex-col items-start w-full overflow-hidden">
                            <div className="flex flex-col items-start w-full">
                                <p className="text-[#0F172B] font-inter text-lg font-semibold leading-[22.5px] w-fit">
                                    Call Sales
                                </p>
                            </div>
                            <div className="flex pt-1 flex-col items-start w-[214px] h-[27px]">
                                <p className="text-[#62748E] font-inter text-sm font-medium leading-[22.75px] w-fit">
                                    Interested in Paxofi's solutions?
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full h-full">
                            <div className="flex flex-col items-start w-full">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                        +234 901 471 8315
                                    </p>
                                </div>
                                <div className="flex pt-0.5 flex-col items-start w-[214px] h-[18px]">
                                    <p className="text-[#1A4862] font-inter text-xs leading-4 w-fit">
                                        Monday – Friday
                                    </p>
                                </div>
                            </div>
                            <div className="flex pt-2 flex-col items-start shrink-0 w-[214px] h-6">
                                <p className="text-[#1A4862] font-inter text-xs leading-4 w-fit">
                                    8:00 AM – 6:00 PM &#40;WAT&#41;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-6 flex-col items-start gap-4 shrink-0 rounded-2xl bg-[#FFF] w-[264px]">
                        <div className="flex justify-center items-center rounded-[14px] bg-[#EFF6FF] w-11 h-11">
                            <div className="shrink-0 w-5 h-5 overflow-hidden relative">
                                <svg
                                    width="19"
                                    height="15"
                                    viewBox="0 0 19 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[17px] h-[13px] absolute left-0.5 top-[3px] "
                                >
                                    <path
                                        d="M15.8334 0.833313H2.50004C1.57957 0.833313 0.833374 1.57951 0.833374 2.49998V12.5C0.833374 13.4205 1.57957 14.1666 2.50004 14.1666H15.8334C16.7538 14.1666 17.5 13.4205 17.5 12.5V2.49998C17.5 1.57951 16.7538 0.833313 15.8334 0.833313Z"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    width="19"
                                    height="7"
                                    viewBox="0 0 19 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[17px] h-[5px] absolute left-0.5 top-1.5 "
                                >
                                    <path
                                        d="M17.5002 0.833435L10.0252 5.58343C9.76789 5.74462 9.47043 5.83011 9.16683 5.83011C8.86323 5.83011 8.56577 5.74462 8.3085 5.58343L0.833496 0.833435"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="text-[#0F172B] font-inter text-lg font-semibold leading-[22.5px] w-fit">
                                    Email Support
                                </p>
                            </div>
                            <div className="flex pt-1 flex-col items-start w-[214px] h-[27px]">
                                <p className="text-[#62748E] font-inter text-sm font-medium leading-[22.75px] w-fit">
                                    Reach the right team directly.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full h-full">
                            <div className="flex flex-col items-start w-full">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                        hello@paxofi.com
                                    </p>
                                </div>
                                <div className="flex pt-0.5 flex-col items-start w-[214px] h-[18px]">
                                    <p className="text-[#1A4862] font-inter text-xs leading-4 w-fit">
                                        General Enquiries
                                    </p>
                                </div>
                            </div>
                            <div className="flex pt-2 flex-col items-start shrink-0 w-[214px] h-[46px]">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                        support@paxofi.com
                                    </p>
                                </div>
                                <div className="flex pt-0.5 flex-col items-start shrink-0 w-[214px] h-[18px]">
                                    <p className="text-[#1A4862] font-inter text-xs leading-4 w-fit">
                                        Technical Support
                                    </p>
                                </div>
                            </div>
                            <div className="flex pt-2 flex-col items-start shrink-0 w-[214px] h-[46px]">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                        partners@paxofi.com
                                    </p>
                                </div>
                                <div className="flex pt-0.5 flex-col items-start shrink-0 w-[214px] h-[18px]">
                                    <p className="text-[#1A4862] font-inter text-xs leading-4 w-fit">
                                        Partnerships
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-6 flex-col items-start gap-4 shrink-0 rounded-2xl bg-[#FFF] w-[264px] h-[305px]">
                        <div className="flex justify-center items-center shrink-0 rounded-[14px] bg-[#EFF6FF] w-11 h-11">
                            <div className="shrink-0 w-5 h-5 overflow-hidden relative">
                                <svg
                                    width="15"
                                    height="19"
                                    viewBox="0 0 15 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[13px] h-[17px] absolute left-[3px] top-0.5 "
                                >
                                    <path
                                        d="M8.00087 17.3325C9.55087 15.9941 14.1667 11.6608 14.1667 7.49998C14.1667 5.73187 13.4643 4.03618 12.2141 2.78593C10.9638 1.53569 9.26815 0.833313 7.50004 0.833313C5.73193 0.833313 4.03624 1.53569 2.786 2.78593C1.53575 4.03618 0.833374 5.73187 0.833374 7.49998C0.833374 11.6608 5.44921 15.9941 6.99921 17.3325C7.1436 17.4411 7.31938 17.4998 7.50004 17.4998C7.68071 17.4998 7.85648 17.4411 8.00087 17.3325Z"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    width="7"
                                    height="7"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[5px] h-[5px] absolute left-2 top-1.5 "
                                >
                                    <path
                                        d="M3.33337 5.83331C4.71409 5.83331 5.83337 4.71402 5.83337 3.33331C5.83337 1.9526 4.71409 0.833313 3.33337 0.833313C1.95266 0.833313 0.833374 1.9526 0.833374 3.33331C0.833374 4.71402 1.95266 5.83331 3.33337 5.83331Z"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="text-[#0F172B] font-inter text-lg font-semibold leading-[22.5px] w-fit">
                                    Visit Our Office
                                </p>
                            </div>
                            <div className="flex pt-1 flex-col items-start w-[214px] h-[27px]">
                                <p className="text-[#62748E] font-inter text-sm font-medium leading-[22.75px] w-fit">
                                    Paxofi Headquarters
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start shrink-0 w-full h-[46px]">
                            <div className="flex flex-col items-start w-full">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                        Lagos, Nigeria
                                    </p>
                                </div>
                                <div className="flex pt-0.5 flex-col items-start w-[214px] h-[18px]">
                                    <p className="text-[#1A4862] font-inter text-xs leading-4 w-fit">
                                        Supporting businesses across Africa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full h-full">
                            <div className="flex items-center gap-2 w-full h-5">
                                <p className="text-[#0F2D4A] font-inter text-sm font-semibold leading-5 w-fit">
                                    Get Directions
                                </p>
                                <div className="w-3.5 h-3.5 overflow-hidden relative">
                                    <svg
                                        width="10"
                                        height="2"
                                        viewBox="0 0 10 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-2 absolute left-[3px] top-[7px] "
                                    >
                                        <path
                                            d="M0.583008 0.583069H8.74565"
                                            stroke="#0F2D4A"
                                            strokeWidth="1.16609"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <svg
                                        width="6"
                                        height="10"
                                        viewBox="0 0 6 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-1 h-2 absolute left-[7px] top-[3px] "
                                    >
                                        <path
                                            d="M0.583008 0.583069L4.66433 4.66439L0.583008 8.74571"
                                            stroke="#0F2D4A"
                                            strokeWidth="1.16609"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-6 flex-col items-start gap-4 shrink-0 rounded-2xl bg-[#FFF] w-[264px] h-[305px]">
                        <div className="flex justify-center items-center shrink-0 rounded-[14px] bg-[#EFF6FF] w-11 h-11">
                            <div className="shrink-0 w-5 h-5 overflow-hidden relative">
                                <svg
                                    width="2"
                                    height="5"
                                    viewBox="0 0 2 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[3px] absolute left-[7px] top-0.5 "
                                >
                                    <path
                                        d="M0.833252 0.833313V4.16665"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    width="2"
                                    height="5"
                                    viewBox="0 0 2 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[3px] absolute left-[13px] top-0.5 "
                                >
                                    <path
                                        d="M0.833252 0.833313V4.16665"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[15px] h-[15px] absolute left-[3px] top-[3px] "
                                >
                                    <path
                                        d="M14.1666 0.833313H2.49992C1.57944 0.833313 0.833252 1.57951 0.833252 2.49998V14.1666C0.833252 15.0871 1.57944 15.8333 2.49992 15.8333H14.1666C15.0871 15.8333 15.8333 15.0871 15.8333 14.1666V2.49998C15.8333 1.57951 15.0871 0.833313 14.1666 0.833313Z"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    width="17"
                                    height="2"
                                    viewBox="0 0 17 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[15px] absolute left-[3px] top-2 "
                                >
                                    <path
                                        d="M0.833252 0.833313H15.8333"
                                        stroke="#0F2D4A"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="text-[#0F172B] font-inter text-lg font-semibold leading-[22.5px] w-fit">
                                    Talk to a Product Expert
                                </p>
                            </div>
                            <div className="flex pt-1 flex-col items-start w-[214px]">
                                <p className="text-[#62748E] font-inter text-sm leading-[22.75px] w-[214px]">
                                    Need help choosing the right solution?
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start shrink-0 w-full h-8">
                            <div className="flex items-center gap-2 shrink-0 w-full h-5">
                                <p className="text-[#0F2D4A] font-inter text-sm font-semibold leading-5 w-fit">
                                    Book Consultation
                                </p>
                                <div className="w-3.5 h-3.5 overflow-hidden relative">
                                    <svg
                                        width="10"
                                        height="2"
                                        viewBox="0 0 10 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-2 absolute left-[3px] top-[7px] "
                                    >
                                        <path
                                            d="M0.583008 0.583069H8.74565"
                                            stroke="#0F2D4A"
                                            strokeWidth="1.16609"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <svg
                                        width="6"
                                        height="10"
                                        viewBox="0 0 6 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-1 h-2 absolute left-[7px] top-[3px] "
                                    >
                                        <path
                                            d="M0.583008 0.583069L4.66433 4.66439L0.583008 8.74571"
                                            stroke="#0F2D4A"
                                            strokeWidth="1.16609"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start border-t-[1.11px] border-t-[#EFF6FF] bg-[#EFF6FF] w-full">
                <div className="flex max-w-[1440px] pt-16 pr-6 pb-16 pl-6 flex-col justify-center items-center gap-0 w-full h-[477px]">
                    <div className="flex pr-[52px] items-start gap-[189px] w-[1182px] h-[260px]">
                        <div className="flex flex-col items-start w-[360px] h-[260px]">
                            <div className="flex items-center gap-2 w-full">
                                <div className="flex flex-col items-start w-fit">
                                    <div className="flex justify-between items-center w-[117px]">
                                        <img
                                            src="/Image1(1).png"
                                            className="shrink-0 w-10 h-10 max-w-none"
                                            alt="image 1"
                                        />
                                        <div className="flex items-center gap-2 w-fit">
                                            <div className="flex flex-col items-start w-fit">
                                                <p className="text-[#0F2D4A] font-inter text-xl font-bold leading-7 w-fit tracking-[-0.0225em]">
                                                    PAXOFI
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-w-[320px] pt-4 flex-col items-start w-fit">
                                <p className="text-[#0F2D4A] font-inter text-base leading-[22.75px] w-full">
                                    Africa's Digital Infrastructure Platform, empowering
                                    businesses through payments, identity verification,
                                    compliance, APIs, cloud, and document services.
                                </p>
                            </div>
                            <div className="flex pt-6 items-center gap-3 w-[265px] h-[60px]">
                                <div className="flex justify-center items-center shrink-0 rounded-[10px] border-[1.11px] border-[#E2E8F0] w-9 h-9">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="shrink-0 w-[15px] h-[15px] overflow-hidden relative "
                                    >
                                        <path
                                            d="M13.75 2.50001C13.75 2.50001 13.3125 3.81251 12.5 4.62501C13.5 10.875 6.625 15.4375 1.25 11.875C2.625 11.9375 4 11.5 5 10.625C1.875 9.68751 0.3125 6.00001 1.875 3.12501C3.25 4.75001 5.375 5.68751 7.5 5.62501C6.9375 3.00001 10 1.50001 11.875 3.25001C12.5625 3.25001 13.75 2.50001 13.75 2.50001Z"
                                            stroke="#598ED9"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex justify-center items-center shrink-0 rounded-[10px] border-[1.11px] border-[#E2E8F0] w-9 h-9">
                                    <div className="shrink-0 w-[15px] h-[15px] overflow-hidden relative">
                                        <svg
                                            width="9"
                                            height="10"
                                            viewBox="0 0 9 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-2 h-2 absolute left-1.5 top-[5px] "
                                        >
                                            <path
                                                d="M4.375 0.625C5.36956 0.625 6.32339 1.02009 7.02665 1.72335C7.72991 2.42661 8.125 3.38044 8.125 4.375V8.75H5.625V4.375C5.625 4.04348 5.4933 3.72554 5.25888 3.49112C5.02446 3.2567 4.70652 3.125 4.375 3.125C4.04348 3.125 3.72554 3.2567 3.49112 3.49112C3.2567 3.72554 3.125 4.04348 3.125 4.375V8.75H0.625V4.375C0.625 3.38044 1.02009 2.42661 1.72335 1.72335C2.42661 1.02009 3.38044 0.625 4.375 0.625Z"
                                                stroke="#598ED9"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            width="4"
                                            height="9"
                                            viewBox="0 0 4 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[3px] h-2 absolute left-px top-1.5 "
                                        >
                                            <path
                                                d="M3.125 0.625H0.625V8.125H3.125V0.625Z"
                                                stroke="#598ED9"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            width="4"
                                            height="4"
                                            viewBox="0 0 4 4"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[3px] h-[3px] absolute left-px top-px "
                                        >
                                            <path
                                                d="M1.875 3.125C2.56536 3.125 3.125 2.56536 3.125 1.875C3.125 1.18464 2.56536 0.625 1.875 0.625C1.18464 0.625 0.625 1.18464 0.625 1.875C0.625 2.56536 1.18464 3.125 1.875 3.125Z"
                                                stroke="#598ED9"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center shrink-0 rounded-[10px] border-[1.11px] border-[#E2E8F0] w-9 h-9">
                                    <div className="shrink-0 w-[15px] h-[15px] overflow-hidden relative">
                                        <svg
                                            width="12"
                                            height="14"
                                            viewBox="0 0 12 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-2.5 h-[13px] absolute left-0.5 top-px "
                                        >
                                            <path
                                                d="M7.50719 13.125V10.625C7.59414 9.84206 7.36965 9.05633 6.88219 8.4375C8.75719 8.4375 10.6322 7.1875 10.6322 5C10.6822 4.21875 10.4634 3.45 10.0072 2.8125C10.1822 2.09375 10.1822 1.34375 10.0072 0.625C10.0072 0.625 9.38219 0.625 8.13219 1.5625C6.48219 1.25 4.78219 1.25 3.13219 1.5625C1.88219 0.625 1.25719 0.625 1.25719 0.625C1.06969 1.34375 1.06969 2.09375 1.25719 2.8125C0.802116 3.44743 0.58124 4.22049 0.632195 5C0.632195 7.1875 2.50719 8.4375 4.38219 8.4375C4.13844 8.74375 3.95719 9.09375 3.85094 9.46875C3.74469 9.84375 3.71344 10.2375 3.75719 10.625V13.125"
                                                stroke="#598ED9"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            width="6"
                                            height="3"
                                            viewBox="0 0 6 3"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-1 h-0.5 absolute left-px top-2.5 "
                                        >
                                            <path
                                                d="M5 1.875C2.18125 3.125 1.875 0.625 0.625 0.625"
                                                stroke="#598ED9"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-[581px]">
                            <div className="flex flex-col items-start w-full h-[260px]">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#0F2D4A] font-inter text-base font-semibold leading-4 w-fit tracking-[0.075em]">
                                        Products
                                    </p>
                                </div>
                                <div className="flex pt-4 flex-col items-start w-[133px]">
                                    <div className="flex flex-col items-start w-full">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Paxofi Pay
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Paxofi Verify
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Paxofi Business
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Paxofi API
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Paxofi Cloud
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Paxofi Agent
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full h-[260px]">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#0F2D4A] font-inter text-base font-semibold leading-4 w-fit tracking-[0.075em]">
                                        Solutions
                                    </p>
                                </div>
                                <div className="flex pt-4 flex-col items-start shrink-0 w-[133px] h-[156px]">
                                    <div className="flex flex-col items-start w-full">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Startups
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            SMEs
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Enterprises
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Developers
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Government
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full h-[260px]">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#0F2D4A] font-inter text-base font-semibold leading-4 w-fit tracking-[0.075em]">
                                        Company
                                    </p>
                                </div>
                                <div className="flex pt-4 flex-col items-start shrink-0 w-[133px] h-[126px]">
                                    <div className="flex flex-col items-start w-full">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            About Us
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Careers
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Blog
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Contact Us
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full h-[260px]">
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-[#0F2D4A] font-inter text-base font-semibold leading-4 w-fit tracking-[0.075em]">
                                        Legal
                                    </p>
                                </div>
                                <div className="flex pt-4 flex-col items-start shrink-0 w-[133px] h-[126px]">
                                    <div className="flex flex-col items-start w-full">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Privacy Policy
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Terms of Service
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Security
                                        </p>
                                    </div>
                                    <div className="flex pt-2.5 flex-col items-start shrink-0 w-[133px] h-[30px]">
                                        <p className="text-[#0F2D4A] font-inter text-base leading-5 w-fit">
                                            Compliance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-12 flex-col items-center w-[1392px]">
                        <div className="flex pt-6 justify-between items-center border-t-[1.11px] border-t-[#E2E8F0] w-[1129px]">
                            <div className="flex flex-col items-start w-fit">
                                <p className="text-[#0F2D4A] font-inter text-xs leading-4 w-fit">
                                    © 2026 Paxofi. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-t-[1.11px] border-t-[#E2E8F0] border-b-[1.11px] border-b-[#E2E8F0] bg-[#FFF] w-full">
                <div className="flex max-w-[1440px] py-[43px] px-20 flex-col items-start gap-2.5 w-full overflow-hidden">
                    <div className="flex flex-col items-center gap-[41px] w-[1148px]">
                        <div className="flex flex-col items-start w-[665px] h-[104px] overflow-hidden">
                            <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center w-full">
                                <p className="text-[#0F172B] font-inter text-4xl font-semibold leading-[43.2px] w-fit tracking-[-0.025em]">
                                    Tell Us About Your Issues
                                </p>
                            </button>
                            <button className="cursor-pointer text-nowrap flex pt-3 flex-col justify-center items-center w-[665px]">
                                <p className="text-[#62748E] font-inter text-base leading-6 w-[665px] text-center">
                                    Complete the form below and our team will connect you with the
                                    appropriate department.
                                </p>
                            </button>
                        </div>
                        <div className="flex items-center gap-[83px] w-full">
                            <div className="flex flex-col items-start w-[665px] h-[605px]">
                                <div className="flex pt-10 flex-col items-start w-[665px]">
                                    <div className="w-full h-[429px] relative">
                                        <div className="flex flex-col items-start gap-1.5 w-[322px] absolute left-0 top-0">
                                            <div className="flex items-center gap-1.5 w-full">
                                                <p className="text-[#314158] font-inter text-sm font-medium leading-5 w-fit">
                                                    Full Name
                                                </p>
                                                <div className="flex flex-col items-start w-fit">
                                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                                        *
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex py-3 px-4 flex-col justify-center items-start rounded-[14px] border-[1.11px] border-[#E2E8F0] bg-[#F8FAFC] w-[322px] h-[46px] overflow-hidden">
                                                <p className="text-[#90A1B9] font-inter text-sm w-full">
                                                    Your full name
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-1.5 w-[322px] absolute left-[342px] top-0">
                                            <div className="flex items-center gap-1.5 w-full">
                                                <p className="text-[#314158] font-inter text-sm font-medium leading-5 w-fit">
                                                    Business Email
                                                </p>
                                                <div className="flex flex-col items-start w-fit">
                                                    <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                                        *
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex py-3 px-4 flex-col justify-center items-start rounded-[14px] border-[1.11px] border-[#E2E8F0] bg-[#F8FAFC] w-[322px] h-[46px] overflow-hidden">
                                                <p className="text-[#90A1B9] font-inter text-sm w-full">
                                                    you@company.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-1.5 w-[322px] absolute left-0 top-[92px]">
                                            <div className="flex items-center gap-1.5 w-full">
                                                <p className="text-[#314158] font-inter text-sm font-medium leading-5 w-fit">
                                                    Company Name
                                                </p>
                                                <div className="flex flex-col items-start w-fit">
                                                    <p className="text-[#90A1B9] font-inter text-xs leading-4 w-fit">
                                                        &#40;Optional&#41;
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex py-3 px-4 flex-col justify-center items-start rounded-[14px] border-[1.11px] border-[#E2E8F0] bg-[#F8FAFC] w-[322px] h-[46px] overflow-hidden">
                                                <p className="text-[#90A1B9] font-inter text-sm w-full">
                                                    Your company name
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-1.5 w-[322px] absolute left-[342px] top-[92px]">
                                            <div className="flex items-center gap-1.5 w-full">
                                                <p className="text-[#314158] font-inter text-sm font-medium leading-5 w-fit">
                                                    Phone Number
                                                </p>
                                            </div>
                                            <div className="flex py-3 px-4 flex-col justify-center items-start rounded-[14px] border-[1.11px] border-[#E2E8F0] bg-[#F8FAFC] w-[322px] h-[46px] overflow-hidden">
                                                <p className="text-[#90A1B9] font-inter text-sm w-full">
                                                    +234 000 000 0000
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start w-[665px] h-[72px] absolute left-0 top-[184px]">
                                            <div className="flex flex-col items-start gap-1.5 w-full">
                                                <div className="flex items-center gap-1.5 w-full">
                                                    <p className="text-[#314158] font-inter text-sm font-medium leading-5 w-fit">
                                                        Inquiry Type
                                                    </p>
                                                    <div className="flex flex-col items-start w-fit">
                                                        <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                                            *
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-full h-[46px] relative">
                                                    <div className="rounded-[14px] border-[1.11px] border-[#E2E8F0] bg-[#F8FAFC] w-[665px] h-[46px] absolute left-0 top-0"></div>
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 15 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-[15px] h-[15px] absolute left-[634px] top-4 overflow-hidden "
                                                    >
                                                        <path
                                                            d="M3.75 5.625L7.5 9.375L11.25 5.625"
                                                            stroke="#90A1B9"
                                                            strokeWidth="1.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start w-[665px] h-[152px] absolute left-0 top-[277px]">
                                            <div className="flex flex-col items-start gap-1.5 w-full">
                                                <div className="flex items-center gap-1.5 w-full">
                                                    <p className="text-[#314158] font-inter text-sm font-medium leading-5 w-fit">
                                                        Message
                                                    </p>
                                                    <div className="flex flex-col items-start w-fit">
                                                        <p className="text-[#1E6FA8] font-inter text-sm font-medium leading-5 w-fit">
                                                            *
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4 flex-col items-start rounded-[14px] border-[1.11px] border-[#E2E8F0] bg-[#F8FAFC] w-[665px] h-[126px] overflow-hidden">
                                                    <p className="text-[#90A1B9] font-inter text-sm leading-5 w-full">
                                                        Tell us more about your project, goals, or
                                                        questions...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex pt-8 flex-col items-start w-[665px] h-28">
                                        <div className="flex pb-4 items-center gap-3 w-fit overflow-hidden">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 relative "
                                            >
                                                <path
                                                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                    stroke="#141B34"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                            <p className="text-[#0F2D4A] font-inter text-sm leading-5 w-fit">
                                                I agree to receive communications from paxofi.
                                            </p>
                                        </div>
                                        <div className="flex pr-[477px] items-center shrink-0 w-full h-12">
                                            <div className="flex py-3.5 px-8 items-center gap-2 rounded-[14px] bg-[#0F2D4A] w-fit h-12">
                                                <p className="text-[#FFF] font-inter text-sm font-semibold leading-5 w-fit">
                                                    Contact Paxofi
                                                </p>
                                                <div className="w-4 h-4 overflow-hidden relative">
                                                    <svg
                                                        width="11"
                                                        height="2"
                                                        viewBox="0 0 11 2"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-[9px] absolute left-[3px] top-2 "
                                                    >
                                                        <path
                                                            d="M0.66626 0.666229H9.99353"
                                                            stroke="white"
                                                            strokeWidth="1.33247"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <svg
                                                        width="6"
                                                        height="11"
                                                        viewBox="0 0 6 11"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-[5px] h-[9px] absolute left-2 top-[3px] "
                                                    >
                                                        <path
                                                            d="M0.66626 0.666229L5.32989 5.32986L0.66626 9.9935"
                                                            stroke="white"
                                                            strokeWidth="1.33247"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex pt-4 items-center gap-2 shrink-0 w-[665px] h-8">
                                            <div className="shrink-0 w-3 h-3 overflow-hidden relative">
                                                <svg
                                                    width="10"
                                                    height="7"
                                                    viewBox="0 0 10 7"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[9px] h-[5px] absolute left-px top-[5px] "
                                                >
                                                    <path
                                                        d="M8.49755 0.499847H1.49959C0.947463 0.499847 0.499878 0.947432 0.499878 1.49956V4.99854C0.499878 5.55066 0.947463 5.99824 1.49959 5.99824H8.49755C9.04967 5.99824 9.49725 5.55066 9.49725 4.99854V1.49956C9.49725 0.947432 9.04967 0.499847 8.49755 0.499847Z"
                                                        stroke="#90A1B9"
                                                        strokeWidth="0.999708"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <svg
                                                    width="6"
                                                    height="6"
                                                    viewBox="0 0 6 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[5px] h-1 absolute left-[3px] top-px "
                                                >
                                                    <path
                                                        d="M0.499878 4.99854V2.99912C0.499878 2.33627 0.763193 1.70057 1.2319 1.23187C1.7006 0.763163 2.3363 0.499847 2.99915 0.499847C3.662 0.499847 4.2977 0.763163 4.7664 1.23187C5.2351 1.70057 5.49842 2.33627 5.49842 2.99912V4.99854"
                                                        stroke="#90A1B9"
                                                        strokeWidth="0.999708"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-[#90A1B9] font-inter text-xs leading-4 w-fit">
                                                Your information is securely encrypted and handled in
                                                accordance with our
                                            </p>
                                            <div className="flex flex-col items-start w-fit">
                                                <p className="text-[#0F2D4A] font-inter text-xs leading-4 w-fit">
                                                    Privacy &amp; Policy
                                                </p>
                                            </div>
                                            <p className="text-[#90A1B9] font-inter text-xs leading-4 w-fit">
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-[400px] h-[512px]">
                                <div className="shrink-0 rounded-2xl border-[1.11px] border-[#E2E8F0] bg-[#EFF6FF] w-full h-56 overflow-hidden relative">
                                    <div className="opacity-40 bg-[radial-gradient(57.25%102.68%at50%50%,#DBEAFE0.25%,rgba(0,0,0,0.00)0.25%)] w-[398px] h-[222px] absolute left-px top-px"></div>
                                    <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-2 w-[398px] h-[222px] absolute left-px top-px">
                                        <div className="flex justify-center items-center shrink-0 rounded-full bg-[#0F2D4A] shadow-[04px6px-1pxrgba(0,0,0,0.10),02px4px-2pxrgba(0,0,0,0.10)] w-10 h-10">
                                            <div className="shrink-0 w-[18px] h-[18px] overflow-hidden relative">
                                                <svg
                                                    width="14"
                                                    height="17"
                                                    viewBox="0 0 14 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3 h-[15px] absolute left-[3px] top-px "
                                                >
                                                    <path
                                                        d="M7.19528 15.5872C8.5892 14.3836 12.7402 10.4866 12.7402 6.74479C12.7402 5.15472 12.1086 3.62977 10.9842 2.50542C9.85989 1.38107 8.33495 0.74942 6.74488 0.74942C5.15481 0.74942 3.62986 1.38107 2.50551 2.50542C1.38116 3.62977 0.749512 5.15472 0.749512 6.74479C0.749512 10.4866 4.90055 14.3836 6.29448 15.5872C6.42433 15.6848 6.58241 15.7376 6.74488 15.7376C6.90735 15.7376 7.06542 15.6848 7.19528 15.5872Z"
                                                        stroke="white"
                                                        strokeWidth="1.49884"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <svg
                                                    width="6"
                                                    height="6"
                                                    viewBox="0 0 6 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-1 h-1 absolute left-[7px] top-[5px] "
                                                >
                                                    <path
                                                        d="M2.99777 5.24594C4.23946 5.24594 5.24604 4.23936 5.24604 2.99768C5.24604 1.756 4.23946 0.74942 2.99777 0.74942C1.75609 0.74942 0.749512 1.756 0.749512 2.99768C0.749512 4.23936 1.75609 5.24594 2.99777 5.24594Z"
                                                        stroke="white"
                                                        strokeWidth="1.49884"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-[#0F2D4A] font-inter text-sm font-medium leading-5 w-fit">
                                            Lagos, Nigeria
                                        </p>
                                    </button>
                                    <img
                                        src="/MapMakerLagosNigeriaStandard.png"
                                        className="w-[399px] h-[235px] absolute left-px top-px max-w-none"
                                        alt="🌎 Map Maker: lagos, Nigeria. (Standard)"
                                    />
                                </div>
                                <div className="flex pt-5 flex-col items-start w-full">
                                    <div className="flex p-6 flex-col items-start rounded-2xl border-[1.11px] border-[#E2E8F0] bg-[#FFF] w-full">
                                        <div className="flex flex-col items-start w-[350px]">
                                            <p className="text-[#0F172B] font-inter text-lg font-semibold leading-[27px] w-fit">
                                                Our Location
                                            </p>
                                        </div>
                                        <div className="flex py-4 px-0 flex-col items-start w-[350px] h-[148px]">
                                            <div className="flex items-start gap-3 w-full">
                                                <div className="flex pt-0.5 items-start w-fit">
                                                    <div className="w-[15px] h-[15px] overflow-hidden relative">
                                                        <svg
                                                            width="12"
                                                            height="14"
                                                            viewBox="0 0 12 14"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-2.5 h-3 absolute left-[3px] top-px "
                                                        >
                                                            <path
                                                                d="M6.00062 12.9994C7.16313 11.9956 10.625 8.74562 10.625 5.625C10.625 4.29892 10.0982 3.02715 9.16053 2.08947C8.22285 1.15178 6.95108 0.625 5.625 0.625C4.29892 0.625 3.02715 1.15178 2.08947 2.08947C1.15178 3.02715 0.625 4.29892 0.625 5.625C0.625 8.74562 4.08688 11.9956 5.24938 12.9994C5.35767 13.0808 5.4895 13.1248 5.625 13.1248C5.7605 13.1248 5.89233 13.0808 6.00062 12.9994Z"
                                                                stroke="#0F2D4A"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <svg
                                                            width="5"
                                                            height="5"
                                                            viewBox="0 0 5 5"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-1 h-1 absolute left-1.5 top-1 "
                                                        >
                                                            <path
                                                                d="M2.5 4.375C3.53553 4.375 4.375 3.53553 4.375 2.5C4.375 1.46447 3.53553 0.625 2.5 0.625C1.46447 0.625 0.625 1.46447 0.625 2.5C0.625 3.53553 1.46447 4.375 2.5 4.375Z"
                                                                stroke="#0F2D4A"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start w-[219px]">
                                                    <div className="flex flex-col items-start w-full">
                                                        <p className="text-[#1D293D] font-inter text-sm font-medium leading-5 w-fit">
                                                            Paxofi Headquarters
                                                        </p>
                                                    </div>
                                                    <div className="flex pt-0.5 flex-col items-start w-[219px] h-[42px]">
                                                        <p className="text-[#62748E] font-inter text-sm leading-5 w-fit">
                                                            123 Freedom Way, Victoria Island Lagos, Nigeria
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex pt-3 items-start gap-3 shrink-0 w-[350px] h-[54px]">
                                                <div className="flex pt-0.5 items-start w-fit">
                                                    <div className="w-[15px] h-[15px] overflow-hidden relative">
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-[13px] h-[13px] absolute left-px top-px "
                                                        >
                                                            <path
                                                                d="M6.875 13.125C10.3268 13.125 13.125 10.3268 13.125 6.875C13.125 3.42322 10.3268 0.625 6.875 0.625C3.42322 0.625 0.625 3.42322 0.625 6.875C0.625 10.3268 3.42322 13.125 6.875 13.125Z"
                                                                stroke="#0F2D4A"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <svg
                                                            width="4"
                                                            height="7"
                                                            viewBox="0 0 4 7"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-[3px] h-[5px] absolute left-2 top-1 "
                                                        >
                                                            <path
                                                                d="M0.625 0.625V4.375L3.125 5.625"
                                                                stroke="#0F2D4A"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start shrink-0 w-[279px]">
                                                    <div className="flex flex-col items-start w-full">
                                                        <p className="text-[#1D293D] font-inter text-sm font-medium leading-5 w-fit">
                                                            Business Hours
                                                        </p>
                                                    </div>
                                                    <div className="flex pt-0.5 flex-col items-start w-[279px] h-[22px]">
                                                        <p className="text-[#62748E] font-inter text-sm leading-5 w-fit">
                                                            Monday – Friday: 8:00 AM – 6:00 PM WAT
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center w-full h-[42px] overflow-hidden">
                                            <button className="cursor-pointer text-nowrap flex py-2.5 px-4 justify-center items-center gap-2 rounded-xl border-[1.11px] border-[#0F2D4A] w-[350px] h-[42px]">
                                                <p className="text-[#0F2D4A] font-inter text-sm font-semibold leading-5 w-fit">
                                                    Get Directions
                                                </p>
                                                <div className="shrink-0 w-3.5 h-3.5 overflow-hidden relative">
                                                    <svg
                                                        width="5"
                                                        height="5"
                                                        viewBox="0 0 5 5"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-[3px] h-[3px] absolute left-[9px] top-0.5 "
                                                    >
                                                        <path
                                                            d="M0.583008 0.583046H4.08128V4.08132"
                                                            stroke="#0F2D4A"
                                                            strokeWidth="1.16609"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <svg
                                                        width="8"
                                                        height="8"
                                                        viewBox="0 0 8 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-1.5 h-1.5 absolute left-1.5 top-0.5 "
                                                    >
                                                        <path
                                                            d="M0.583008 6.99655L6.99651 0.583046"
                                                            stroke="#0F2D4A"
                                                            strokeWidth="1.16609"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <svg
                                                        width="10"
                                                        height="10"
                                                        viewBox="0 0 10 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-[9px] h-[9px] absolute left-0.5 top-[3px] "
                                                    >
                                                        <path
                                                            d="M9.3287 4.66437V8.16264C9.3287 8.47191 9.20584 8.76851 8.98715 8.98719C8.76847 9.20588 8.47187 9.32873 8.1626 9.32873H1.7491C1.43983 9.32873 1.14323 9.20588 0.924548 8.98719C0.705863 8.76851 0.583008 8.47191 0.583008 8.16264V1.74914C0.583008 1.43987 0.705863 1.14327 0.924548 0.924586C1.14323 0.705902 1.43983 0.583046 1.7491 0.583046H5.24737"
                                                            stroke="#0F2D4A"
                                                            strokeWidth="1.16609"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}