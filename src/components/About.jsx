import "../App.css"
import aboutPic from "../assets/images/aboutPic.jpg"

export default function About() {
  return (
    <div className="aboutRapper">
      <div className="about">
        <div className="aboutMeImage">
            <img src={aboutPic} alt="" />

        </div>
        <div className="aboutMeContent">
            <p>
            Hi there! Im Robert Blake, a passionate and creative web developer with expertise in both client-side and server-side technologies. I thrive on building responsive and user-friendly web applications that leave a lasting impact
            </p>
            <p>
            On the client-side, I have a strong command over HTML, CSS, and JavaScript, along with frameworks like React and Redux. Crafting beautiful user interfaces and engaging user experiences is my forte. Im well-versed in popular UI libraries such as Material UI, Bootstrap, and Materialize, and I enjoy exploring new technologies like React Native for mobile app development.
            </p>
            <p>
            When it comes to server-side development, I excel in Node.js and Express, creating robust and scalable backends. Im familiar with Next.js and Gatsby for server-side rendering, and I have hands-on experience with GraphQL and Apollo for efficient data handling. Real-time communication is a breeze for me using Socket.io, and I can easily integrate authentication with JSON Web Tokens
            </p>
            <p>
            Databases are no stranger to me, as Ive worked extensively with MongoDB and MySQL, utilizing ORMs like Mongoose and Sequelize for seamless data manipulation. Ive also dabbled in Firebase for real-time database solutions
            </p>
            <p>
            Testing is an integral part of my development process, and Im well-versed in Jest, Chai, and Mocha to ensure the reliability and stability of my applications
            </p>

        </div>
      </div>
    </div>
  )
}
