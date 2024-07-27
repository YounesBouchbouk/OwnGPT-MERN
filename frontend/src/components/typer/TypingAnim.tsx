import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "YounesDev, MERN STACK",
        3000,
        "Chat With Your OWN AI",
        1000,
        "Built With Power Of OpenAI 🤖",
        2000,
        "Your Own Customized ChatGPT 💻",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
