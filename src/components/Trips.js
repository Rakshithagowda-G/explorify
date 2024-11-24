import "./Tripstyle.css";
import Tripdata from "../components/Tripdata";
function Trips() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>

      <p>You Can Dicover Unique Destination Using Google Maps</p>

      <div className="Tripcard">
        <Tripdata
          image="https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Maldives"
          text="The Maldives,[d] officially the Republic of Maldives,[e] and historically known as the Maldive Islands, is a country and archipelagic state in South Asia in the Indian Ocean.[10] The Maldives is southwest of Sri Lanka and India."
        />
        <Tripdata
          image="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="This is in India"
          text="India, a land of diverse cultures, vibrant cities, and breathtaking landscapes, is a treasure trove of tourism destinations. From the majestic Taj Mahal in Agra to the serene backwaters of Kerala, and from the snow-capped Himalayas to the sun-kissed beaches of Goa, India offers a unique experience for every traveler. "
        />
        <Tripdata
          image="https://images.unsplash.com/photo-1647551639270-41014c517da6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Afghanisthan"
          text="Afghanistan, a country with a rich cultural heritage and breathtaking natural beauty, is an intriguing destination for adventurous travelers. Despite its tumultuous past, the country offers a unique experience for those willing to explore. From the ancient Buddha Niches of Bamiyan to the vibrant markets of Kabul, Afghanistan's cultural and historical significance is undeniabl"
        />
      </div>
    </div>
  );
}
export default Trips;
