import { useEffect } from "react";

const Package = () => {
      // Dynamic title
  useEffect(()=> {
    document.title='Berao | Package'
  },[])
    return (
        <div>
            This is package.
        </div>
    );
};

export default Package;