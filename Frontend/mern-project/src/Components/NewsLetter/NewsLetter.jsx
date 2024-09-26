import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our NewsLetter to stay updated</p>
      <div>
        <input type="email" placeholder="enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
