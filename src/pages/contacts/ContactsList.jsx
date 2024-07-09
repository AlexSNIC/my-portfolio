import { Link } from "react-router-dom";

function ContactList() {
  return (
      <ul className='contacts__list'>
        <li>
          <Link className="contacts__link underline" target='_blank' to="https://www.facebook.com/alexandru.solomon.716">
            <i className='bi bi-facebook'></i> <span className='contacts__link-text'> alexandru.solomon.716 </span>
          </Link>
        </li>
        <li>
          <Link className="contacts__link underline" target='_blank' to="https://www.instagram.com/alexandry_solomon/">
            <i className='bi bi-instagram'></i> <span className='contacts__link-text'> @alexandry_solomon </span>
          </Link>
        </li>
        <li>
          <Link className="contacts__link underline" target='_blank' to="https://gmail.google.com">
            <i className='bi bi-envelope-at'></i> <span className='contacts__link-text'> alexandru13321@gmail.com </span>
          </Link>
        </li>
        <li>
          <Link className="contacts__link underline" to="tel:068566313">
            <i className='bi bi-telephone-fill'></i> <span className='contacts__link-text'> +373-685-66-313 </span>
          </Link>
        </li>
      </ul>
      );
}
export default ContactList;