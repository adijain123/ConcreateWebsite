import React from 'react'
import { ThreeDCardDemo } from '../../UI/ThreeDCardDemo'
import { TypewriterEffectSmoothDemo } from '../../UI/TypewriterEffectSmoothDemo'
import { MovingBorderDemo } from '../../UI/MovingBorderDemo'

const teamMembers = [
  {
    image: "/team/Kunal.jpg",
    name: "Kunal Chandel",
    position: "Member",
    insta: "https://www.instagram.com/00__kunal/",
    linkedin: "https://linkedin.com/in/kunal-chandel-83626a24b/?originalSubdomain=in",
    email: "ce210004024@iiti.ac.in"
  },
  {
    image: "/team/Kishan.jpg",
    name: "Kishan Gupta",
    position: "Member",
    insta: "https://www.instagram.com/__kishan_30?igsh=MWZ1ZXZjdmI3OTNnOA==",
    linkedin: "https://www.linkedin.com/in/kishan-gupta-1828752b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "ce220004026@iiti.ac.in"
  },
  {
    image: "/team/Astitva.jpg",
    name: "Astitva Jain",
    position: "Member",
    insta: "",
    linkedin: "http://linkedin.com/in/astitva-jain0312",
    email: "ce220004013@iiti.ac.in"
  },
  {
    image: "/team/Abhay.jpg",
    name: "Abhay Kumar",
    position: "Member",
    insta: "https://www.instagram.com/_iitian_abhi_kumar_?igsh=MWl1OGVhbW51NGE4MA==",
    linkedin: "https://www.linkedin.com/in/abhay-kumar-976aa5212",
    email: "ce220004002@iiti.ac.in"
  },
  {
    image: "/team/Pushpendra.jpg",
    name: "Pushpendra Garg",
    position: "Member",
    insta: "https://www.instagram.com/pushpendragarg9636/",
    linkedin: "https://www.linkedin.com/in/pushpendra-kumar-b20a7225b/",
    email: "ce220004035@iiti.ac.in"
  },
  {
    image: "/team/Yagya.jpg",
    name: "Yagyaparna Mandwale",
    position: "Member",
    insta: "https://www.instagram.com/yagyaparna19/",
    linkedin: "https://www.linkedin.com/in/yagyaparna-mandwale-5b1673196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "ce230004052@iiti.ac.in"
  },
  {
    image: "/team/Sibasish.jpg",
    name: "Sibasish Barik",
    position: "Member",
    insta: "https://www.instagram.com/sibasish_barik22?igsh=MTR5Nndwa2Vibnl4dg==",
    linkedin: "https://www.linkedin.com/in/sibasish-barik-9b7b37259/",
    email: "ce230004044@iiti.ac.in"
  },
  {
    image: "/team/Nidarsana.jpg",
    name: "Nidarsana M",
    position: "Member",
    insta: "",
    linkedin: "https://www.linkedin.com/in/nidarsana-m-07a111292",
    email: "ce230004031@iiti.ac.in"
  },
  // Add more team members as needed
]

const TeamMembers = () => {
  return (
    <>
      <TypewriterEffectSmoothDemo />
      {/* club head */}
      <div className='flex flex-wrap justify-center items-center py-6'>
        <div className='flex flex-col items-center'>
          <span className='text-yellow-200 text-2xl sm:text-3xl font-bold'>
            <MovingBorderDemo text="Head" />
          </span>
          <ThreeDCardDemo
            key=""
            image="/team/harsh.jpg"
            name="Harsh Sharma"
            position="Head"
            insta="https://www.instagram.com/harsh_sharma781/"
            linkedin="https://www.linkedin.com/in/harsh-shrma/"
            email="ce220004020@iiti.ac.in"
          />
        </div>
        <div className='flex flex-col items-center mx-4'>
          <span className='text-yellow-200 text-2xl sm:text-3xl font-bold'>
            <MovingBorderDemo text="Co-Head" />
          </span>
          <ThreeDCardDemo
            key=""
            image="/team/Pushkar.jpg"
            name="Pushkar Singh Kushwaha"
            position="Co-Head"
            insta="https://www.instagram.com/@psk_tudki/"
            linkedin="https://www.linkedin.com/in/pushkar-singh-kushwaha"
            email="ce220004034@iiti.ac.in"
          />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-yellow-200 text-2xl sm:text-3xl font-bold'>
            <MovingBorderDemo text="Ex-Head" />
          </span>
          <ThreeDCardDemo
            key=""
            image="/team/himanshu.jpg"
            name="Himanshu Khati"
            position="Ex-Club Head"
            insta="https://www.instagram.com/him_army321/"
            linkedin="https://www.linkedin.com/in/himanshu-khati-b7061b231"
            email="ce210004017@iiti.ac.in"
          />
        </div>
      </div>
      <div className='text-yellow-200 text-center text-4xl sm:text-6xl font-bold py-6'>
        <MovingBorderDemo text="Members" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <ThreeDCardDemo
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              insta={member.insta}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center py-6'>
        <div className='flex flex-col items-center'>
          <span className='text-yellow-200 text-2xl sm:text-3xl font-bold'>
            <MovingBorderDemo text="Web-Developer" />
          </span>
          <ThreeDCardDemo
            key=""
            image="/team/adi.jpg"
            name="Adi Jain"
            position="Developer"
            insta="https://www.instagram.com/adijain151/"
            linkedin="https://www.linkedin.com/in/adi-jain-336277260/"
            email="ce220004003@iiti.ac.in"
          />
        </div>
      </div>
    </>
  )
}

export default TeamMembers
