// import React, {useState} from "react";
// import {Link} from "react-router-dom"
//
// export default function BurgerMenu() {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//
//     return (
//         <div>
//             <nav>
//                 <section className="MOBILE-MENU flex lg:hidden">
//                     <div
//                         className="HAMBURGER-ICON space-y-2"
//                         onClick={() => setIsNavOpen((prev) => !prev)}
//                     >
//                         <span className="block h-0.5 w-8 animate-pulse bg-white"/>
//                         <span className="block h-0.5 w-8 animate-pulse bg-white"/>
//                         <span className="block h-0.5 w-8 animate-pulse bg-white"/>
//                     </div>
//
//                     <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
//                         <div
//                             className="absolute top-0 right-0 px-8 py-8"
//                             onClick={() => setIsNavOpen(false)}
//                         >
//                             <svg
//                                 className="h-8 w-8 text-gray-600"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             >
//                                 <line x1="18" y1="6" x2="6" y2="18"/>
//                                 <line x1="6" y1="6" x2="18" y2="18"/>
//                             </svg>
//                         </div>
//
//
//                         <div style={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             flexDirection: "column"
//                         }}>
//
//                             {/*<Link to={"/"}>*/}
//                             {/*    <a className="text-white text-2xl p-3"*/}
//                             {/*       onClick={() => setIsNavOpen(false)}*/}
//                             {/*    >Главная</a>*/}
//                             {/*</Link>*/}
//
//                             {/*<Link href={"basket"}>*/}
//                             {/*    <a className="text-white text-2xl p-3"*/}
//                             {/*       onClick={() => setIsNavOpen(false)}*/}
//                             {/*    >OcOO  ZERO WASTE</a>*/}
//                             {/*</Link>*/}
//
//                             {/*<Link href={"faq"}>*/}
//
//                             {/*    <a className="text-white text-2xl p-3"*/}
//                             {/*       onClick={() => setIsNavOpen(false)}*/}
//                             {/*    >Услуги</a>*/}
//
//                             {/*</Link>*/}
//                             {/*<Link href={"about"}>*/}
//
//                             {/*    <a className="text-white text-2xl p-3"*/}
//                             {/*       onClick={() => setIsNavOpen(false)}*/}
//                             {/*    >Свяжитесь с нами</a>*/}
//
//                             {/*</Link>*/}
//                         </div>
//                     </div>
//                 </section>
//
//             </nav>
//
//         </div>
//     );
// }