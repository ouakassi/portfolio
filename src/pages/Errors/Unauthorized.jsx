import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";

export default function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/login");
  };
  return (
    <Section
      className="login"
      icon="uil uil-shield-question"
      sectionTitle="Unauthorized"
      sectionSubtitle="Not authorized"
    >
      <h1 style={{ fontSize: "15rem", color: "red" }}>Unauthorized</h1>
      <button
        onClick={() => {
          goBack();
        }}
      >
        Go Back
      </button>
    </Section>
  );
}
