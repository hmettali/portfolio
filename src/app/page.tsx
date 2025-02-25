export default function Home() {
  return (
    <div>
        <main>
            <div className={'px-24 pt-24 pb-12 p-6'}>
                <h1 className={'text-5xl font-bold mb-2 text-violet-400'}>
                    Hédi METTALI
                </h1>
                <h2 className={'text-2xl font-bold mb-2 text-gray-300'}>
                    Frontend expect
                </h2>
                <p className={'text-gray-300'}>
                    Crafting exceptional digital experiences with modern web technologies. Specialized in building
                    scalable full-stack applications using MongoDB, Express.js, React, and Node.js.
                </p>
                <a>LinkedIN</a>
                <a>Email</a>
            </div>

            <div>
                <h2 className={'ml-24 mb-4 text-2xl'}>Professional Experience</h2>

                <div className={'mx-24 my-12 p-6 bg-gray-50 text-stone-700 rounded-xl shadow-lg'}>
                    <div>
                        <h3>Freelance</h3>
                        <div>Location</div>
                        <div>2024 - Present</div>
                        <h4>MERN Stack Developer</h4>
                        <ul>
                            <li>Developing custom web applications for international clients</li>
                            <li>Building responsive and scalable frontend interfaces with React</li>
                            <li>Implementing secure backend systems with Node.js and Express</li>
                            <li> Collaborating with clients to deliver high-quality solutions</li>
                        </ul>
                    </div>
                </div>
                <div className={'mx-24 my-12 p-6 bg-gray-50 text-stone-700 rounded-xl'}>
                    <div>
                        <h3>Freelance</h3>
                        <div>Location</div>
                        <div>2024 - Present</div>
                        <h4>MERN Stack Developer</h4>
                        <ul>
                            <li>Developing custom web applications for international clients</li>
                            <li>Building responsive and scalable frontend interfaces with React</li>
                            <li>Implementing secure backend systems with Node.js and Express</li>
                            <li> Collaborating with clients to deliver high-quality solutions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'px-24 pt-24 p-6 mb-12'}>
                <h2 className={'mb-4 text-2xl'}>Skills & Expertise</h2>

                <div className={'flex'}>
                    <div className={'mr-4 p-6 bg-gray-50 text-stone-700 rounded-xl shadow-lg'}>
                        <h3>Frontend Development</h3>
                        <div>React.js, Next.js</div>
                        <p>
                            Building responsive and interactive user interfaces with modern React features and Next.js
                            for optimal performance.
                        </p>
                    </div>
                    <div className={'mr-4 p-6 bg-gray-50 text-stone-700 rounded-xl shadow-lg'}>
                        <h3>UI/UX Design</h3>
                        <div>Tailwind CSS, Material UI</div>
                        <p>
                            Crafting beautiful and intuitive user interfaces with modern design principles and
                            frameworks.
                        </p>
                    </div>
                    <div className={'mr-4 p-6 bg-gray-50 text-stone-700 rounded-xl shadow-lg'}>
                        <h3>Version Control</h3>
                        <div>Git, GitHub</div>
                        <p>
                            Managing code versions efficiently with Git and collaborating effectively through GitHub.
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <h2 className={'ml-24 text-2xl'}>Education & certification</h2>
                <div className={'mx-24 my-12 p-6 bg-gray-50 text-stone-700 rounded-xl'}>
                    <div>
                        <h3>Bachelor's Degree in Computer Science</h3>
                        <div>ISAMM</div>
                        <div>2001 - 2004</div>
                        <h4>MERN Stack Developer</h4>
                        <ul>
                            <li>Developing custom web applications for international clients</li>
                            <li>Building responsive and scalable frontend interfaces with React</li>
                            <li>Implementing secure backend systems with Node.js and Express</li>
                        </ul>
                    </div>
                </div>
                <div className={'mx-24 my-12 p-6 bg-gray-50 text-stone-700 rounded-xl'}>
                    <div>
                        <h3>Bachelor's Degree in Computer Science</h3>
                        <div>ISAMM</div>
                        <div>2001 - 2004</div>
                        <h4>MERN Stack Developer</h4>
                        <ul>
                            <li>Developing custom web applications for international clients</li>
                            <li>Building responsive and scalable frontend interfaces with React</li>
                            <li>Implementing secure backend systems with Node.js and Express</li>
                        </ul>
                    </div>
                </div>
                <div className={'mx-24 my-12 p-6 bg-gray-50 text-stone-700 rounded-xl'}>
                    <div>
                        <h3>Bachelor's Degree in Computer Science</h3>
                        <div>ISAMM</div>
                        <div>2001 - 2004</div>
                        <h4>MERN Stack Developer</h4>
                        <ul>
                            <li>Developing custom web applications for international clients</li>
                            <li>Building responsive and scalable frontend interfaces with React</li>
                            <li>Implementing secure backend systems with Node.js and Express</li>
                        </ul>
                    </div>
                </div>
            </div>

             <div className={'pl-24 pt-24 p-6'}>
                    <h2 className={'mb-6 text-2xl'}>Contact</h2>

                    <div className={'flex'}>
                        <div className={'w-1/5 mr-4 p-6 bg-gray-50 text-stone-700 rounded-xl'}>
                            <h3>Information de contact</h3>
                            <div>email@gmail.com</div>
                            <div>06 75 XX XX XX</div>
                            <div>Paris</div>
                        </div>
                        <div className={'w-4/5 mr-4 p-6 bg-gray-50 text-stone-700 rounded-xl'}>
                            <form>
                                <div className={'mb-6'}>
                                    <label>Nom & Prénom</label>
                                    <div>
                                        <input className={"w-full h-10 border-2 rounded-lg border-stone-300"}/>
                                    </div>
                                </div>
                                <div className={'mb-6'}>
                                    <label>Sujet</label>
                                    <div>
                                        <input className={"w-full h-10 border-2 rounded-lg border-stone-300"}/>
                                    </div>
                                </div>
                                <div className={'mb-6'}>
                                    <label>Message</label>
                                    <div>
                                        <textarea className={"w-full h-48 border-2 rounded-lg border-stone-300"}>
                                        </textarea>
                                    </div>
                                </div>
                                <div>
                                <button className={'w-full bg-blue-500 text-gray-50 p-2'} type="submit">Envoyer</button>
                                </div>
                            </form>

                        </div>
                    </div>
             </div>

        </main>
    </div>
  );
}
