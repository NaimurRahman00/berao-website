import { useEffect } from "react";

const Contact = () => {
  // Dynamic title
  useEffect(() => {
    document.title = "Berao | Contact";
  }, []);
  return (
    <div className="">
      <h1>Contact page</h1>
    </div>
  );
};

export default Contact;
