import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({rate}) {
    return  <>
        <span className="badge badge-pill bg-dark">{rate} <FontAwesomeIcon
        icon={faStar}/></span>
    </>
}