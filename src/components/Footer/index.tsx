import "./style.scss"

const Footer = () => {
  return (
    <>
    <div className="subscription">
        <h1>Subscribe to our newsletter</h1>
        <p>Get the latest news about our company and stay updated</p>
        <div className="center">
          <img src="airplane.svg" alt="airplane" />
          <div className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button className="btn-secondary">Subscribe</button>
          </div>
        </div>
    </div>
      <footer>
          <img src="logo.svg" alt="footer" />
          <h3>Real Estate</h3>
      </footer>
    </>
  )
}

export default Footer