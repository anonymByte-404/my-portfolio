import React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aeron Asug. All rights reserved.</p>
    </footer>
  )
}
