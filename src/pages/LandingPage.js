import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Reasons from "../components/Reasons";
import Footer from "../components/Footer";
import SubscriptionForm from "../components/SubscriptionForm";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Reasons />
      <Footer />
      <SubscriptionForm />
    </>
  );
}

export default LandingPage;
