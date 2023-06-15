import { Link } from 'react-router-dom';

const crumbs = ['Home', 'Sub Page 2', 'Sub Page 3', 'Sub Page 4']

function Breadcrumb() {
  return (
    <div className="hidden max-w-swd mobile:flex items-center mb-6">
      {crumbs.map((crumb) => (
        <Link className="text-center" to={crumb} key={crumb}>
          <span className="text-xs font-light text-center text-grey-light dark:text-grey-extra-light">{crumb}</span>
          <span className="inline-block w-1 h-2 my-1 mx-2 bg-crumb-divided text-grey-light dark:text-grey-extra-light"></span>
        </Link>
      ))}
    </div>
  )
}

export default Breadcrumb;