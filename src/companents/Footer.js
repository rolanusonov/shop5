import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="Hooter">
            <div className="footerTwo">
                <h1 className="flex items-center justify-center"
                    style={{fontSize: "40px", lineHeight: "48px", fontWeight: "700",
                        color: "white",


                    }}>
                    SHOP
                </h1>
                <h3 className="flex items-center justify-center"
                    style={{fontSize: "14px", fontWeight: "700px", lineHeight: "17px", color: "#FF00C7"}}>
                    SHOP
                </h3>
                <p className="flex items-center justify-center my-5" style={{
                    fontSize: "12px",
                    lineHeight: "15px",
                    fontWeight: "400px",
                    color: "rgba(255, 255, 255, 0.6)"
                }}>Motion Shop 2022 - все права защищены </p>
                <div >
                    <a  className="flex items-center justify-center" style={{
                        fontSize: "15px",
                        lineHeight: "15px",
                        fontWeight: "400px",
                        color: "rgba(255, 255, 255, 0.6)"
                    }}>Пользовательские соглашения</a>
                    <p  className="flex items-center justify-center ml-52 footerP" style={{border: "solid 0.5px white", width: "230px"}}> </p>

                </div>
                <div className=" my-2">
                    <a  className="flex items-center justify-center " style={{
                        fontSize: "15px",
                        lineHeight: "15px",
                        fontWeight: "400px",
                        color: "rgba(255, 255, 255, 0.6)"
                    }}>Политика конфиденциальности</a>
                    <p  className="flex items-center justify-center footerP ml-52" style={{border: "solid 0.5px white", width: "230px"}}> </p>


                </div>
                <p className="flex items-center justify-center my-5" style={{
                    fontSize: "15px",
                    lineHeight: "15px",
                    fontWeight: "400px",
                    color: "rgba(255, 255, 255, 0.6)"
                }}>Все товары привозные из Турции. Гарантия / Качество / </p>
                <p className="flex items-center justify-center " style={{
                    fontSize: "15px",
                    lineHeight: "15px",
                    fontWeight: "400px",
                    color: "rgba(255, 255, 255, 0.6)"
                }}>  Удобство</p>
            </div>

            <div className="container footerOne  " style={{width: "100%", bottom: "0", left: '0', margin: "auto"}}>


                <nav className="  footer   px-2 sm:px-4 py-2.5 rounded "
                >
                    <div className="   flex  justify-between items-center  ">

                        <h1 className="text-3xl  "
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: " 24px",
                                color: "#FFFFFF",
                            }}>MOTION SHOP</h1>


                        <div className="" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            margin: '50px',
                            color: 'white'

                        }}>
                            <Link to="/" className="py-3">Женщинам </Link>
                            <Link to="/" className="py-3">Мужчинам </Link>
                            <Link to="/" className="py-3">Детям </Link>
                        </div>
                        <div className="" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            margin: '50px',
                            color: 'white'

                        }}>
                            <Link to="/" className="py-3">Обувь </Link>
                            <Link to="/" className="py-3">FAQ </Link>
                            <Link to="/" className="py-3">О нас </Link>
                        </div>
                        <div className="mt-6">
                            <h1 style={{

                                color: "white"
                            }} className="mx-5">Связаться с нами:</h1>


                            <div style={{
                                width: '150px',
                                color: 'white',
                                margin: '10px',
                                fontSize: '18px',

                            }}>
                                <Link to="tel:+996 222 533 735">+996 222 533 735 </Link>
                                <Link to="tel:+996 222 533 735">+996 222 533 735 </Link>
                                <Link to="tel:+996 222 533 735">+996 222 533 735</Link>
                            </div>
                            <div>
                                <div className="flex   mx-1 " style={{
                                    color: 'white'

                                }}

                                >
                                    <Link to="https:/www.instagram.com/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" className=" mx-2" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 9.024C11.4114 9.024 10.836 9.19854 10.3466 9.52555C9.85722 9.85255 9.47578 10.3173 9.25053 10.8611C9.02529 11.4049 8.96635 12.0033 9.08118 12.5806C9.19601 13.1579 9.47945 13.6881 9.89565 14.1044C10.3119 14.5206 10.8421 14.804 11.4194 14.9188C11.9967 15.0336 12.5951 14.9747 13.1389 14.7495C13.6827 14.5242 14.1474 14.1428 14.4745 13.6534C14.8015 13.164 14.976 12.5886 14.976 12C14.976 11.6092 14.899 11.2222 14.7495 10.8611C14.5999 10.5001 14.3807 10.172 14.1044 9.89565C13.828 9.6193 13.4999 9.40009 13.1389 9.25053C12.7778 9.10098 12.3908 9.024 12 9.024ZM23.916 6.084C23.9097 5.15731 23.739 4.23909 23.412 3.372C23.1711 2.73751 22.7985 2.16131 22.3186 1.68142C21.8387 1.20153 21.2625 0.828861 20.628 0.588C19.7609 0.260957 18.8427 0.0903131 17.916 0.0839999C16.368 -8.04663e-08 15.912 0 12 0C8.088 0 7.632 -8.04663e-08 6.084 0.0839999C5.15731 0.0903131 4.23909 0.260957 3.372 0.588C2.73751 0.828861 2.16131 1.20153 1.68142 1.68142C1.20153 2.16131 0.828861 2.73751 0.588 3.372C0.260957 4.23909 0.0903131 5.15731 0.0839999 6.084C-8.04663e-08 7.632 0 8.088 0 12C0 15.912 -8.04663e-08 16.368 0.0839999 17.916C0.0969167 18.846 0.267329 19.767 0.588 20.64C0.827794 21.2716 1.20015 21.8444 1.68 22.32C2.15783 22.8028 2.73527 23.1754 3.372 23.412C4.23909 23.739 5.15731 23.9097 6.084 23.916C7.632 24 8.088 24 12 24C15.912 24 16.368 24 17.916 23.916C18.8427 23.9097 19.7609 23.739 20.628 23.412C21.2647 23.1754 21.8422 22.8028 22.32 22.32C22.7998 21.8444 23.1722 21.2716 23.412 20.64C23.7387 19.7687 23.9093 18.8466 23.916 17.916C24 16.368 24 15.912 24 12C24 8.088 24 7.632 23.916 6.084ZM20.868 15.684C20.8295 16.4245 20.6714 17.1539 20.4 17.844C20.167 18.4196 19.8207 18.9425 19.3816 19.3816C18.9425 19.8207 18.4196 20.167 17.844 20.4C17.1474 20.6563 16.4139 20.7981 15.672 20.82C14.724 20.82 14.472 20.82 12 20.82C9.528 20.82 9.276 20.82 8.328 20.82C7.58608 20.7981 6.85259 20.6563 6.156 20.4C5.56092 20.1789 5.02353 19.8261 4.584 19.368C4.1492 18.9375 3.81341 18.4174 3.6 17.844C3.34267 17.1481 3.20473 16.4138 3.192 15.672C3.192 14.724 3.192 14.472 3.192 12C3.192 9.528 3.192 9.276 3.192 8.328C3.20473 7.58619 3.34267 6.85186 3.6 6.156C3.82114 5.56092 4.17393 5.02353 4.632 4.584C5.0644 4.15155 5.58392 3.81611 6.156 3.6C6.85259 3.34369 7.58608 3.20185 8.328 3.18C9.276 3.18 9.528 3.18 12 3.18C14.472 3.18 14.724 3.18 15.672 3.18C16.4139 3.20185 17.1474 3.34369 17.844 3.6C18.4391 3.82114 18.9765 4.17393 19.416 4.632C19.8508 5.0625 20.1866 5.58256 20.4 6.156C20.6563 6.85259 20.7981 7.58608 20.82 8.328C20.82 9.276 20.82 9.528 20.82 12C20.82 14.472 20.904 14.724 20.868 15.672V15.684ZM18.948 6.756C18.8051 6.36838 18.5799 6.01637 18.2877 5.72426C17.9956 5.43214 17.6436 5.20688 17.256 5.064C16.7238 4.87951 16.1632 4.79015 15.6 4.8C14.664 4.8 14.4 4.8 12 4.8C9.6 4.8 9.336 4.8 8.4 4.8C7.83392 4.80553 7.27328 4.91116 6.744 5.112C6.36232 5.24839 6.01403 5.46446 5.7223 5.74584C5.43057 6.02723 5.20207 6.36749 5.052 6.744C4.87773 7.27844 4.79259 7.83791 4.8 8.4C4.8 9.336 4.8 9.6 4.8 12C4.8 14.4 4.8 14.664 4.8 15.6C4.8119 16.1654 4.91732 16.725 5.112 17.256C5.25488 17.6436 5.48014 17.9956 5.77226 18.2877C6.06437 18.5799 6.41638 18.8051 6.804 18.948C7.316 19.1363 7.85478 19.2416 8.4 19.26C9.336 19.26 9.6 19.26 12 19.26C14.4 19.26 14.664 19.26 15.6 19.26C16.1661 19.2545 16.7267 19.1488 17.256 18.948C17.6436 18.8051 17.9956 18.5799 18.2877 18.2877C18.5799 17.9956 18.8051 17.6436 18.948 17.256C19.1488 16.7267 19.2545 16.1661 19.26 15.6C19.26 14.664 19.26 14.4 19.26 12C19.26 9.6 19.26 9.336 19.26 8.4C19.2603 7.83336 19.1545 7.27167 18.948 6.744V6.756ZM12 16.584C11.3986 16.584 10.8031 16.4653 10.2476 16.2348C9.69211 16.0043 9.18756 15.6665 8.76286 15.2407C8.33815 14.8148 8.00163 14.3094 7.77257 13.7533C7.54352 13.1972 7.42642 12.6014 7.428 12C7.428 11.0929 7.69716 10.2061 8.20138 9.45202C8.70561 8.69793 9.42225 8.1104 10.2606 7.7638C11.0989 7.4172 12.0212 7.32713 12.9107 7.50498C13.8003 7.68283 14.617 8.1206 15.2576 8.76289C15.8982 9.40517 16.3339 10.2231 16.5094 11.1131C16.6849 12.0031 16.5924 12.9251 16.2436 13.7626C15.8948 14.6 15.3054 15.315 14.55 15.8173C13.7946 16.3195 12.9071 16.5864 12 16.584ZM16.8 8.316C16.5347 8.28792 16.2892 8.16267 16.1108 7.96437C15.9324 7.76606 15.8337 7.50875 15.8337 7.242C15.8337 6.97525 15.9324 6.71794 16.1108 6.51964C16.2892 6.32134 16.5347 6.19608 16.8 6.168C17.0653 6.19608 17.3108 6.32134 17.4892 6.51964C17.6676 6.71794 17.7663 6.97525 17.7663 7.242C17.7663 7.50875 17.6676 7.76606 17.4892 7.96437C17.3108 8.16267 17.0653 8.28792 16.8 8.316Z"
                                                fill="white"/>
                                        </svg>

                                    </Link>

                                    <Link to="https://www.facebook.com/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" className=" mx-2" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 4.13446e-08C9.62663 4.13446e-08 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24.0001 10.4241 23.6898 8.86361 23.0868 7.40764C22.4838 5.95168 21.5999 4.62875 20.4856 3.51443C19.3712 2.4001 18.0483 1.51619 16.5924 0.913179C15.1364 0.310169 13.5759 -0.000130775 12 4.13446e-08ZM15.8154 18.183C15.7705 18.295 15.7022 18.3961 15.615 18.4795C15.5278 18.5629 15.4238 18.6267 15.3099 18.6667C15.1961 18.7066 15.075 18.7218 14.9548 18.7111C14.8346 18.7004 14.7181 18.6642 14.613 18.6048L11.3554 16.0735L9.26463 18.0024C9.21611 18.0382 9.15936 18.0613 9.0996 18.0695C9.03984 18.0776 8.97898 18.0706 8.92263 18.0491L9.32343 14.463L9.33626 14.4731L9.34445 14.4023C9.34445 14.4023 15.2065 9.06534 15.4453 8.83795C15.687 8.61115 15.6072 8.56195 15.6072 8.56195C15.621 8.28531 15.1734 8.56195 15.1734 8.56195L7.4064 13.5588L4.17182 12.4572C4.17182 12.4572 3.67502 12.279 3.62822 11.8872C3.57902 11.4984 4.188 11.2872 4.188 11.2872L17.0484 6.17819C17.0484 6.17819 18.1056 5.70716 18.1056 6.4872L15.8154 18.183Z"
                                                fill="white"/>
                                        </svg>

                                    </Link>
                                    <Link to="https://web.telegram.org">
                                        <svg width="24" height="24" viewBox="0 0 24 24" className=" mx-2" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24 5.46C23.9865 4.94229 23.9465 4.42561 23.88 3.912C23.7904 3.46215 23.6411 3.02629 23.436 2.616C23.2215 2.17093 22.9335 1.76523 22.584 1.416C22.2313 1.07065 21.8263 0.783109 21.384 0.564C20.9732 0.362933 20.5373 0.217648 20.088 0.132C19.5793 0.0557992 19.0663 0.0117121 18.552 0H5.46C4.94229 0.0134837 4.42561 0.0535363 3.912 0.12C3.46215 0.209602 3.02629 0.358924 2.616 0.564C2.17093 0.778484 1.76523 1.06653 1.416 1.416C1.07065 1.76869 0.783109 2.17367 0.564 2.616C0.362933 3.02684 0.217648 3.46269 0.132 3.912C0.0557992 4.42072 0.0117121 4.93374 0 5.448C0 5.676 0 6 0 6.096V17.904C0 18.036 0 18.324 0 18.54C0.0134837 19.0577 0.0535363 19.5744 0.12 20.088C0.209602 20.5379 0.358924 20.9737 0.564 21.384C0.778484 21.8291 1.06653 22.2348 1.416 22.584C1.76869 22.9294 2.17367 23.2169 2.616 23.436C3.02684 23.6371 3.46269 23.7824 3.912 23.868C4.42072 23.9442 4.93374 23.9883 5.448 24H18.54C19.0577 23.9865 19.5744 23.9465 20.088 23.88C20.5379 23.7904 20.9737 23.6411 21.384 23.436C21.8291 23.2215 22.2348 22.9335 22.584 22.584C22.9294 22.2313 23.2169 21.8263 23.436 21.384C23.6371 20.9732 23.7824 20.5373 23.868 20.088C23.9442 19.5793 23.9883 19.0663 24 18.552C24 18.324 24 18.036 24 17.904V6.096C24 6 24 5.676 24 5.46ZM12.276 20.4C10.8349 20.3929 9.41896 20.0214 8.16 19.32L3.6 20.52L4.8 16.056C4.02614 14.7557 3.61198 13.2731 3.6 11.76C3.60478 10.0595 4.11264 8.39846 5.05963 6.98605C6.00662 5.57364 7.35038 4.47304 8.92167 3.82286C10.493 3.17268 12.2215 3.002 13.8896 3.33233C15.5577 3.66265 17.0908 4.47919 18.2957 5.67912C19.5006 6.87905 20.3236 8.40871 20.6608 10.0754C20.9981 11.7421 20.8346 13.4714 20.1909 15.0454C19.5473 16.6194 18.4523 17.9677 17.0438 18.9205C15.6354 19.8734 13.9765 20.3882 12.276 20.4ZM12.276 4.644C11.0038 4.65856 9.75812 5.00998 8.66587 5.66249C7.57362 6.31499 6.67377 7.24528 6.05796 8.35862C5.44214 9.47197 5.13234 10.7286 5.1601 12.0006C5.18786 13.2726 5.55219 14.5146 6.216 15.6L6.384 15.876L5.664 18.504L8.4 17.76L8.664 17.916C9.75549 18.5589 10.9973 18.9025 12.264 18.912C14.1736 18.912 16.0049 18.1534 17.3552 16.8032C18.7054 15.4529 19.464 13.6216 19.464 11.712C19.464 9.80244 18.7054 7.97109 17.3552 6.62083C16.0049 5.27057 14.1736 4.512 12.264 4.512L12.276 4.644ZM16.476 14.868C16.3188 15.1302 16.1084 15.3564 15.8583 15.5321C15.6081 15.7078 15.3239 15.8291 15.024 15.888C14.5758 15.9699 14.1145 15.9411 13.68 15.804C13.2712 15.6762 12.8705 15.5239 12.48 15.348C10.9965 14.6036 9.73133 13.4873 8.808 12.108C8.30626 11.469 8.00183 10.6975 7.932 9.888C7.92485 9.55175 7.98846 9.21774 8.1187 8.90765C8.24894 8.59756 8.4429 8.31831 8.688 8.088C8.7602 8.00615 8.84877 7.94035 8.94799 7.89488C9.0472 7.8494 9.15486 7.82526 9.264 7.824H9.6C9.732 7.824 9.912 7.824 10.08 8.196C10.248 8.568 10.692 9.684 10.752 9.792C10.7815 9.84957 10.7969 9.91332 10.7969 9.978C10.7969 10.0427 10.7815 10.1064 10.752 10.164C10.699 10.2944 10.6261 10.4158 10.536 10.524C10.428 10.656 10.308 10.812 10.212 10.908C10.116 11.004 9.996 11.124 10.116 11.34C10.4425 11.891 10.8467 12.3922 11.316 12.828C11.8271 13.2796 12.4115 13.6408 13.044 13.896C13.26 14.004 13.392 13.992 13.512 13.896C13.632 13.8 14.052 13.272 14.196 13.056C14.34 12.84 14.484 12.876 14.676 12.948C14.868 13.02 15.936 13.536 16.152 13.644C16.368 13.752 16.5 13.8 16.56 13.896C16.612 14.2101 16.5831 14.5322 16.476 14.832V14.868Z"
                                                fill="white"/>
                                        </svg>

                                    </Link>
                                    <Link to="https://www.facebook.com/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className=" mx-2"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M22.68 0H1.32C0.969914 0 0.634167 0.139071 0.386619 0.386619C0.139071 0.634167 0 0.969914 0 1.32V22.68C0 22.8533 0.0341429 23.025 0.100479 23.1851C0.166815 23.3453 0.264046 23.4908 0.386619 23.6134C0.509193 23.736 0.654708 23.8332 0.814858 23.8995C0.975008 23.9659 1.14666 24 1.32 24H12.816V14.7H9.696V11.1H12.816V8.4C12.7514 7.76611 12.8262 7.12575 13.0353 6.52385C13.2443 5.92194 13.5825 5.37305 14.0262 4.91569C14.4698 4.45833 15.0081 4.10357 15.6034 3.87629C16.1987 3.649 16.8364 3.5547 17.472 3.6C18.406 3.59425 19.3395 3.64233 20.268 3.744V6.984H18.36C16.848 6.984 16.56 7.704 16.56 8.748V11.064H20.16L19.692 14.664H16.56V24H22.68C22.8533 24 23.025 23.9659 23.1851 23.8995C23.3453 23.8332 23.4908 23.736 23.6134 23.6134C23.736 23.4908 23.8332 23.3453 23.8995 23.1851C23.9659 23.025 24 22.8533 24 22.68V1.32C24 1.14666 23.9659 0.975008 23.8995 0.814858C23.8332 0.654708 23.736 0.509193 23.6134 0.386619C23.4908 0.264046 23.3453 0.166815 23.1851 0.100479C23.025 0.0341429 22.8533 0 22.68 0Z"
                                                fill="white"/>
                                        </svg>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{}} className="mb-5">
                            <h1 style={{
                                color: 'white',
                                fontSize: '22px'

                            }} className="mx-32 h1-footer">Адрес</h1>
                            <p className="lorem_footer"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                                in dolor viverra feugiat
                                neque, sed in. Mattis volutpat malesuada velit parturient aliquam, est. Mauris vitae
                                velit
                                laoreet faucibus nec amet velit.</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Footer;