import { useEffect } from "react";

const Contact = () => {
      // Dynamic title
  useEffect(()=> {
    document.title='Berao | Contact'
  },[])
    return (
        <div>
            Contact page
        </div>
    );
};

export default Contact;