import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="" />
        <span>Shivanshu</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALMAvwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwEHAv/EADgQAQACAgEBBAUKBAcAAAAAAAABAgMEEQUGEiExE0FRUnEjMjVhcoGRocHRFHOx4TNCQ1Nig/H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AigAAAAAAAAAAAA74NTZ2P8HBkvHtivgDgLKnQ+oW88EV+1eP3QtnXyaua2HNERevnxPIOQAAAAAAAAAAAAAAAAND0joUTWufdr5+NcU/r+wKjS6fs7s/IY57vrvbwrH3rzV7N4a8Ts5bZJ92nhC8rWK1isRERHqiPB6CNg0NTXj5HXx1n28cz+MpPqAETqUbEaeWdKPlvVx5/XwxFotFp7/Pe58efPl9CV3U+lYd+Jt4Y80eV4jz+IMaOuzr5dXNOLPTu3j8/g5AAAAAAAAAAAAAAAu+zWjGfNbZyxzTFPFY9tv7NQruz9Ip0rDx/m5tP4rEAAAAAAEHqvT6b+vNfCMtY5x29k+z4MZetqXtS0cWrPEx7JfQWP7RUinVcndjjvRFp+PAKwAAAAAAAAAAAAAG16HHHStb7P6pyF0WOOla32E0AAAAAABk+0/0n/11/VrGT7T/AEnH8qv6gqAAAAAAAAAAAAAdtTWybexXBi479vLmfAGx6P8ARer/AC4TEfQw219PDhvxNqV4mY8kgAAAAAABk+0/0nH8qv6tVfyZvtNq5p2P4ru/IxWte9z6wUQAAAAAAAAAAACd0S3d6rrePHNuPyQXbUyRh28OWfKmStp+ESDejyJiYiY8YnyegAAAAAAKntNbjpnHtyVhbKLtZkiNfBi58bXm3H1RH9wZkAAAAAAAAAAAAAGt7O7dtjR7mSebYrd37vUtmY7K5YrtZsUz8+kTHxj/ANacAAAAAABiOrblt3dvefmVnu0j6oa3qex/DaGfLzxMVmK/GfCGGAAAAAAAAAAAAAAB21Ni2rs48+P51J549v1NxrbGPZw1zYrc0tH4fUwLR9lO96LZnme73q8R6uQaAAAAAHk+cfEGb7T7sXvXUx25is96/Ht9UKF12pmdrNMzzPpLf1cgAAAAAAAAAAAAAAGo7LV40Mlvey/pCl6Poxv7cY7zMY6x3r8efDX6uri1MPosFZrTmZ4meQdgAAADjmYAGA2PHYy/bt/VzXfaDpmLVrXYwcxW9uLVmefGfHlSAAAAAAAAAAAAACTqaGzuW4wYrWj3p8Ij713p9m6V4tuZe9PuU8I/EHvZbVmmHJs2/wBSe7X4R5/n/RfPxhxUwYq4sVe7SscRD9gAAAAAAhdY1Z2+n5cdfn1jv1+MMS+hetUbnZ/WzTNsFrYbz4+2v4AygsNzo25q8z6P0lPex+P5eavAAAAAAAFpodE2tri949Djn12jxn4Q0Oj0rV0uJpj7+T/cv4z93sBm9Lo25tcT3PRY/ev4fhC90+hamtxbJX09/bfy+6FqA8iIiIiIiIjyiHoAAAAAAAAAAAIm503U24+Vwx3vfr4W/FLAZjc7O5sfNtS8Za+7bwt+ymy4smG80y0tS8eq0cN/LnnwYtjH3M+Ot6+yYBgRot3s5HjbTycf8L/uotjWza1+5nx2pb648/gDk0PZbXw3rkzXx1tkrbitp8eABoYnnl6AAAAAAAAAAAAAAAAAAADnnxY81e5lx1vX2Wjl4A//2Q=="
            alt=""
          />
          <span>Shivanshu</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
