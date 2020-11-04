import './css/main.css';

const Nav = () => {
    return (
    <nav className="main-nav">
		<div className="container">
			<div className="row">
				<div className="two columns ">
					<p className="logo main-nav__logo">см</p>
				</div>
				<div className="ten columns">
					<ul className="main-nav__list" id="main-menu">
						<li className="main-nav__item active">
							<a className="main-nav__link" href="https://medvedkinsergey.ru">Главная</a>
						</li>
						<li className="main-nav__item">
							<a className="main-nav__link" href="https://medvedkinsergey.ru/#feedback">Контакты</a>
						</li>
						<li className="main-nav__item">
							<a className="main-nav__link" href="https://medvedkinsergey.ru">Цены</a>
						</li>
						<li className="main-nav__item">
							<a className="main-nav__link" href="https://medvedkinsergey.ru">Гостевая</a>
						</li>
					</ul>	
				</div>		
			</div>
		</div>	
	</nav>
    );
}

export default Nav;