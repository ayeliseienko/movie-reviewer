import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function Logo(): JSX.Element {
  return (
    <div className='flex items-center justify-center gap-1'>
      <FontAwesomeIcon icon={faStarHalfAlt} />
      <h1 className='text-lg'>Movie Reviewer</h1>
    </div>
  );
}
