const Footer = ({ children }) => (
  <>
  <div className="container">{children}</div>
  <style jsx>{`
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  `}</style>
  </>
)

export default Footer