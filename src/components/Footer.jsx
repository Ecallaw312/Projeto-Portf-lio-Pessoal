const currentYear = new Date().getFullYear()

function Footer({ name }) {
  return (
    <footer className="site-footer">
      <p>
        &copy; {currentYear}
        {name && ` · ${name}`}
      </p>
    </footer>
  )
}

export default Footer
