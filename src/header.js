import './css/main.css';

const Header = () => {
    return (
    <header className="header" id="header">
		<div className="container">
			<div className="row">
				<hgroup>
					<h1 className="header__title">Верстка и разработка<br />сайтов</h1>
					<h2 className="header__subtitle">Сергей Медведкин</h2>			
				</hgroup>		
			</div>				
		</div>			
	</header>
    );
}

export default Header;