import React, { useEffect } from "react";

const Adspage = () => {
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div>
      <h1>Advertisement</h1>
      <p>This is the Ad page where advertisements will be shown.</p>

      {/* Google AdSense Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // Your AdSense publisher ID
        data-ad-slot="xxxxxxxxxx" // Your Ad slot ID
        data-ad-format="auto"
      ></ins>
    </div>
  );
};
export default Adspage;
