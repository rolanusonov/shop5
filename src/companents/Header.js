import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import BurgerMenu from "../burger-menu/BurgerMenu";



const Header = () => {
    const [searchInput,setSearchInput] = useState("")
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setSearchInput(e.target.value)
    }
    const handleSearch = () =>{
        if (searchInput.trim()) {
            navigate(`/search-results/${searchInput}`)
        }
    }
    const keySearch = (e) =>{
        if (e.key === "Enter"){
            handleSearch()
        }
    }
        const {basket} = useSelector((store) => store)
    return (
        <div className="container " style={{  width: "100%", top: "0", left: '0', margin: "auto", paddingBottom: "50px"}}>
            <nav className=" px-2 header sm:px-4 py-2.5 rounded " style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>
                <div className="header container flex flex-wrap justify-between items-center mx-auto" >

                   <Link className="text-3xl my-10 header-log"
                   style={{
                       fontFamily: 'Inter',
                       fontWeight: "700",
                       fontSize: "20px",
                       lineHeight:" 24px",
                       color: "#FFFFFF",
                   }}


                         to="/"
                   >MOTION SHOP</Link>
                    <div className=" w-96">
                        <ul className="w-96 md:mt-0 md:text-sm md:font-medium">
                            <div className="relative  input overflow-x-auto shadow-md sm:rounded-lg set w-1/3 ">
                                <div className="p-4 set input ">
                                     <div className="relative mt-1 ">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl- pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                 viewBox="-4 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                      clipRule="evenodd"> </path>
                                            </svg>
                                        </div>
                                        <input type="text" id="table-search"
                                               className="  border-white-300 text-black-100 text-xl div w-full    rounded-xl focus:ring-blue-500 focus:border-blue-500 block   pl-10 p-2  dark:bg-white-700 dark:border-white-600 dark:placeholder:text-black-50 placeholder:outline-teal-50 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Я ищу . . .  "
                                               onChange={(e) => handleChange(e)}
                                               onKeyDown={(e) => keySearch(e)}
                                        />
                                    </div>
                                </div>

                            </div>
                        </ul>
                    </div>
                    <div className="hidden  w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex   flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <li>
                                <svg width="25" height="27" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="shotin" fillRule="evenodd" clipRule="evenodd" d="M17.7867 0.0304142C16.3154 0.300285 15.1824 1.27379 14.7131 2.67122C14.4353 3.49843 14.465 4.51957 14.79 5.31965C15.1548 6.21732 15.9207 7.01887 16.7905 7.41324C17.3628 7.67271 17.8795 7.76779 18.5524 7.7374C19.2383 7.70647 19.577 7.62423 20.1249 7.35563C20.8757 6.98755 21.4911 6.36376 21.8781 5.57858C22.1923 4.94101 22.264 4.62335 22.2643 3.86837C22.2644 3.35213 22.2436 3.16044 22.1528 2.84503C21.7744 1.52958 20.7484 0.497399 19.455 0.131023C19.0462 0.0152177 18.1607 -0.0381897 17.7867 0.0304142ZM19.4121 0.8971C20.3561 1.22248 21.0824 1.95186 21.3977 2.89111C21.5122 3.23242 21.5289 3.35951 21.5288 3.8928C21.5287 4.42922 21.513 4.54722 21.3999 4.862C21.2146 5.3778 20.9944 5.72395 20.6021 6.11593C20.0106 6.70698 19.2424 7.02004 18.3838 7.02004C16.6632 7.02004 15.2541 5.60106 15.2541 3.86837C15.2541 1.71668 17.3808 0.19694 19.4121 0.8971ZM17.9994 1.7351C17.6797 1.8491 17.4288 2.08071 17.2764 2.40248C17.0511 2.87816 17.1604 3.25758 17.5227 3.25758C17.7196 3.25758 17.8927 3.07669 17.8927 2.87098C17.8927 2.59333 18.2158 2.34531 18.5065 2.39984C18.6014 2.41762 18.7205 2.49194 18.7937 2.57892C19.0691 2.90621 18.8745 3.38013 18.4407 3.43828C18.2948 3.45787 18.2011 3.50478 18.1316 3.59322C18.0411 3.70815 18.0333 3.77607 18.0477 4.31786C18.0653 4.97527 18.0916 5.03933 18.3665 5.0943C18.492 5.11941 18.5453 5.10143 18.6469 4.99989C18.7592 4.88751 18.7722 4.8364 18.7722 4.50682V4.13912L18.9555 4.04452C19.1957 3.92051 19.4814 3.62088 19.5761 3.39352C19.6798 3.14461 19.6719 2.64694 19.5604 2.4014C19.2932 1.81333 18.6044 1.51932 17.9994 1.7351ZM8.596 2.40306C7.92223 2.53103 7.24484 2.80716 6.70304 3.17471C6.41851 3.36772 5.73722 4.0495 5.54308 4.3355C4.35336 6.08808 4.45559 8.35855 5.7981 9.99952C6.46435 10.8139 7.52165 11.4253 8.58965 11.6139C9.1441 11.7118 10.1441 11.6544 10.6854 11.4936C12.211 11.0404 13.3941 9.85601 13.8705 8.305C13.9918 7.90984 14.0027 7.8061 14.0053 7.02004C14.0077 6.26647 13.9946 6.11852 13.8951 5.77403C13.4157 4.11567 12.0927 2.85231 10.4166 2.45222C9.9477 2.34027 9.05366 2.31613 8.596 2.40306ZM9.97687 3.11431C11.2442 3.31969 12.3124 4.09925 12.8847 5.23654C13.1873 5.83809 13.2997 6.31348 13.2992 6.99121C13.2986 7.9501 13.0083 8.79319 12.4428 9.47888C11.6552 10.4337 10.6048 10.928 9.36169 10.9288C8.24922 10.9294 7.32458 10.5331 6.55416 9.72535C6.16878 9.32125 6.07696 9.19323 5.85415 8.74926C4.8053 6.65943 5.85268 4.08053 8.06887 3.29618C8.66925 3.08368 9.37346 3.01654 9.97687 3.11431ZM9.08434 4.62951C8.49412 4.77029 8.08758 5.22183 8.03584 5.79416C8.00764 6.10542 8.09364 6.25934 8.32652 6.31441C8.43324 6.33967 8.48899 6.31661 8.60749 6.19811C8.69695 6.10865 8.7553 5.99963 8.7553 5.92194C8.7553 5.32156 9.62868 5.12024 9.90607 5.65671C9.99266 5.82412 9.99622 6.07493 9.91438 6.23677C9.83112 6.40129 9.55323 6.58027 9.38109 6.58027C9.29592 6.58027 9.19169 6.62806 9.11957 6.70023C9.0044 6.81535 8.99961 6.8458 8.99961 7.45981C8.99961 8.07382 9.0044 8.10427 9.11957 8.21939C9.18554 8.28535 9.29646 8.33935 9.36609 8.33935C9.43572 8.33935 9.54664 8.28535 9.6126 8.21939C9.72122 8.11081 9.73256 8.06005 9.73256 7.68258V7.26568L9.89821 7.19649C10.1528 7.09006 10.4686 6.77758 10.5948 6.50698C10.8063 6.05382 10.7212 5.46307 10.3883 5.07421C10.0906 4.72636 9.50935 4.52817 9.08434 4.62951ZM18.1406 5.6829C18.0247 5.83018 18.0172 5.89199 18.0945 6.06159C18.2556 6.41516 18.7722 6.27991 18.7722 5.88417C18.7722 5.57403 18.3356 5.43492 18.1406 5.6829ZM3.56027 8.70225C2.51875 9.33044 1.63794 10.3931 1.18068 11.5732C1.12532 11.7161 1.0231 12.0529 0.953515 12.3217C0.832774 12.7882 0.825396 12.8933 0.790263 14.6427C0.751222 16.5853 0.742964 16.6579 0.475585 17.4035C0.326113 17.8202 0.319809 18.0743 0.450371 18.4232C0.612402 18.8563 0.82564 19.0093 2.27883 19.7353C2.99218 20.0917 3.57561 20.3944 3.57536 20.4081C3.57512 20.4218 3.01994 20.683 2.34157 20.9885C1.6632 21.294 1.00292 21.6102 0.87421 21.6911C0.584305 21.8734 0.346 22.1593 0.168969 22.5375C0.0374292 22.8184 0.0327871 22.8566 0.0166623 23.7902L0 24.753L0.124357 24.8774C0.281549 25.0346 0.467376 25.0362 0.621783 24.8817C0.739641 24.7639 0.741742 24.7475 0.741742 23.9376C0.741742 22.5743 0.795345 22.4979 2.2005 21.8584L3.14332 21.4292L4.66662 22.1527L6.18998 22.8761H6.62975C7.12508 22.8761 6.89947 22.9631 9.09441 21.9263L10.142 21.4314L11.0383 21.8362C11.5313 22.0588 12.0116 22.3036 12.1057 22.3802C12.1998 22.4568 12.331 22.6265 12.3973 22.7573C12.5108 22.9814 12.5178 23.0412 12.5178 23.7997C12.5178 24.2423 12.5406 24.6645 12.5685 24.738C12.6737 25.0145 12.9585 25.0866 13.1481 24.8847C13.2558 24.77 13.2577 24.7479 13.2422 23.7731C13.2269 22.8147 13.2215 22.7683 13.0963 22.5011C12.9432 22.1746 12.6277 21.8167 12.3492 21.6534C12.2399 21.5894 11.6153 21.294 10.9611 20.9971C10.3068 20.7001 9.74844 20.4428 9.72015 20.4253C9.69186 20.4078 10.2857 20.0836 11.0397 19.7047C11.7938 19.3259 12.4591 18.972 12.5181 18.9183C12.9006 18.5707 13.0087 17.9622 12.794 17.3669C12.5276 16.6283 12.5116 16.4907 12.4701 14.5938C12.421 12.3483 12.3715 12.123 11.9362 12.1607C11.8243 12.1704 11.7389 12.217 11.6745 12.3037C11.5885 12.4194 11.5849 12.456 11.6378 12.6701C11.6738 12.8154 11.7114 13.5838 11.7342 14.6427C11.7741 16.4879 11.8082 16.7874 12.0568 17.4765C12.1222 17.6578 12.1757 17.8761 12.1757 17.9615C12.1757 18.319 12.1318 18.3509 10.541 19.1481C9.72337 19.5579 9.03655 19.8754 9.01476 19.8537C8.99302 19.832 8.96766 19.511 8.95842 19.1404L8.94166 18.4667L9.22717 18.2465C9.95821 17.6828 10.5013 16.8902 10.7649 16.0021C10.8562 15.6946 10.8739 15.4935 10.8906 14.5694C10.909 13.5598 10.9042 13.4849 10.8123 13.3382C10.6101 13.0155 10.5671 13.0059 9.31932 13.0045C8.41374 13.0034 8.11685 12.9859 7.80246 12.9149C7.27039 12.7947 6.64646 12.5549 6.18764 12.2943C5.73028 12.0345 5.02826 11.3855 4.74544 10.9611C4.50508 10.6003 4.37872 10.5189 4.17149 10.5911C3.97101 10.661 3.8832 10.8741 3.96925 11.0818C4.13646 11.4854 4.83745 12.2586 5.39874 12.6585C6.02214 13.1025 6.99666 13.5022 7.87576 13.6742C8.0674 13.7118 8.58589 13.7369 9.18285 13.7376L10.1723 13.7387V14.5249C10.1723 15.4276 10.0911 15.8521 9.80864 16.4262C9.37102 17.3156 8.47995 18.0313 7.48485 18.2926C7.05916 18.4044 6.2042 18.4017 5.77465 18.2872C4.55781 17.9629 3.62081 17.0609 3.2323 15.8398C3.14253 15.5577 3.11923 15.3464 3.09934 14.6334C3.08605 14.158 3.09045 13.6877 3.10911 13.5883C3.13418 13.4545 3.23718 13.3087 3.50598 13.0265C3.79549 12.7227 3.86898 12.6152 3.86898 12.4958C3.86898 12.2908 3.71765 12.1507 3.49616 12.1507C3.34121 12.1507 3.27652 12.1937 2.9851 12.4903C2.80162 12.6771 2.59009 12.9465 2.51508 13.0889L2.37866 13.3478L2.37915 14.4228C2.37968 15.5906 2.41399 15.815 2.69729 16.502C2.96487 17.1509 3.47314 17.8129 4.00824 18.2097L4.30484 18.4296L4.30602 19.0892C4.3067 19.452 4.28877 19.778 4.26619 19.8137C4.23472 19.8633 3.89029 19.7113 2.78881 19.1613C1.99884 18.7668 1.30338 18.3989 1.24332 18.3435C1.05989 18.1745 1.05662 17.9739 1.22886 17.4569C1.47982 16.7035 1.52311 16.3008 1.52355 14.716C1.52399 13.1711 1.57139 12.7002 1.79152 12.0544C2.13205 11.0554 2.74357 10.2014 3.54302 9.60818C4.2682 9.07014 4.25989 9.07796 4.25989 8.92903C4.25989 8.75972 4.13148 8.59778 3.96671 8.55928C3.87905 8.53886 3.76422 8.57922 3.56027 8.70225ZM9.09924 9.03267C8.92412 9.22059 8.97811 9.48719 9.21114 9.58516C9.40093 9.66496 9.60136 9.59992 9.67695 9.43403C9.75465 9.2635 9.74727 9.20188 9.63127 9.05446C9.50046 8.88813 9.24368 8.87762 9.09924 9.03267ZM15.9979 9.12277C15.3143 9.26213 14.7655 9.9144 14.7655 10.5874C14.7655 10.9446 15.1852 11.1186 15.3971 10.8492C15.4528 10.7784 15.4984 10.6644 15.4984 10.5959C15.4984 10.3905 15.6878 10.0613 15.8711 9.94797C16.5044 9.55663 17.3041 10.2137 17.0391 10.9076C16.9331 11.1851 16.7118 11.3547 16.3736 11.4175C15.9571 11.4949 15.9382 11.5382 15.9382 12.4156C15.9382 13.0955 15.9466 13.1674 16.0378 13.2653C16.1822 13.4203 16.439 13.4098 16.5698 13.2435C16.6571 13.1326 16.6712 13.0464 16.6713 12.6205L16.6715 12.1262L16.8886 12.037C17.2049 11.9069 17.525 11.6022 17.6817 11.2819C17.7952 11.0498 17.8177 10.9414 17.8158 10.6362C17.8129 10.1629 17.6767 9.84194 17.3484 9.53483C16.9596 9.17114 16.4794 9.02465 15.9979 9.12277ZM16.0359 14.3007C15.9816 14.3549 15.9382 14.4635 15.9382 14.545C15.9382 14.883 16.3292 15.0178 16.5612 14.7596C16.6978 14.6076 16.7001 14.4972 16.5698 14.3317C16.4429 14.1703 16.1814 14.1551 16.0359 14.3007ZM5.62806 18.9994C6.29377 19.1845 7.47313 19.1234 8.12589 18.8701C8.19493 18.8433 8.20827 18.9066 8.23051 19.3674C8.24521 19.6728 8.29027 19.991 8.33727 20.1219C8.44414 20.4195 8.708 20.7216 9.01359 20.8961L9.2603 21.037L8.84897 21.2292C8.62278 21.3349 8.08055 21.5893 7.6441 21.7945C7.03145 22.0825 6.80145 22.1676 6.63561 22.1676C6.46508 22.1676 6.20865 22.0674 5.39293 21.6822C4.82763 21.4152 4.29483 21.1604 4.20892 21.116L4.05271 21.0352L4.21738 20.9369C4.4807 20.78 4.74686 20.5011 4.88504 20.2375C4.99738 20.0232 5.01551 19.9222 5.03266 19.4148C5.05176 18.8506 5.05484 18.8371 5.15692 18.8669C5.21448 18.8838 5.4265 18.9434 5.62806 18.9994Z" fill="white"/>
                                </svg>

                                <NavLink to="/faq"
                                         className=" shotin block py-2 pr-4 pl-3 text-xl  text-white my-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >FAQ</NavLink>
                            </li>
                            <li>
                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  className="shotin" fillRule="evenodd" clipRule="evenodd" d="M16.7517 0.0711128C16.9996 0.159438 17.3337 0.513374 17.4015 0.75921C17.4758 1.02878 17.4753 14.3473 17.401 14.6209C17.333 14.8714 16.9492 15.2541 16.6947 15.3253C16.5705 15.3601 15.1064 15.3773 12.2557 15.3774L8.00199 15.3777V19.701V24.0243L8.121 24.1441L8.23995 24.2639H14.5461H20.8522L20.9712 24.1441L21.0902 24.0243V14.7518C21.0902 5.50114 21.09 5.47902 20.9916 5.35305L20.893 5.22674L19.6784 5.21219C18.4685 5.19764 18.4635 5.19715 18.3713 5.08232C18.2458 4.92622 18.2539 4.72535 18.3908 4.59577C18.5 4.4925 18.5366 4.48962 19.7426 4.48962H20.9822L21.2414 4.62604C21.4302 4.72535 21.5405 4.82725 21.6469 5.00063L21.7931 5.23875L21.8057 14.6344C21.8147 21.3668 21.8031 24.0875 21.7648 24.2325C21.6968 24.4898 21.3176 24.8712 21.0574 24.9439C20.7739 25.0232 8.29798 25.0162 8.03185 24.9367C7.76951 24.8582 7.41205 24.4981 7.3341 24.2339C7.30153 24.1233 7.27487 23.9201 7.27487 23.7822V23.5316H5.20819C3.72093 23.5316 3.08557 23.5148 2.94199 23.4719C2.67964 23.3934 2.32219 23.0333 2.24424 22.7691C2.21167 22.6586 2.18501 22.3445 2.18501 22.0711C2.18501 21.6085 2.19325 21.5658 2.30401 21.4543C2.45564 21.3015 2.6415 21.3015 2.79313 21.4543C2.90374 21.5657 2.91213 21.6088 2.91213 22.0668C2.91213 22.5248 2.92052 22.5679 3.03114 22.6793L3.15009 22.7992H5.2125H7.27487V21.7006V20.602H4.11751C1.77089 20.602 0.908905 20.5867 0.760621 20.5424C0.498275 20.4639 0.14082 20.1038 0.0628728 19.8396C-0.012651 19.5833 -0.0241881 3.34164 0.0509964 3.07759C0.131077 2.79641 0.337144 2.54827 0.600314 2.41615C0.845549 2.29306 0.853014 2.29248 2.14254 2.29248H3.43833L3.53877 2.42113C3.66402 2.58148 3.66664 2.73581 3.54667 2.88517C3.45422 3.00025 3.45195 3.00045 2.19107 3.01495L0.928102 3.02945L0.829408 3.15581C0.731101 3.28173 0.73076 3.30858 0.73076 11.456V19.63L0.849766 19.7498L0.968724 19.8697H4.12182H7.27487V18.7223V17.5749H4.84894H2.42297L2.30401 17.455C2.15233 17.3023 2.15233 17.1151 2.30401 16.9623L2.42297 16.8425H4.84894H7.27487V16.1101V15.3777H4.84894H2.42297L2.30401 15.2578C2.15233 15.1051 2.15233 14.9179 2.30401 14.7652C2.42263 14.6457 2.42578 14.6453 3.42456 14.6453H4.42614L4.39691 14.5355C4.38087 14.475 4.36739 14.1454 4.36706 13.8031L4.36638 13.1806H3.3947C2.42762 13.1806 2.42239 13.18 2.30401 13.0607C2.15233 12.908 2.15233 12.7208 2.30401 12.568C2.42239 12.4488 2.42762 12.4482 3.3947 12.4482H4.36638V11.7158V10.9834H3.3947C2.42762 10.9834 2.42239 10.9828 2.30401 10.8635C2.15233 10.7108 2.15233 10.5236 2.30401 10.3709C2.42239 10.2516 2.42762 10.251 3.3947 10.251H4.36638V9.51865V8.78627H3.3947C2.42762 8.78627 2.42239 8.78568 2.30401 8.6664C2.23857 8.60049 2.18501 8.48965 2.18501 8.42008C2.18501 8.3505 2.23857 8.23967 2.30401 8.17375C2.42239 8.05447 2.42762 8.05388 3.3947 8.05388H4.36638V7.3215V6.58912H3.3947C2.42762 6.58912 2.42239 6.58853 2.30401 6.46925C2.15233 6.31653 2.15233 6.12933 2.30401 5.9766L2.42297 5.85674H3.63925H4.85554L4.97449 5.9766L5.0935 6.09642V10.251V14.4056L5.2125 14.5255L5.33146 14.6453H10.9105H16.4895L16.6085 14.5255L16.7275 14.4056V7.68769V0.969746L16.6085 0.849928L16.4895 0.730062H10.9105H5.33146L5.2125 0.849928L5.0935 0.969746V2.92721V4.88467L4.97449 5.00449C4.82286 5.15726 4.63701 5.15726 4.48538 5.00449L4.36638 4.88467V2.92286C4.36638 1.51068 4.3831 0.904906 4.42605 0.76048C4.50652 0.489987 4.86678 0.120817 5.11774 0.0516314C5.25313 0.0143287 7.00801 -0.00119777 10.9347 7.16943e-05C15.6572 0.00168294 16.5889 0.0130593 16.7517 0.0711128ZM11.6482 1.63592C12.2526 1.78347 12.9352 2.24009 13.3176 2.75251C13.5936 3.12227 13.6834 3.29984 13.8262 3.75783C13.9337 4.10254 13.9402 4.19599 13.9398 5.3929C13.9395 6.65982 13.9392 6.66314 13.803 7.05247C13.7278 7.26706 13.5931 7.56368 13.5036 7.71162C13.3399 7.98216 12.9243 8.44171 12.7234 8.57422C12.6316 8.63481 12.6218 8.66787 12.6581 8.7951C12.7651 9.17091 12.9715 9.31241 13.9565 9.68485C14.7496 9.98479 15.0213 10.1376 15.3487 10.4677C15.8514 10.9744 15.9983 11.5017 15.9995 12.8044C16.0003 13.6623 15.9988 13.6748 15.8813 13.7931L15.7624 13.9129H10.9105H6.05858L5.93963 13.7931C5.82212 13.6748 5.82062 13.6623 5.82145 12.8044C5.82271 11.5017 5.96958 10.9744 6.47222 10.4677C6.79962 10.1376 7.07137 9.98479 7.86447 9.68485C8.84943 9.31241 9.05588 9.17091 9.16287 8.7951C9.19913 8.66787 9.18933 8.63481 9.09752 8.57422C8.89669 8.44171 8.48107 7.98216 8.31737 7.71162C8.22784 7.56368 8.09298 7.26706 8.0177 7.05247L7.8808 6.66236L7.88192 5.36848C7.88299 4.0916 7.88473 4.06943 8.01469 3.68019C8.34941 2.67766 9.211 1.86721 10.1889 1.63504C10.5694 1.54471 11.2764 1.54511 11.6482 1.63592ZM10.277 2.37026C9.46894 2.60906 8.82955 3.30453 8.6549 4.13466C8.57075 4.53484 8.55853 6.09066 8.63624 6.5191C8.7964 7.40245 9.48207 8.1407 10.3551 8.36974C11.149 8.57803 12.0192 8.31681 12.5862 7.70005C12.9064 7.35163 13.0762 7.02894 13.1675 6.59552C13.2608 6.15199 13.2599 4.58078 13.1661 4.13466C12.9944 3.3185 12.3831 2.63968 11.5897 2.38388C11.2478 2.27363 10.6258 2.26719 10.277 2.37026ZM11.5649 9.1028C11.3783 9.1426 11.0838 9.17516 10.9105 9.17516C10.7372 9.17516 10.4427 9.1426 10.2561 9.1028C10.0695 9.06296 9.90463 9.03039 9.88975 9.03039C9.87487 9.03039 9.82329 9.12038 9.77511 9.23038C9.56502 9.71 9.23369 9.94172 8.18198 10.3447C7.14132 10.7435 6.9306 10.8998 6.68231 11.4573C6.59457 11.6544 6.57475 11.809 6.557 12.436L6.53597 13.1806H10.9105H15.285L15.264 12.436C15.2462 11.809 15.2264 11.6544 15.1387 11.4573C14.8904 10.8998 14.6796 10.7435 13.639 10.3447C12.5873 9.94172 12.256 9.71 12.0459 9.23038C11.9977 9.12038 11.9461 9.03039 11.9312 9.03039C11.9163 9.03039 11.7515 9.06296 11.5649 9.1028Z" fill="white"/>
                                </svg>

                                <NavLink to="/about"
                                         className="block shotin py-2 pr-4 text-xl pl-3 my-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >о нас</NavLink>
                            </li>
                            <li
                                style={{position: "relative"}}>

                                {
                                    basket.length === 0 ? null : <div className="circle">
                                        {basket.length}
                                    </div>
                                }
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  className="shotin" fillRule="evenodd" clipRule="evenodd" d="M0 0.607892V1.21578H1.45556H2.91116L2.96015 1.40575C3.58561 3.83033 6.32233 14.0215 7.42874 18.0463L7.8986 19.7555L7.66654 19.9054C7.16916 20.2268 6.7375 20.813 6.55066 21.4209C6.4818 21.6448 6.45166 21.8888 6.45166 22.2225C6.45166 23.2079 6.89632 24.0239 7.73484 24.577C8.7473 25.2449 10.1991 25.1085 11.0815 24.2627C11.6493 23.7182 11.9459 23.0516 11.9592 22.2894C11.9683 21.7682 11.8898 21.4129 11.6654 20.9596L11.4961 20.6177H15.0013C16.9292 20.6177 18.499 20.6351 18.4897 20.6563C18.4805 20.6776 18.4112 20.82 18.3358 20.9729C17.7971 22.0655 18.0084 23.3358 18.8707 24.189C19.4368 24.7492 20.0064 24.9871 20.7915 24.9911C21.869 24.9966 22.7956 24.4279 23.2739 23.4676C23.8282 22.3546 23.6194 21.1124 22.7276 20.2161C22.3582 19.8448 21.765 19.5352 21.2703 19.4555C21.0566 19.421 18.8822 19.4025 15.0138 19.4023L9.0849 19.4019L9.00451 19.0853C8.9603 18.9112 8.87053 18.5749 8.80501 18.3381L8.68585 17.9075L14.8395 17.9228C19.304 17.9338 21.0756 17.9221 21.2935 17.8801C21.9359 17.7563 22.6191 17.2521 22.9238 16.6771C23.0362 16.4648 23.4403 15.0283 24.4418 11.2799C25.1925 8.47057 25.8066 6.12259 25.8065 6.06216C25.8062 5.88369 25.6159 5.6224 25.4291 5.54398C25.28 5.48131 23.8477 5.47103 15.2795 5.47103H5.30342L5.19167 5.0531C4.34222 1.87616 3.92211 0.373094 3.85452 0.269448C3.68874 0.0151467 3.56858 0 1.71534 0H0V0.607892ZM24.3723 6.82612C24.3536 6.90272 23.795 9.01707 23.1311 11.5246C21.7954 16.5687 21.8649 16.3672 21.371 16.6284L21.1076 16.7677L15.0523 16.7666C9.27744 16.7655 8.98772 16.7612 8.79543 16.6722C8.57587 16.5705 8.37638 16.3999 8.24961 16.2054C8.20505 16.1372 7.73882 14.5089 7.21351 12.5872C6.32318 9.33008 5.67762 6.98326 5.61481 6.77547C5.58936 6.69127 6.05947 6.68682 14.9971 6.68682H24.4063L24.3723 6.82612ZM9.89786 20.7896C10.2167 20.9463 10.5006 21.2413 10.653 21.574C10.8184 21.9352 10.8055 22.5825 10.6262 22.9226C10.3475 23.4512 9.87785 23.7597 9.29337 23.798C8.81887 23.8292 8.50012 23.722 8.16408 23.4184C7.03362 22.3969 7.77879 20.5462 9.2849 20.6347C9.51812 20.6484 9.70849 20.6965 9.89786 20.7896ZM21.5122 20.7898C22.0742 21.076 22.3892 21.5858 22.3932 22.2154C22.3952 22.5353 22.3727 22.6349 22.2341 22.9179C21.9337 23.5312 21.4061 23.8365 20.714 23.7977C20.0801 23.7622 19.6394 23.4529 19.3622 22.8489C19.0237 22.1113 19.3473 21.1864 20.0746 20.813C20.41 20.6408 20.5157 20.6185 20.8978 20.6397C21.1537 20.6538 21.3294 20.6967 21.5122 20.7898Z" fill="white"/>
                                </svg>

                                <NavLink to="basket"
                                         className="block shotin py-2 pr-4 pl-3 text-xl my-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >Корзина</NavLink>

                            </li>
                        </ul>
                         <BurgerMenu/>

                    </div>
                </div>

            </nav>
        </div>
    );
};
export default Header;