import React from 'react'
import { LensDemo } from './../../UI/LensDemo'
import { MovingBorderDemo } from '../../UI/MovingBorderDemo'

const Activities = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="text-gray-300 body-font bg-transparent">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h2 className="text-base text-indigo-400 tracking-widest font-medium title-font mb-1">
              IIT INDORE welcomes You
            </h2>
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
              <MovingBorderDemo text="1. Bridge Making Competition" />
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg bg-green-950 bg-opacity-50 p-4 rounded">
              The Bridge Making Competition at IIT Indore is an exciting and intellectually stimulating event that fosters creativity, engineering acumen, and teamwork among participants. This competition challenges students to apply theoretical knowledge in a practical setting, combining physics, structural engineering, and innovative design to construct durable, efficient bridges. Participants have the opportunity to showcase their problem-solving skills, creativity, and technical expertise, making it a highly anticipated event for budding engineers. With a spirit of innovation and collaboration, the competition also offers a platform for networking, learning, and personal growth.
            </p>
          </div>

          {/* Image Grid */}
          <div className="flex flex-wrap justify-center pb-5 border-b border-yellow-600">
            {['/recent/Bimg1.jpg', '/recent/Bimg2.jpg', '/recent/Bimg3.jpg', '/recent/Bimg4.jpg'].map((img, idx) => (
              <div key={idx} className="xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full p-4">
                <LensDemo image={img} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-gray-200 body-font bg-transparent">
        <div className="container px-5 mx-auto">
          <h1 className="sm:text-4xl text-2xl font-medium title-font text-white mb-6 text-center">
            <MovingBorderDemo text="2. IITI Summer Of Code" />
          </h1>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto">
            <div className="lg:w-1/2 p-4">
              <LensDemo image="/recent/IITISOC1.jpg" />
            </div>
            <div className="lg:w-1/2 w-full p-4">
              <p className="text-lg leading-relaxed text-center lg:text-left bg-blue-950 bg-opacity-50 p-4 rounded">
                The IITI SOC Concrete Club successfully held its recent event, featuring workshops and discussions on innovative concrete technology. It was a great platform for students to engage and learn from industry experts.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center border-b border-yellow-600 pb-5">
            <div className="lg:w-1/2 w-full p-4">
              <p className="text-lg leading-relaxed text-center lg:text-left bg-blue-950 bg-opacity-50 p-4 rounded">
                The event highlighted the importance of sustainable construction and future advancements in civil engineering. Participants gained hands-on experience and valuable insights from the sessions.
              </p>
            </div>
            <div className="lg:w-1/2 p-4">
              <LensDemo image="/recent/IITISOC2.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="text-gray-400 body-font bg-transparent">
        <div className="container px-5 mx-auto">
          <h1 className="sm:text-4xl text-2xl font-medium title-font text-white mb-6 text-center">
            <MovingBorderDemo text="3. Technical Exhibition" />
          </h1>

          <div className="flex flex-wrap items-center justify-center border-b border-yellow-600 mb-6">
            <div className="md:w-1/2 w-full p-4">
              <LensDemo image="/recent/techexpo1.jpg" />
            </div>
            <div className="md:w-1/2 w-full p-4">
              <LensDemo image="/recent/techexpo2.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Activities
