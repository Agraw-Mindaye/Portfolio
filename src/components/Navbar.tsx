import { CSSProperties } from "react";

const navStyles : CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa', // Light gray background
    borderBottom: '1px solid #e0e0e0', // Optional border for separation
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
}

const nameContainerStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}

const Navbar = () => {
    return (
        <nav style={navStyles}>
            <div style={nameContainerStyles}>
                {/* Name left aligned */}
                <a
                    href="/"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#333'
                    }}
                >Agraw Mindaye
                </a>

                <span style={{
                    fontSize: '1.5rem',
                    marginLeft: '0.5rem',
                    color: '#000'

                }}
                >|</span>


            </div>
        </nav>
    )

}

export default Navbar;