import React from 'react'

const NavNotices = () => {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='https://exemplo.com' data-bs-toggle='dropdown'>
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                You have 4 new notificatios
                <a href="https://exemplo.com">
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        View all
                    </span>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider' />
            </li>

            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
            <div>
                <h4>Lorem Ipsum</h4>
                <p>sfrfwef fewfwefwe fwefwefw</p>
                <p>30 min. ago</p>
            </div>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>lorem ipum</h4>
                    <p>quase dolorem virificatioj odison</p>
                    <p>30 min ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>
            
            <li className='notification-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>atquem recue nasdsdvj</h4>
                    <p>quas dolorem easrum vifitatis oditseno</p>
                    <p>1 hr. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-check-circle text-sucess'></i>
                <div>
                    <h4>sit rerum fuga</h4>
                    <p>quase dolorem earum verification oditseno</p>
                    <p>2 hrs. ago</p>
                </div>
            </li>

                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li className='dropdown-footer'>
                    <a href="https://exemplo.com">Ahsdvdvjdvdvsdvsd sdfdfs</a>
                </li>
        </ul>
    </li>
  )
}

export default NavNotices