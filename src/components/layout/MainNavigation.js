import { Link } from 'react-router-dom'


function MainNavigation() {
  return (
    <header>
      <div>Yo Yo Yo</div>
      <nav>
        <ol>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
          
        </ol>
      </nav>
    </header>
  );
}

export default MainNavigation;
