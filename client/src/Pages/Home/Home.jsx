import React from 'react';
import Footer from '../../Shared-Components/Footer';
import Navbar from '../../Shared-Components/Navbar';
import { HomeBanner } from '../../Shared-Components/Home/HomeBanner/HomeBanner';
// eslint-disable-next-line max-len
import CommunityReviewSection from '../../Shared-Components/Home/CommunityReviewSection/CommunityReviewSection';
import {
  HomeCont1,
  HomeCont2,
  HomeCont3,
} from '../../Shared-Components/Home/HomeContainers';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle(`Coursera`);

  // const [redirectUrl, setRedirectUrl] = useState("");

  //   const commands = [
  //     {
  //       command: ["Go to * page", "Go to *", "Open * page", "Open *"],
  //       callback: (redirectPage) => setRedirectUrl(redirectPage),
  //     },
  //   ];

  //   const { transcript } = useSpeechRecognition({ commands });

  //   const pages = ["Home", "Explore", "Profile"];
  //   const urls = {
  //     Home: "/",
  //     Explore: "/browse/:category",
  //     Profile: "/contact",
  //   }

  //   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //     return null;
  //   }

  //   let redirect = "";

  //   if (redirectUrl) {
  //     if (pages.includes(redirectUrl)) {
  //       redirect = <Redirect to={urls[redirectUrl]} />;
  //     } else {
  //       redirect = <p>Could not find page: {redirectUrl}</p>;
  //     }
  //   }

  return (
    <div>
      <Navbar />
      <HomeBanner />

      <HomeCont1 />
      <HomeCont2 />
      <HomeCont3 />
      <CommunityReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
